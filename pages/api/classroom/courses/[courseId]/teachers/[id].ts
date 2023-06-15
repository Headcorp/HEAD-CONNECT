import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Teacher | undefined>
) {
  const {id, courseId} = req.query
  switch (req.method) {
    case 'GET':
      const teacher = await getTeacher(`${id}`, `${courseId}`);
      res.status(200).json(teacher)
      break;
  
    default:
      break;
  }
  
}


async function getTeacher(id: string, courseId: string) {
  let teacher
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id], ["courseId", "=", courseId]]);
    inParams.push(["courseId", "userId", "profile"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        teacher = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.teachers.get({
  //   courseId,
  //   userId: id
  // })
  // const teacher = res.data
  // if (!teacher) {
  //   console.log('No teacher found.');
  //   return;
  // }
  // console.log('teachers:');
  // console.log(`${teacher.userId} (${teacher.profile})`);
  // console.log(typeof teacher);
  return teacher
}