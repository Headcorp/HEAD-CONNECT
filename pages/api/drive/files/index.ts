import google from 'googleapis';
import {getGoogleDrive} from '../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.drive_v3.Schema$File[] | undefined>
) {
  switch (req.method) {
    case 'GET':
      const files = await listFiles();
      res.status(200).json(files)
      break;
  
    default:
      break;
  }
  
}

async function listFiles() {
    const drive = await getGoogleDrive()
    const res = await drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
    });
    const files = res.data.files;
    if (!files || files?.length === 0) {
        console.log('No files found.');
        return;
    }
    console.log('Files:');
    files.map((file) => {
        console.log(`${file.name} (${file.id})`);
        console.log(typeof file);
    });
    return files
}