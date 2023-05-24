import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$CourseWork[] | undefined>
) {
  const {id} = req.query
  switch (req.method) {
    case 'GET':
      const courseWorks = await listCourseWorks();
      res.status(200).json(courseWorks)
      break;
  
    default:
      break;
  }
  
}


async function listCourseWorks() {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.courseWork.list({
    pageSize: 10
  })
  const courseWorks = res.data.courseWork
  if (!courseWorks || courseWorks.length === 0) {
    console.log('No courseWorks found.');
    return;
  }
  console.log('courseWorks:');
  courseWorks.forEach((courseWork) => {
    console.log(`${courseWork.title} (${courseWork.id})`);
    console.log(typeof courseWork);
  });
  return courseWorks
}