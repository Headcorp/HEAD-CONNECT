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
      const contents = await listContents(`${courseId}`);
      res.status(200).json(contents)
      break;
  
    default:
      break;
  }
}

export async function listContents(id: string) {
  console.log(`${URL}/contents`, id);
  const { data } = await axios.post(`${URL}/contents`, {
    params: {channel_id: parseInt(id)}
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  // console.log(data.result)
  if (typeof data.result !== 'undefined') {
    return JSON.parse(data.result).content
  }
  return null
  // return JSON.parse(data.result).content
}
