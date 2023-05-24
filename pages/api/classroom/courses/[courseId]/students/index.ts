import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Student[] | undefined>
) {
  
  switch (req.method) {
    case 'GET':
      const students = await listStudents();
      res.status(200).json(students)
      break;
  
    default:
      break;
  }
  
}


async function listStudents() {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.students.list({
    pageSize: 10
  })
  const students = res.data.students
  if (!students || students.length === 0) {
    console.log('No students found.');
    return;
  }
  console.log('students:');
  students.forEach((student) => {
    console.log(`${student.userId} (${student.profile})`);
    console.log(typeof student);
  });
  return students
}