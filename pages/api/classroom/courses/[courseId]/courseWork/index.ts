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
  res: NextApiResponse< google.classroom_v1.Schema$CourseWork[] | undefined>
) {
  const {courseId} = req.query
  switch (req.method) {
    case 'GET':
      const courseWorks = await listCourseWorks(`${courseId}`);
      res.status(200).json(courseWorks)
      break;
  
    default:
      break;
  }
  
}


export async function listCourseWorks(courseId: string) {
  // console.log(`${URL}/courses_works`);
  // const { data } = await axios.post(`${URL}/courses_works`, {
  //   params: {courseId: courseId}
  // }, {
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // });
  // if (typeof data.result !== 'undefined') {
  //   return JSON.parse(data.result).courseWorks
  // }
  // return null
  // return JSON.parse(data.result).courseWorks

  let courseWorks: google.classroom_v1.Schema$CourseWork[] | undefined
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["courseId", "=", courseId]]);
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        courseWorks = value
    });
  });

  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.courseWork.list({
  //   courseId
  // })
  // const courseWorks = res.data.courseWork
  // if (!courseWorks || courseWorks.length === 0) {
  //   console.log('No courseWorks found.');
  //   return;
  // }
  // console.log('courseWorks:');
  // courseWorks.forEach((courseWork) => {
  //   console.log(`${courseWork.title} (${courseWork.id})`);
  //   console.log(typeof courseWork);
  // });
  return courseWorks
}