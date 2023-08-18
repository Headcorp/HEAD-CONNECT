import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';
import axios from 'axios';

const URL = process.env.URL || 'http://localhost:8069/headconnect'
const DB = process.env.DB || 'Test'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Teacher[] | undefined>
) {
  const {courseId} = req.query
  switch (req.method) {
    case 'GET':
      const teachers = await listTeachers(`${courseId}`);
      res.status(200).json(teachers)
      break;
  
    default:
      break;
  }
}


export async function listTeachers(id: string) {
  // console.log(`${URL}/teacher`, id);
  const { data } = await axios.post(`${URL}/teacher`, {
    params: {channel_id: parseInt(id)}
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  // console.log(data.result)
  if (typeof data.result !== 'undefined') {
    return JSON.parse(data.result).teacher
  }
  return null
}
