import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

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
  let courseWorkMaterial
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id], ["courseId", "=", courseId]]);
    inParams.push(["courseId", "id", "title", "description", "materials[]", "state", "alternateLink", "creationTime", "updateTime", "scheduledTime", "assigneeMode", "individualStudentsOptions", "creatorUserId", "topicId"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        courseWorkMaterial = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.courseWorkMaterials.get({
  //   courseId,
  //   id
  // })
  // const courseWorkMaterial = res.data
  // if (!courseWorkMaterial) {
  //   console.log('No courseWorkMaterial found.');
  //   return;
  // }
  // console.log('courseWorkMaterials:');
  // console.log(`${courseWorkMaterial.title} (${courseWorkMaterial.id})`);
  // console.log(typeof courseWorkMaterial);
  return courseWorkMaterial
}