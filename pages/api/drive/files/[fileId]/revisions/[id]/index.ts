import google from 'googleapis';
import {getGoogleDrive} from '../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<void | google.drive_v3.Schema$Revision | undefined>
)   {
    const {fileId, id} = req.query
    switch (req.method) {
    case 'GET':
        const revision = await getRevision(`${id}`, `${fileId}`);
        res.status(200).json(revision)
        break;

    default:
        break;
    }
  
}

export async function getRevision(revisionId: string, fileId: string) {
    const drive = await getGoogleDrive()
    const res = await drive.revisions.get({
        fileId,
        revisionId
    })
    const revision = res.data
    if (!revision) {
        console.log('No revision found.');
        return;
    }
    console.log('revision:');
    console.log(`${revision.published} (${revision.id})`);
    console.log(typeof revision);
    return revision
}