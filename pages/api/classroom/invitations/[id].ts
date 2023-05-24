import google from 'googleapis';
import {getGoogleClassroom} from '../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Invitation | undefined>
) {
  const {id} = req.query
  switch (req.method) {

    case 'GET':
      let invitation = await getInvitation(`${id}`);
      res.status(200).json(invitation)
      break;
  
    case 'DELETE':
      await deleteInvitation(`${id}`);
      res.status(200).json(invitation)
      break;

    case 'POST':
      invitation = await createInvitation(req.body);
      res.status(200).json(invitation)
      break;

    default:
      break;
  }
}

async function getInvitation(id: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.invitations.get({
    id
  })
  const invitation = res.data
  if (!invitation) {
    console.log('No invitation found.');
    return;
  }
  console.log('invitations:');
  console.log(`${invitation.courseId} (${invitation.id})`);
  console.log(typeof invitation);
  return invitation
}

async function createInvitation(requestBody: any) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.invitations.create({
    requestBody
  })
  const invitation = res.data
  if (!invitation) {
    console.log('No invitation found.');
    return;
  }
  console.log('invitations:');
  console.log(`${invitation.courseId} (${invitation.id})`);
  console.log(typeof invitation);
  return invitation
}

async function deleteInvitation(id: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.invitations.delete({
    id
  })
  const invitation = res.data
  if (!invitation) {
    console.log('No invitation deleted.');
    return;
  }
  console.log('invitations:');
  console.log(typeof invitation);
  return invitation
}