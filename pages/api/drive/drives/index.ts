import google from 'googleapis';
import {getGoogleDrive} from '../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.drive_v3.Schema$Drive[] | undefined>
) {
  switch (req.method) {
    case 'GET':
      const drives = await listDrives();
      res.status(200).json(drives)
      break;
  
    default:
      break;
  }
  
}

async function listDrives() {
    const drive = await getGoogleDrive()
    const res = await drive.drives.list({
        pageSize: 10,
    });
    const drives = res.data.drives;
    if (!drives || drives?.length === 0) {
        console.log('No drives found.');
        return;
    }
    console.log('drives:');
    drives.map((drive) => {
        console.log(`${drive.name} (${drive.id})`);
        console.log(typeof drive);
    });
    return drives
}