import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';
import axios from 'axios';

const URL = process.env.URL || 'http://localhost:8069/headconnect'
const DB = process.env.DB || 'Test'

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
  const { data } = await axios.post(`${URL}/courses`, {
    params:{courseId: courseId}
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return JSON.parse(data.result).coursesWorkMaterials[0]
}

  // let courseWorkMaterials: google.classroom_v1.Schema$CourseWork[] | undefined
  // odoo.connect(function (err: any) {
  //   if (err) { return console.log(err); }
  //   console.log('Connected to Odoo server.');
  //   var inParams = [];
  //   inParams.push([["courseId", "=", courseId]]);
  //   var params = [];
  //   params.push(inParams);
  //   odoo.execute_kw('res.partner', 'search', params, function (err: any, value: any) {
  //       if (err) { return console.log(err); }
  //       console.log('Result: ', value);
  //       courseWorkMaterials = value
  //   });
  // });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.courseWorkMaterials.list({
  //   courseId
  // })
  // const courseWorkMaterials = res.data.courseWorkMaterial
  // if (!courseWorkMaterials || courseWorkMaterials.length === 0) {
  //   console.log('No courseWorkMaterials found.');
  //   return;
  // }
  // console.log('courseWorkMaterials:');
  // courseWorkMaterials.forEach((courseWorkMaterial) => {
  //   console.log(`${courseWorkMaterial.title} (${courseWorkMaterial.id})`);
  //   console.log(typeof courseWorkMaterial);
  // });
  // return courseWorkMaterials
// }