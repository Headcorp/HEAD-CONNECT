

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
      console.log(courseId)
      const ratings = await listRatings(`${courseId}`);
      res.status(200).json(ratings)
      break;
  
    default:
      break;
  }
}

export async function listRatings(id: string) {
  console.log(`${URL}/ratings`, id);
  //const intIds = ids.map(id => parseInt(id))
  const { data } = await axios.post(`${URL}/ratings`, {
    params:{ids: [id]}
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  // console.log(data.result)
  if (typeof data.result !== 'undefined') {
    return JSON.parse(data.result).ratings
  }
  return null
  // return JSON.parse(data.result).ratings
}
