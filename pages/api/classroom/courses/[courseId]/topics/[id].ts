import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Topic | undefined>
) {
  const {id, courseId} = req.query
  switch (req.method) {
    case 'GET':
      const topic = await getTopic(`${id}`, `${courseId}`);
      res.status(200).json(topic)
      break;
  
    default:
      break;
  }
  
}


async function getTopic(id: string, courseId: string) {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.topics.get({
    courseId,
    id
  })
  const topic = res.data
  if (!topic) {
    console.log('No topic found.');
    return;
  }
  console.log('topics:');
  console.log(`${topic.name} (${topic.topicId})`);
  console.log(typeof topic);
  return topic
}