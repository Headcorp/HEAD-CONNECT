import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-auth';
import axios from 'axios';
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.classroom_v1.Schema$StudentSubmission[] | undefined>
) {
  const {courseId, courseWorkId} = req.query
  switch (req.method) {
    case 'GET':
      const {data}:{data: Session} = await axios.get(`${URL}/api/auth/session`)
      const {id} = data.user
      const studentSubmissions = await listStudentSubmissions(`${id}`, `${courseWorkId}`, `${courseId}`);
      res.status(200).json(studentSubmissions)
      break;
  
    default:
      break;
  }
  
}


export async function listStudentSubmissions(userId: string, courseWorkId: string, courseId: string,) {
  let studentSubmissions
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["userId", "=", userId], ["courseWorkId", "=", courseWorkId], ["courseId", "=", courseId]]);
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        studentSubmissions = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.courseWork.studentSubmissions.list({
  //   courseId, courseWorkId, userId
  // });
  // const studentSubmissions = res.data.studentSubmissions
  // if (!studentSubmissions || studentSubmissions.length === 0) {
  //   console.log('No studentSubmissions found.');
  //   return;
  // }
  // console.log('studentSubmissions:');
  // studentSubmissions.forEach((studentSubmission) => {
  //   console.log(`${studentSubmission.assignmentSubmission}`);
  //   console.log(typeof studentSubmission);
  // });
  return studentSubmissions
}