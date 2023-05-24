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

    case 'POST':
      await acceptInvitation(req.body);
      res.status(200).json({})
      break;

    default:
      break;

  }
}

async function acceptInvitation(id: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.invitations.accept({
    id
  })
  const invitation = res.data
  if (!invitation) {
    console.log('No invitation found.');
    return;
  }
  console.log('invitations:');
  console.log(`${invitation} (${invitation})`);
  console.log(typeof invitation);
  return invitation
}