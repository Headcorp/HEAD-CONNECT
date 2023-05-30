import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$CourseWorkMaterial[] | undefined>
) {
  const {courseId} = req.query
  switch (req.method) {
    case 'GET':
      const courseWorkMaterials = await listCourseWorkMaterials(`${courseId}`);
      res.status(200).json(courseWorkMaterials)
      break;
  
    default:
      break;
  }
  
}


export async function listCourseWorkMaterials(courseId: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.courseWorkMaterials.list({
    courseId
  })
  const courseWorkMaterials = res.data.courseWorkMaterial
  if (!courseWorkMaterials || courseWorkMaterials.length === 0) {
    console.log('No courseWorkMaterials found.');
    return;
  }
  console.log('courseWorkMaterials:');
  courseWorkMaterials.forEach((courseWorkMaterial) => {
    console.log(`${courseWorkMaterial.title} (${courseWorkMaterial.id})`);
    console.log(typeof courseWorkMaterial);
  });
  return courseWorkMaterials
}