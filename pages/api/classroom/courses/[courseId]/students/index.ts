import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-auth';
import axios from 'axios';
import { idText } from 'typescript';
import { getCourse } from '..';
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Student | google.classroom_v1.Schema$Student[] | undefined>
) {
  const {courseId} = req.query
  switch (req.method) {
    case 'GET':
      const students = await listStudents(`${courseId}`);
      res.status(200).json(students)
      break;

    case 'POST':
      const course = await getCourse(`${courseId}`);
      console.log(course?.enrollmentCode)
      const student = await createStudent(`${courseId}`, `${course?.enrollmentCode}`, req.body);
      res.status(200).json(student)
      break;

    default:
      break;
  }
  
}


async function listStudents(courseId: string) {
  let students
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
        students = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.students.list({
  //   courseId
  // })
  // const students = res.data.students
  // if (!students || students.length === 0) {
  //   console.log('No students found.');
  //   return;
  // }
  // console.log('students:');
  // students.forEach((student) => {
  //   console.log(`${student.userId} (${student.profile})`);
  //   console.log(typeof student);
  // });
  return students
}

async function createStudent(courseId: string, enrollmentCode: string, requestBody: Object) {
  let student
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["courseId", "=", courseId], ["enrollmentCode", "=", enrollmentCode]]); //id to update
    inParams.push(requestBody)
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'create', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        student = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.students.create({
  //   enrollmentCode,
  //   courseId,
  //   requestBody
  // })
  // const student = res.data
  // if (!student) {
  //   console.log('No students created.');
  //   return;
  // }
  console.log('students:');

  return student
}