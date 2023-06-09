import google from 'googleapis';
import {getGoogleDrive} from '../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<void | google.drive_v3.Schema$Comment | undefined>
)   {
    const {fileId, commentId} = req.query
    switch (req.method) {

    case 'GET':
        let comment = await getComment(`${commentId}`, `${fileId}`);
        res.status(200).json(comment)
        break;

    case 'DELETE':
        await deleteComment(`${commentId}`, `${fileId}`);
        res.status(200).json(comment)
        break;

    case 'POST':
        comment = await createComment(req.body, `${fileId}`);
        res.status(200).json(comment)
        break;

    default:
        break;
    }
}

export async function getComment(commentId: string, fileId: string) {
    const drive = await getGoogleDrive()
    const res = await drive.comments.get({
        fileId,
        commentId
    })
    const comment = res.data
    if (!comment) {
        console.log('No comment found.');
        return;
    }
    console.log('Comment:');
    console.log(`${comment.content} (${comment.id})`);
    console.log(typeof comment);
    return comment
}

async function createComment(fileId: string, requestBody: any) {
    const drive = await getGoogleDrive()
    const res = await drive.comments.create({
        fileId,
        requestBody
    })
    const comment = res.data
    if (!comment) {
      console.log('No comment found.');
      return;
    }
    console.log('Comment:');
    console.log(`${comment.content} (${comment.id})`);
    console.log(typeof comment);
    return comment
}

async function deleteComment(commentId: string, fileId: string) {
    const drive = await getGoogleDrive()
    const res = await drive.comments.delete({
        commentId,
        fileId
    })
    const comment = res.data
    console.log('Comment:');
    console.log(typeof comment);
    return comment
}