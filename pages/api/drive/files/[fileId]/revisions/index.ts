import google from 'googleapis';
import {getGoogleDrive} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.drive_v3.Schema$Revision[] | undefined>
) {
  const {fileId} = req.query
  switch (req.method) {
    case 'GET':
      const revisions = await listRevisions(`${fileId}`);
      res.status(200).json(revisions)
      break;
  
    default:
      break;
  }
  
}

async function listRevisions(fileId: string) {
    const drive = await getGoogleDrive()
    const res = await drive.revisions.list({
        fileId,
        pageSize: 10
    });
    const revisions = res.data.revisions;
    if (!revisions || revisions.length === 0) {
        console.log('No revisions found.');
        return;
    }
    console.log('revisions:');
    revisions.map((revision) => {
        console.log(`${revision.published} (${revision.id})`);
        console.log(typeof revision);
    });
    return revisions
}