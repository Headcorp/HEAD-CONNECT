import google from 'googleapis';
import {getGoogleDrive} from '../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<void | google.drive_v3.Schema$Drive | undefined>
)   {
    const {id} = req.query
    switch (req.method) {
    case 'GET':
        const sharedDrive = await getSharedDrive(`${id}`);
        res.status(200).json(sharedDrive)
        break;

    default:
        break;
    }
  
}

export async function getSharedDrive(driveId: string) {
    const drive = await getGoogleDrive()
    const res = await drive.drives.get({
        driveId
    })
    const sharedDrive = res.data
    if (!sharedDrive) {
        console.log('No sharedDrive found.');
        return;
    }
    console.log('sharedDrive:');
    console.log(`${sharedDrive.name} (${sharedDrive.id})`);
    console.log(typeof sharedDrive);
    return sharedDrive
}