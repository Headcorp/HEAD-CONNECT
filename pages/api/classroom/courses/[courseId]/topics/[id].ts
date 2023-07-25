import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { odoo } from '@/utils/odoo';

const URL = process.env.URL

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
  const { data } = await axios.post(`${URL}/contents`, {
    params:{id: id}
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return JSON.parse(data.result).topic[0]
}

  // let topic
  // odoo.connect(function (err: any) {
  //   if (err) { return console.log(err); }
  //   console.log('Connected to Odoo server.');
  //   var inParams = [];
  //   inParams.push([["id", "=", id], ["courseId", "=", courseId]]);
  //   inParams.push(["courseId", "topicId", "name", "updateTime"]); //fields
  //   inParams.push(0); //offset
  //   inParams.push(1); //limit
  //   var params = [];
  //   params.push(inParams);
  //   odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
  //       if (err) { return console.log(err); }
  //       console.log('Result: ', value);
  //       topic = value
  //   });
  // });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.topics.get({
  //   courseId,
  //   id
  // })
  // const topic = res.data
  // if (!topic) {
  //   console.log('No topic found.');
  //   return;
  // }
  // console.log('topics:');
  // console.log(`${topic.name} (${topic.topicId})`);
  // console.log(typeof topic);
//   return topic
// }