import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.classroom_v1.Schema$CourseAlias[] | undefined>
) {
  switch (req.method) {
    case 'GET':
      const aliases = await listAliases();
      res.status(200).json(aliases)
      break;
  
    default:
      break;
  }
  
}


async function listAliases() {
  let aliases
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([]);
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        aliases = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.courses.aliases.list({
  //   pageSize: 10,
  // });
  // const aliases = res.data.aliases
  // if (!aliases || aliases.length === 0) {
  //   console.log('No aliases found.');
  //   return;
  // }
  // console.log('aliases:');
  // aliases.forEach((alias) => {
  //   console.log(`${alias.alias}`);
  //   console.log(typeof alias);
  // });
  return aliases
}