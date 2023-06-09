import google from 'googleapis';
import {getGoogleDrive} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.drive_v3.Schema$Comment[] | undefined>
) {
  const {fileId} = req.query
  switch (req.method) {
    case 'GET':
      const comments = await listComments(`${fileId}`);
      res.status(200).json(comments)
      break;
  
    default:
      break;
  }
  
}

async function listComments(fileId: string) {
    const drive = await getGoogleDrive()
    const res = await drive.comments.list({
        fileId,
        pageSize: 10
    });
    const comments = res.data.comments;
    if (!comments || comments.length === 0) {
        console.log('No comments found.');
        return;
    }
    console.log('Comments:');
    comments.map((comment) => {
        console.log(`${comment.content} (${comment.id})`);
        console.log(typeof comment);
    });
    return comments
}