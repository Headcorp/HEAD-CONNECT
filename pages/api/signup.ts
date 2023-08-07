// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const URL = process.env.URL || 'http://localhost:8069/nextjs'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {email:login, name, password, activeLocale:lang} = req.body
    // console.log(req.body)
    try {
      const {data} = await axios.post(`${URL}/signup`,null, {
        params:{login, lang, password, name, signup_email: login, confirm_password: password}
      })
      res.redirect('/api/login')
    } catch (error) {
      res.status(500).send({error})
    }
    /*let formData = new FormData();
    formData.append('signup_email', `${email}`);
    formData.append('name', `${name}`);
    formData.append('login', `${email}`);
    formData.append('lang', `${activeLocale}`);
    formData.append('password', `${password}`);
    formData.append('confirm_password', `${password}`);
    console.log(formData)
    await fetch(`${URL}/signup`, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(async (data) => {
      const {isAuth, user} = await authUtil(req)
      res.status(200).json({isAuth, user})
    }).catch(err => {
      console.log(err)
      res.status(500).send({error: err.toString()})
    });
  //res.status(200).json({'name':'p'})*/
}