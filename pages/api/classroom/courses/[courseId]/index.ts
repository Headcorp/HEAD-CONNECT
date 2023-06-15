import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

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
  let course
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id]]);
    inParams.push(["id", "name", "section", "descriptionHeading", "description", "room", "ownerId", "creationTime", "updateTime", "enrollmentCode", "courseState", "alternateLink", "teacherGroupEmail", "courseGroupEmail",  "teacherFolder", "guardiansEnabled", "calendarId", "gradebookSettings"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        course = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.get({
  //   id
  // })
  // const course = res.data
  // if (!course) {
  //   console.log('No course found.');
  //   return;
  // }
  // console.log('Courses:');
  // console.log(`${course.name} (${course.id})`);
  // console.log(typeof course);
  return course
}