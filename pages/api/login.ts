// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

const URL = process.env.URL || 'http://localhost:8069/headconnect'
const DB = process.env.DB || 'Test'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {email: login, password, activeLocale: lang} = req.body
  try {
    const {data} = await axios.post(`${URL}/session/authenticate`, {
      params: {login, password, db: DB}
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    data.result['web.base.url'] = ''
    const {db, server_version, server_version_info, support_url, dbuuid, ...rest} = data.result
    const user = rest
    // console.log(data)
    res.status(200).send(data)
  } catch(error){
    // console.log(error)
    res.status(400).send({error})
  }
}