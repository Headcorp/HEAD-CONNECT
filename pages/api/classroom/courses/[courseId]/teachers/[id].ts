import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

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
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.teachers.get({
    courseId,
    userId: id
  })
  const teacher = res.data
  if (!teacher) {
    console.log('No teacher found.');
    return;
  }
  console.log('teachers:');
  console.log(`${teacher.userId} (${teacher.profile})`);
  console.log(typeof teacher);
  return teacher
}