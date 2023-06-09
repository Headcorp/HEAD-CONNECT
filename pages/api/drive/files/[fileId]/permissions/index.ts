import google from 'googleapis';
import {getGoogleDrive} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | google.drive_v3.Schema$Permission[] | undefined>
) {
  const {fileId} = req.query
  switch (req.method) {
    case 'GET':
      const permissions = await listPermissions(`${fileId}`);
      res.status(200).json(permissions)
      break;
  
    default:
      break;
  }
  
}

async function listPermissions(fileId: string) {
    const drive = await getGoogleDrive()
    const res = await drive.permissions.list({
        fileId,
        pageSize: 10
    });
    const permissions = res.data.permissions;
    if (!permissions || permissions.length === 0) {
        console.log('No permissions found.');
        return;
    }
    console.log('permissions:');
    permissions.map((permission) => {
        console.log(`${permission.permissionDetails} (${permission.id})`);
        console.log(typeof permission);
    });
    return permissions
}