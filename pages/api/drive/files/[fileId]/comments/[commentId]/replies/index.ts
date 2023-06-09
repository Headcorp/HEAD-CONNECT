import google from 'googleapis';
import {getGoogleDrive} from '../../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.drive_v3.Schema$Reply[] | undefined>
) {
  const {fileId, commentId} = req.query
  switch (req.method) {
    case 'GET':
      const replies = await listReplies(`${commentId}`, `${fileId}`);
      res.status(200).json(replies)
      break;
  
    default:
      break;
  }
  
}

async function listReplies(commentId: string, fileId: string) {
    const drive = await getGoogleDrive()
    const res = await drive.replies.list({
        fileId,
        commentId,
        pageSize: 10
    });
    const replies = res.data.replies;
    if (!replies || replies.length === 0) {
        console.log('No replies found.');
        return;
    }
    console.log('Replies:');
    replies.map((replie) => {
        console.log(`${replie.content} (${replie.id})`);
        console.log(typeof replie);
    });
    return replies
}