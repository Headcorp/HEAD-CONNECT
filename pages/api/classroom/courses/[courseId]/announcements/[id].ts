import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

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
  let announcement
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=", id], ["couseId", "=", courseId]]);
    inParams.push(["courseId", "id", "text", "materials[]", "state", "alternateLink", "creationTime", "updateTime", "scheduledTime", "assigneeMode", "individualStudentsOptions", "creatorUserId"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        announcement = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.announcements.get({
  //   courseId,
  //   id
  // })
  // const announcement = res.data
  // if (!announcement) {
  //   console.log('No announcement found.');
  //   return;
  // }
  // console.log('announcements:');
  // console.log(`${announcement.text} (${announcement.id})`);
  // console.log(typeof announcement);
  return announcement
}