import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'

const URL = process.env.URL || 'http://localhost:8069/headconnect'
const DB = process.env.DB || 'Test'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'GET':
      const courses = await listCourses();
      res.status(200).json(courses)
      break;
  
    default:
      break;
  }
}

export async function listCourses() {
  console.log(`${URL}/courses`);
  const { data } = await axios.post(`${URL}/courses`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  // if (typeof data.result !== 'undefined') {
  //   return JSON.parse(data.result).courses
  // }
  // return null
  // console.log(data.result)
  return JSON.parse(data.result).courses
}