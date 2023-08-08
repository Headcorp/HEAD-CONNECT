

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'

const URL = process.env.URL || 'http://localhost:8069/headconnect'
const DB = process.env.DB || 'Test'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const {courseId} = req.query;

  switch (req.method) {

    case 'GET':
      const rating = await getRating(`${courseId}`);
      res.status(200).json(rating)
      break;

    default:
      break;
  }
}

export async function getRating(channel_id: string) {
  console.log(`${URL}/ratings`);
  const { data } = await axios.post(`${URL}/ratings`, {
    params: {channel_id}
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (typeof data.result !== 'undefined') {
    return JSON.parse(data.result).ratings[0]
  }
  return null
  // return JSON.parse(data.result).ratings
}