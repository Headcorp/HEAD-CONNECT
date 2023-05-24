import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Announcement | undefined>
) {
  const {id, courseId} = req.query
  switch (req.method) {
    case 'GET':
      const announcement = await getAnnouncement(`${id}`, `${courseId}`);
      res.status(200).json(announcement)
      break;
  
    default:
      break;
  }
  
}


async function getAnnouncement(id: string, courseId: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.announcements.get({
    courseId,
    id
  })
  const announcement = res.data
  if (!announcement) {
    console.log('No announcement found.');
    return;
  }
  console.log('announcements:');
  console.log(`${announcement.text} (${announcement.id})`);
  console.log(typeof announcement);
  return announcement
}