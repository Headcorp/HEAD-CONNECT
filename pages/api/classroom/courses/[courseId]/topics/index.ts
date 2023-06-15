import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Topic[] | undefined>
) {
  const {courseId} = req.query
  switch (req.method) {
    case 'GET':
      const topics = await listTopics(`${courseId}`);
      res.status(200).json(topics)
      break;
  
    default:
      break;
  }
  
}


export async function listTopics(courseId: string) {
  let topics
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["courseId", "=", courseId]]);
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        topics = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.topics.list({
  //   courseId
  // })
  // const topics = res.data.topic
  // if (!topics || topics.length === 0) {
  //   console.log('No topics found.');
  //   return;
  // }
  // console.log('topics:');
  // topics.forEach((topic) => {
  //   console.log(`${topic.name} (${topic.topicId})`);
  //   console.log(typeof topic);
  // });
  return topics
}