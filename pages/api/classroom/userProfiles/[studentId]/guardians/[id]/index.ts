import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Guardian | undefined>
) {
  const {id, studentId} = req.query
  switch (req.method) {
    case 'GET':
      const guardian = await getGuardian(`${id}`, `${studentId}`);
      res.status(200).json(guardian)
      break;
  
    case 'DELETE':
      await deleteGuardian(`${id}`, `${studentId}`, req.body);
      res.status(200).json({})
      break;
    
    default:
      break;
  }
  
}


async function getGuardian(id: string, studentId: string) {
  let guardian
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id], ["studentId", "=", studentId]]);
    inParams.push(["studentId", "guardianId", "guardianProfile", "invitedEmailAddress"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        guardian = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.userProfiles.guardians.get({
  //   studentId,
  //   guardianId:id
  // })
  // const guardian = res.data
  // if (!guardian) {
  //   console.log('No guardian found.');
  //   return;
  // }
  // console.log('guardians:');
  // console.log(`${guardian.studentId} (${guardian.invitedEmailAddress})`);
  // console.log(typeof guardian);
  return guardian
}

async function deleteGuardian(id: string, studentId: string, requestBody:any) {
  let guardian
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=",, id], ["studentId", "=", studentId]]); //id to delete
    // inParams.push(requestBody)
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'unlink', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        guardian = value
    });
  });
    // const classroom = await getGoogleClassroom()
    // const res = await classroom.userProfiles.guardians.delete({
    //   guardianId:id,
    //   studentId,
    // })
    // const guardian = res.data
    // if (!guardian) {
    //   console.log('No guardian found.');
    //   return;
    // }
    return guardian
}