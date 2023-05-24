import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

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
  const classroom = await getGoogleClassroom()
  const res = await classroom.userProfiles.guardianInvitations.get({
    studentId,
    invitationId:id
  })
  const guardianInvitation = res.data
  if (!guardianInvitation) {
    console.log('No guardianInvitation found.');
    return;
  }
  console.log('guardianInvitations:');
  console.log(`${guardianInvitation.studentId} (${guardianInvitation.invitedEmailAddress})`);
  console.log(typeof guardianInvitation);
  return guardianInvitation
}

async function modifyGuardianInvitation(id: string, studentId: string, requestBody:any) {
    const classroom = await getGoogleClassroom()
    const res = await classroom.userProfiles.guardianInvitations.patch({
      invitationId:id,
      studentId,
      requestBody
    })
    const guardianInvitation = res.data
    if (!guardianInvitation) {
      console.log('No guardianInvitation found.');
      return;
    }
    console.log('guardianInvitations:');
    console.log(`${guardianInvitation.studentId} (${guardianInvitation.invitedEmailAddress})`);
    console.log(typeof guardianInvitation);
    return guardianInvitation
}

async function createGuardianInvitation(studentId: string, requestBody:any) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.userProfiles.guardianInvitations.create({
    studentId,
    requestBody
  })
  const guardianInvitation = res.data
  if (!guardianInvitation) {
    console.log('No guardianInvitation found.');
    return;
  }
  console.log('guardianInvitations:');
  console.log(`${guardianInvitation.studentId} (${guardianInvitation.invitedEmailAddress})`);
  console.log(typeof guardianInvitation);
  return guardianInvitation
}