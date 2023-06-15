import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$StudentSubmission | undefined>
) {
  const {id, courseId, courseWorkId} = req.query
  switch (req.method) {
    case 'GET':
      const studentSubmission = await getStudentSubmission(`${id}`, `${courseWorkId}`, `${courseId}`);
      res.status(200).json(studentSubmission)
      break;
  
    case 'POST':
      const updatedStudentSubmission = await modifyAttachementsStudentSubmission(`${id}`, `${courseWorkId}`, `${courseId}`, req.body);
      res.status(200).json(updatedStudentSubmission)
      break;
    
    default:
      break;
  }
  
}


async function getStudentSubmission(id: string, courseWorkId: string, courseId: string) {
  let studentSubmission
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id], ["courseWorkId", "=", courseWorkId], ["courseId", "=", courseId]]);
    inParams.push(["courseId", "courseWorkId", "id", "userId", "creationTime", "updateTime", "state", "late", "draftGrade", "assignedGrade", "alternateLink", "courseWorkType", "associatedWithDeveloper", "submissionHistory[]", "assignmentSubmission", "shortAnswerSubmission", "multipleChoiceSubmission"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        studentSubmission = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.courseWork.studentSubmissions.get({
  //   courseId,
  //   courseWorkId,
  //   id
  // })
  // const studentSubmission = res.data
  // if (!studentSubmission) {
  //   console.log('No studentSubmission found.');
  //   return;
  // }
  // console.log('studentSubmissions:');
  // console.log(`${studentSubmission.assignmentSubmission} (${studentSubmission.id})`);
  // console.log(typeof studentSubmission);
  return studentSubmission
}

async function modifyAttachementsStudentSubmission(id: string, courseWorkId: string, courseId: string, requestBody:any) {
  let studentSubmission
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id], ["courseWorkId", "=", courseWorkId], ["courseId", "=", courseId]]); //id to update
    inParams.push({requestBody})
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'write', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        studentSubmission = value
    });
  });
    // const classroom = await getGoogleClassroom()
    // // classroom.courses.courseWork.studentSubmissions.modifyAttachments
    // const res = await classroom.courses.courseWork.studentSubmissions.modifyAttachments({
    //   id,
    //   courseId,
    //   courseWorkId,
    //   requestBody
    // })
    // const studentSubmission = res.data
    // if (!studentSubmission) {
    //   console.log('No studentSubmission found.');
    //   return;
    // }
    // console.log('studentSubmissions:');
    // console.log(`${studentSubmission.assignmentSubmission} (${studentSubmission.id})`);
    // console.log(typeof studentSubmission);
    return studentSubmission
}