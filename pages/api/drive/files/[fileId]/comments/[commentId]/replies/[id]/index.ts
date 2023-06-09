import google from 'googleapis';
import {getGoogleDrive} from '../../../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.drive_v3.Schema$Reply | undefined>
) {
  const {id, fileId, commentId} = req.query
  switch (req.method) {

    case 'GET':
      let reply = await getReply(`${id}`, `${fileId}`, `${commentId}`);
      res.status(200).json(reply)
      break;

    case 'DELETE':
      await deleteReply(`${id}`, `${fileId}`, `${commentId}`);
      res.status(200).json(reply)
      break;

    case 'POST':
      reply = await createReply(req.body, `${fileId}`, `${commentId}`);
      res.status(200).json(reply)
      break;

    default:
      break;
  }
}

async function getReply(replyId: string, commentId: string, fileId: string) {
  const drive = await getGoogleDrive()
  const res = await drive.replies.get({
      fileId,
      commentId,
      replyId
  });
  const reply = res.data
  if (!reply) {
      console.log('No reply found.');
      return;
  }
  console.log('Reply:');
  console.log(`${reply.content} (${reply.id})`);
  console.log(typeof reply);
  return reply
}

async function createReply(commentId: string, fileId: string, requestBody: any) {
  const drive = await getGoogleDrive()
  const res = await drive.replies.create({
      commentId,
      fileId,
      requestBody
  })
  const reply = res.data
  if (!reply) {
    console.log('No reply found.');
    return;
  }
  console.log('Reply:');
  console.log(`${reply.content} (${reply.id})`);
  console.log(typeof reply);
  return reply
}

async function deleteReply(replyId: string, commentId: string, fileId: string) {
  const drive = await getGoogleDrive()
  const res = await drive.replies.delete({
    fileId,
    commentId,
    replyId
  })
  const reply = res.data
  console.log('Reply:');
  console.log(typeof reply);
  return reply
}