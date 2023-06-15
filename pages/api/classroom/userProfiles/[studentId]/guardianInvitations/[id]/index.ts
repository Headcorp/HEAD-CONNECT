import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$GuardianInvitation | undefined>
) {
  const {id, studentId} = req.query
  switch (req.method) {
    case 'GET':
      const guardianInvitation = await getGuardianInvitation(`${id}`, `${studentId}`);
      res.status(200).json(guardianInvitation)
      break;
  
    case 'POST':
      const createdGuardianInvitation = await createGuardianInvitation(`${studentId}`, req.body);
      res.status(200).json(createdGuardianInvitation)
      break;

    case 'PATCH':
      const updatedGuardianInvitation = await modifyGuardianInvitation(`${id}`, `${studentId}`, req.body);
      res.status(200).json(updatedGuardianInvitation)
      break;
    
    default:
      break;
  }
  
}


async function getGuardianInvitation(id: string, studentId: string) {
  let guardianInvitation
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id], ["studentId", "=", studentId]]);
    inParams.push(["invitationId", "studentId", "invitedEmailAddress", "state", "creationTime"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        guardianInvitation = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.userProfiles.guardianInvitations.get({
  //   studentId,
  //   invitationId:id
  // })
  // const guardianInvitation = res.data
  // if (!guardianInvitation) {
  //   console.log('No guardianInvitation found.');
  //   return;
  // }
  // console.log('guardianInvitations:');
  // console.log(`${guardianInvitation.studentId} (${guardianInvitation.invitedEmailAddress})`);
  // console.log(typeof guardianInvitation);
  return guardianInvitation
}

async function modifyGuardianInvitation(id: string, studentId: string, requestBody:any) {
  let guardianInvitation
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id], ["studentId", "=", studentId]]); //id to update
    inParams.push({requestBody})
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'write', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        guardianInvitation = value
    });
  });
    // const classroom = await getGoogleClassroom()
    // const res = await classroom.userProfiles.guardianInvitations.patch({
    //   invitationId:id,
    //   studentId,
    //   requestBody
    // })
    // const guardianInvitation = res.data
    // if (!guardianInvitation) {
    //   console.log('No guardianInvitation found.');
    //   return;
    // }
    // console.log('guardianInvitations:');
    // console.log(`${guardianInvitation.studentId} (${guardianInvitation.invitedEmailAddress})`);
    // console.log(typeof guardianInvitation);
    return guardianInvitation
}

async function createGuardianInvitation(studentId: string, requestBody:any) {
  let guardianInvitation
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["studentId", "=", studentId]]); //id to update
    inParams.push(requestBody)
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'create', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        guardianInvitation = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.userProfiles.guardianInvitations.create({
  //   studentId,
  //   requestBody
  // })
  // const guardianInvitation = res.data
  // if (!guardianInvitation) {
  //   console.log('No guardianInvitation found.');
  //   return;
  // }
  // console.log('guardianInvitations:');
  // console.log(`${guardianInvitation.studentId} (${guardianInvitation.invitedEmailAddress})`);
  // console.log(typeof guardianInvitation);
  return guardianInvitation
}