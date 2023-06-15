import google from 'googleapis';
import {getGoogleClassroom} from '../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';
import { SlideChannel } from '@/types/website_slide'
import { getCourse } from '@/pages/api/classroom/courses/[courseId]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.classroom_v1.Schema$Course[] | undefined>
) {
  switch (req.method) {
    case 'GET':
      const courses = await listCourses();
      res.status(200).json(courses)
      break;
  
    default:
      break;
  }
  
}


async function listCourses() {
  let courses
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([]);
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        courses = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.list({
  //   pageSize: 10,
  // });
  // const courses = res.data.courses
  // if (!courses || courses.length === 0) {
  //   console.log('No courses found.');
  //   return;
  // }
  // console.log('Courses:');
  // courses.forEach((course) => {
  //   console.log(`${course.name} (${course.id})`);
  //   console.log(typeof course);
  // });
  return courses
}