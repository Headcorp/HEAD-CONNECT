

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
      const ratings = await listRatings(`${courseId}`);
      res.status(200).json(ratings)
      break;
  
    default:
      break;
  }
}

export async function listRatings(channel_id: string) {
  console.log(`${URL}/ratings`);
  const { data } = await axios.post(`${URL}/ratings`, {
    params: {channel_id}
  }, {
    headers: {
      "rating-Type": "application/json"
    }
  });
  if (typeof data.result !== 'undefined') {
    return JSON.parse(data.result).ratings
  }
  return null
  // return JSON.parse(data.result).ratings
}