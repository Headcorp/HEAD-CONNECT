import google from 'googleapis';
import {getGoogleDrive} from '../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.drive_v3.Schema$Change[] | undefined>
) {
  switch (req.method) {
    case 'GET':
      const changes = await listChanges();
      res.status(200).json(changes)
      break;
  
    default:
      break;
  }
  
}

async function listChanges() {
  const drive = await getGoogleDrive()
  const res = await drive.changes.list({
    pageSize: 10,
  });
  const changes = res.data.changes
  if (!changes || changes.length === 0) {
    console.log('No changes found.');
    return;
  }
  console.log('Changes:');
  changes.forEach((change) => {
    console.log(`${change.changeType}`);
    console.log(typeof change);
  });
  return changes
}