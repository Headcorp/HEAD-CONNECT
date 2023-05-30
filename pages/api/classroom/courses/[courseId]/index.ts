import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Course | undefined>
) {
  const {courseId} = req.query
  switch (req.method) {
    case 'GET':
      const course = await getCourse(`${courseId}`);
      res.status(200).json(course)
      break;
  
    default:
      break;
  }
  
}


export async function getCourse(id: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.get({
    id
  })
  const course = res.data
  if (!course) {
    console.log('No course found.');
    return;
  }
  console.log('Courses:');
  console.log(`${course.name} (${course.id})`);
  console.log(typeof course);
  return course
}