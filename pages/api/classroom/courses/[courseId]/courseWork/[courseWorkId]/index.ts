import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

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
  let courseWork
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id], ["courseId", "=", courseId]]);
    inParams.push(["courseId", "id", "title", "description", "materials[]", "state", "alternateLink", "creationTime", "updateTime", "dueDate", "dueTime", "scheduledTime", "maxPoints", "workType", "associatedWithDeveloper", "assigneeMode", "individualStudentsOptions", "submissionModificationMode", "creatorUserId", "topicId", "gradeCategory", "assignment", "multipleChoiceQuestion"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        courseWork = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.courseWork.get({
  //   courseId,
  //   id
  // })
  // const courseWork = res.data
  // if (!courseWork) {
  //   console.log('No courseWork found.');
  //   return;
  // }
  // console.log('courseWorks:');
  // console.log(`${courseWork.title} (${courseWork.id})`);
  // console.log(typeof courseWork);
  return courseWork
}