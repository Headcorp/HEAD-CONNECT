import google from 'googleapis';
import {getGoogleClassroom} from '../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Registration | undefined>
) {
  const {id} = req.query
  switch (req.method) {

    case 'DELETE':
      await deleteRegistration(`${id}`);
      res.status(200).json({})
      break;

    case 'POST':
      const registration = await createRegistration(req.body);
      res.status(200).json(registration)
      break;

    default:
      break;
  }
}

async function createRegistration(requestBody: any) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.registrations.create({
    requestBody
  })
  const registration = res.data
  if (!registration) {
    console.log('No registration found.');
    return;
  }
  console.log('registrations:');
  console.log(`${registration.feed} (${registration.cloudPubsubTopic})`);
  console.log(typeof registration);
  return registration
}

async function deleteRegistration(id: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.registrations.delete({
    registrationId: id
  })
  const registration = res.data
  if (!registration) {
    console.log('No registration deleted.');
    return;
  }
  console.log('registrations:');
  console.log(typeof registration);
  return registration
}