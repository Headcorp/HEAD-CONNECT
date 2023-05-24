import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

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
  const classroom = await getGoogleClassroom()
  const res = await classroom.courses.aliases.list({
    pageSize: 10,
  });
  const aliases = res.data.aliases
  if (!aliases || aliases.length === 0) {
    console.log('No aliases found.');
    return;
  }
  console.log('aliases:');
  aliases.forEach((alias) => {
    console.log(`${alias.alias}`);
    console.log(typeof alias);
  });
  return aliases
}