import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Announcement[] | undefined>
) {
  
  switch (req.method) {
    case 'GET':
      const announcements = await listAnnouncements();
      res.status(200).json(announcements)
      break;
  
    default:
      break;
  }
  
}


async function listAnnouncements() {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.announcements.list({
    pageSize: 10
  })
  const announcements = res.data.announcements
  if (!announcements || announcements.length === 0) {
    console.log('No announcements found.');
    return;
  }
  console.log('announcements:');
  announcements.forEach((announcement) => {
    console.log(`${announcement.text} (${announcement.id})`);
    console.log(typeof announcement);
  });
  return announcements
}