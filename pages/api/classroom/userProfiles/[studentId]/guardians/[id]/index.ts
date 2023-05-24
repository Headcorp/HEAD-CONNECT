import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

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
  const classroom = await getGoogleClassroom()
  const res = await classroom.userProfiles.guardians.get({
    studentId,
    guardianId:id
  })
  const guardian = res.data
  if (!guardian) {
    console.log('No guardian found.');
    return;
  }
  console.log('guardians:');
  console.log(`${guardian.studentId} (${guardian.invitedEmailAddress})`);
  console.log(typeof guardian);
  return guardian
}

async function deleteGuardian(id: string, studentId: string, requestBody:any) {
    const classroom = await getGoogleClassroom()
    const res = await classroom.userProfiles.guardians.delete({
      guardianId:id,
      studentId,
    })
    const guardian = res.data
    if (!guardian) {
      console.log('No guardian found.');
      return;
    }
    return guardian
}