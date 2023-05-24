import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Teacher[] | undefined>
) {
  
  switch (req.method) {
    case 'GET':
      const teachers = await listTeachers();
      res.status(200).json(teachers)
      break;
  
    default:
      break;
  }
  
}


async function listTeachers() {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.teachers.list({
    pageSize: 10
  })
  const teachers = res.data.teachers
  if (!teachers || teachers.length === 0) {
    console.log('No teachers found.');
    return;
  }
  console.log('teachers:');
  teachers.forEach((teacher) => {
    console.log(`${teacher.userId} (${teacher.profile})`);
    console.log(typeof teacher);
  });
  return teachers
}