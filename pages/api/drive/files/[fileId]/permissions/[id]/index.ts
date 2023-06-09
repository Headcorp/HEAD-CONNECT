import google from 'googleapis';
import {getGoogleDrive} from '../../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<void | google.drive_v3.Schema$Permission | undefined>
)   {
    const {fileId, id} = req.query
    switch (req.method) {
    case 'GET':
        const permission = await getPermission(`${id}`, `${fileId}`);
        res.status(200).json(permission)
        break;

    default:
        break;
    }
  
}

export async function getPermission(permissionId: string, fileId: string) {
    const drive = await getGoogleDrive()
    const res = await drive.permissions.get({
        fileId,
        permissionId
    })
    const permission = res.data
    if (!permission) {
        console.log('No permission found.');
        return;
    }
    console.log('permission:');
    console.log(`${permission.permissionDetails} (${permission.id})`);
    console.log(typeof permission);
    return permission
}