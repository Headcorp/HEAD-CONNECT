import NextAuth, { AuthOptions, Session } from "next-auth"
import "../../../types/next-auth.d.ts"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import {CredentialsConfig} from "next-auth/providers/credentials" 
import axios from "axios"
import { JWT } from "next-auth/jwt"
import { AdapterUser } from "next-auth/adapters"
import {credentialsType} from '../../../types/auth.js'

const URL = process.env.URL || 'http://localhost:8069/headconnect'
const DB = process.env.DB || 'Test'
NextAuth
export const authOptions:AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
    }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_ID}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        confirmPassword: { label: "Confirm Password", type: "password" },
        firstTime: { label: "First Time", type:"checkbox", },
        name: { label: "Name", type:"text" }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        console.log(credentials)
        if(credentials!.confirmPassword){
          const {data} = await axios.post(`${URL}/signup`,null, {
            params:{login:credentials!.username, lang:"en_US", password:credentials!.password, name: credentials!.name, signup_email: credentials!.username, confirm_password: credentials!.confirmPassword}
          })
          console.log(data)
          if (data.error) {
            console.log(1)
            return null
          }
          console.log(2)
        }
        const res = await axios.post(`${URL}/session/authenticate`, {
          params: {login: credentials!.username, password: credentials!.password, db: DB}
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        console.log(res.data)

      
        // If no error and we have user data, return it
        if (!res.data.error) {
          console.log(4)
          const {data} = res
          data.result['web.base.url'] = ''
          const {db, server_version, server_version_info, support_url, dbuuid, ...rest} = data.result
          const user: any = rest
          return user
        }
        console.log(5, res.data.error)
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async session({ session, token, user }:{
      session: Session;
      token: JWT;
      user: AdapterUser;
    }  & {
      newSession: any;
      trigger: "update";
    }) {
      // Send properties to the client, like an access_token and user id from a provider.
      //session.accessToken = token.accessToken
      session.user.id = token.sub
      session.user.mat = user.id
      
      return session
    },
  
    async signIn({user, profile, credentials, email, account}){
      console.log(6)
      if(account?.provider!=='credentials'){
        const res = await axios.post(`${URL}/session/authenticate`, {
          params: {login: email, password: profile?.sub || account?.providerAccountId, db: DB}
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (!res.data.error) {
          const {data} = res
          data.result['web.base.url'] = ''
          const {db, server_version, server_version_info, support_url, dbuuid, ...rest} = data.result
          const user: any = rest
          return true
        }
        const {data} = await axios.post(`${URL}/signup`,null, {
          params:{login:email, lang:"en_US", password:profile?.sub || account?.providerAccountId, name: profile?.name, signup_email: email, confirm_password: profile?.sub || account?.providerAccountId}
        })
        if(!data.error){
          const {db, server_version, server_version_info, support_url, dbuuid, ...rest} = data.result
          const user: any = rest
          return true
        }
        return false
      }
      console.log(7)
      return true
    }
  }
}

export default NextAuth(authOptions)
