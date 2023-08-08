import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';
import axios from 'axios';

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


async function listTeachers(id: string) {
  console.log(`${URL}/teacher`, id);
  const { data } = await axios.post(`${URL}/teacher`, {
    params: {channel_id: parseInt(id)}
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log(data.result)
  if (typeof data.result !== 'undefined') {
    return JSON.parse(data.result).teacher
  }
  return null
  // return JSON.parse(data.result).content
}
  // let teachers
  // odoo.connect(function (err: any) {
  //   if (err) { return console.log(err); }
  //   console.log('Connected to Odoo server.');
  //   var inParams = [];
  //   inParams.push([["courseId", "=", courseId]]);
  //   var params = [];
  //   params.push(inParams);
  //   odoo.execute_kw('res.partner', 'search', params, function (err: any, value: any) {
  //       if (err) { return console.log(err); }
  //       console.log('Result: ', value);
  //       teachers = value
  //   });
  // });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.teachers.list({
  //   courseId
  // })
  // const teachers = res.data.teachers
  // if (!teachers || teachers.length === 0) {
  //   console.log('No teachers found.');
  //   return;
  // }
  // console.log('teachers:');
  // teachers.forEach((teacher) => {
  //   console.log(`${teacher.userId} (${teacher.profile})`);
  //   console.log(typeof teacher);
  // });
//   return teachers
// }