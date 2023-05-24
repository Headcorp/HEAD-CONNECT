import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$CourseWorkMaterial[] | undefined>
) {
  
  switch (req.method) {
    case 'GET':
      const courseWorkMaterials = await listCourseWorkMaterials();
      res.status(200).json(courseWorkMaterials)
      break;
  
    default:
      break;
  }
  
}


async function listCourseWorkMaterials() {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.courseWorkMaterials.list({
    pageSize: 10
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