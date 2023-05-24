import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

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
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.students.get({
    courseId,
    userId:id
  })
  const student = res.data
  if (!student) {
    console.log('No student found.');
    return;
  }
  console.log('students:');
  console.log(`${student.userId} (${student.profile})`);
  console.log(typeof student);
  return student
}