import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
import "../../../../types/next-auth.d.ts"
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { Session } from 'next-auth';

const URL = process.env.NEXTAUTH_URL || 'http://localhost:3000'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$GuardianInvitation[] | undefined>
) {
  const {studentId} = req.query
  switch (req.method) {
    case 'GET':
      
      const guardianInvitations = await listGuardianInvitations(`${studentId}`);
      res.status(200).json(guardianInvitations)
      break;
  
    default:
      break;
  }
  
}


async function listGuardianInvitations(studentId: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.userProfiles.guardianInvitations.list({
    studentId
  })
  const guardianInvitations = res.data.guardianInvitations
  if (!guardianInvitations || guardianInvitations.length === 0) {
    console.log('No guardianInvitations found.');
    return;
  }
  console.log('guardianInvitations:');
  guardianInvitations.forEach((guardianInvitation) => {
    console.log(`${guardianInvitation.studentId} (${guardianInvitation.invitationId})`);
    console.log(typeof guardianInvitation);
  });
  return guardianInvitations
}