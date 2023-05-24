import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$CourseWorkMaterial | undefined>
) {
  const {id, courseId} = req.query
  switch (req.method) {
    case 'GET':
      const courseWorkMaterial = await getCourseWorkMaterial(`${id}`, `${courseId}`);
      res.status(200).json(courseWorkMaterial)
      break;
  
    default:
      break;
  }
  
}


async function getCourseWorkMaterial(id: string, courseId: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.courseWorkMaterials.get({
    courseId,
    id
  })
  const courseWorkMaterial = res.data
  if (!courseWorkMaterial) {
    console.log('No courseWorkMaterial found.');
    return;
  }
  console.log('courseWorkMaterials:');
  console.log(`${courseWorkMaterial.title} (${courseWorkMaterial.id})`);
  console.log(typeof courseWorkMaterial);
  return courseWorkMaterial
}