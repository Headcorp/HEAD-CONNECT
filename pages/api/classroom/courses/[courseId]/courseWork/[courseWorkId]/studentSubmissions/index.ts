import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.classroom_v1.Schema$StudentSubmission[] | undefined>
) {
  switch (req.method) {
    case 'GET':
      const studentSubmissions = await listStudentSubmissions();
      res.status(200).json(studentSubmissions)
      break;
  
    default:
      break;
  }
  
}


async function listStudentSubmissions() {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.courseWork.studentSubmissions.list({
    pageSize: 10,
  });
  const studentSubmissions = res.data.studentSubmissions
  if (!studentSubmissions || studentSubmissions.length === 0) {
    console.log('No studentSubmissions found.');
    return;
  }
  console.log('studentSubmissions:');
  studentSubmissions.forEach((studentSubmission) => {
    console.log(`${studentSubmission.assignmentSubmission}`);
    console.log(typeof studentSubmission);
  });
  return studentSubmissions
}