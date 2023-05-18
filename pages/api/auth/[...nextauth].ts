import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"

const URL = process.env.URL || 'http://localhost:8069/nextjs'
const DB = process.env.DB || 'hcs'

export const authOptions = {
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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        console.log(credentials)
        const res = await axios.post(`${URL}/session/authenticate`, {
          params: {login: credentials.username, password: credentials.password, db: DB}
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        })
      
        // If no error and we have user data, return it
        if (!res.data.error) {
          const {data} = res
          data.result['web.base.url'] = ''
          const {db, server_version, server_version_info, support_url, dbuuid, ...rest} = data.result
          const user: any = rest
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  }
}

export default NextAuth(authOptions)
