// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const URL = process.env.URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {courseId} = req.query
  switch (req.method) {
    case 'GET':
      const course = await getCourse(`${courseId}`);
      res.status(200).json(course)
      break;
  
    default:
      break;
  }
}

export async function getCourse(id: string) {
  const { data } = await axios.post(`${URL}/courses`, {
    params:{id: id}
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return JSON.parse(data.result).courses[0]
}