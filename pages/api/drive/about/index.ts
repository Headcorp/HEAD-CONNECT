import google from 'googleapis';
import {getGoogleDrive} from '../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<void | google.drive_v3.Schema$About | undefined>
)   {
    switch (req.method) {
    case 'GET':
        const about = await getAbout();
        res.status(200).json(about)
        break;

    default:
        break;
    }
  
}

export async function getAbout() {
    const drive = await getGoogleDrive()
    const res = await drive.about.get({
        
    })
    const about = res.data
    if (!about) {
        console.log('No news found.');
        return;
    }
    console.log('About:');
    console.log(`(${about.user})`);
    console.log(typeof about);
    return about
}