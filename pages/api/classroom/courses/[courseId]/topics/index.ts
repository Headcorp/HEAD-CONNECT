import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Topic[] | undefined>
) {
  
  switch (req.method) {
    case 'GET':
      const topics = await listTopics();
      res.status(200).json(topics)
      break;
  
    default:
      break;
  }
  
}


async function listTopics() {
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.topics.list({
    pageSize: 10
  })
  const topics = res.data.topic
  if (!topics || topics.length === 0) {
    console.log('No topics found.');
    return;
  }
  console.log('topics:');
  topics.forEach((topic) => {
    console.log(`${topic.name} (${topic.topicId})`);
    console.log(typeof topic);
  });
  return topics
}