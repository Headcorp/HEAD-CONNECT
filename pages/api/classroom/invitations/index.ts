import google from 'googleapis';
import {getGoogleClassroom} from '../../../../authorize'
import "../../../../types/next-auth.d.ts"
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { Session } from 'next-auth';

const URL = process.env.NEXTAUTH_URL || 'http://localhost:3000'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Invitation[] | undefined>
) {
  
  switch (req.method) {
    case 'GET':
      const {data}:{data: Session} = await axios.get(`${URL}/api/auth/session`)
      const {id} = data.user
      const invitations = await listInvitations(`${id}`);
      res.status(200).json(invitations)
      break;
  
    default:
      break;
  }
  
}


async function listInvitations(userId: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.invitations.list({
    userId,
    pageSize: 10
  })
  const invitations = res.data.invitations
  if (!invitations || invitations.length === 0) {
    console.log('No invitations found.');
    return;
  }
  console.log('invitations:');
  invitations.forEach((invitation) => {
    console.log(`${invitation.courseId} (${invitation.id})`);
    console.log(typeof invitation);
  });
  return invitations
}