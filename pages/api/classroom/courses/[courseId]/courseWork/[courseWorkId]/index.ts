import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$CourseWork | undefined>
) {
  const {courseId, courseWorkId} = req.query
  switch (req.method) {
    case 'GET':
      const courseWork = await getCourseWork(`${courseWorkId}`, `${courseId}`);
      res.status(200).json(courseWork)
      break;
  
    default:
      break;
  }
  
}


async function getCourseWork(id: string, courseId: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.courseWork.get({
    courseId,
    id
  })
  const courseWork = res.data
  if (!courseWork) {
    console.log('No courseWork found.');
    return;
  }
  console.log('courseWorks:');
  console.log(`${courseWork.title} (${courseWork.id})`);
  console.log(typeof courseWork);
  return courseWork
}