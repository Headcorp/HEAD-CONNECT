// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //const r = res.redirect('/api/auth/session')
  //console.log(r)
  res.status(200).json({ name: 'John Doe' })
}
