import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Student | undefined>
) {
  const {id, courseId} = req.query
  switch (req.method) {
    case 'GET':
      const student = await getStudent(`${id}`, `${courseId}`);
      res.status(200).json(student)
      break;
  
    default:
      break;
  }
  
}


async function getStudent(id: string, courseId: string) {
  let student
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id], ["courseId", "=", courseId]]);
    inParams.push(["courseId", "userId", "profile", "studentWorkFolder"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        student = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.students.get({
  //   courseId,
  //   userId:id
  // })
  // const student = res.data
  // if (!student) {
  //   console.log('No student found.');
  //   return;
  // }
  // console.log('students:');
  // console.log(`${student.userId} (${student.profile})`);
  // console.log(typeof student);
  return student
}