import google from 'googleapis';
import {getGoogleDrive} from '../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<void | google.drive_v3.Schema$File | undefined>
)   {
    const {fileId} = req.query
    switch (req.method) {
    case 'GET':
        const file = await getFile(`${fileId}`);
        res.status(200).json(file)
        break;

    default:
        break;
    }

}

export async function getFile(fileId: string) {
    const drive = await getGoogleDrive()
    const res = await drive.files.get({
        fileId
    })
    const file = res.data
    if (!file) {
        console.log('No file found.');
        return;
    }
    console.log('File:');
    console.log(`${file.name} (${file.id})`);
    console.log(typeof file);
    return file
}