import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react'

const URL = process.env.URL || 'http://localhost:8069/headconnect'
const DB = process.env.DB || 'Test'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { data: session } = useSession()
    const {courseId} = req.query
    switch (req.method) {
    case 'GET':
        const enroll = await enrollFunction(`${courseId}`, `${session?.user.mat}`);
        res.status(200).json(enroll)
        break;
    
        default:
        break;
    }
}


export async function enrollFunction(channel_id: string, partner_id: string) {
    console.log(`${URL}/enroll`, channel_id, partner_id);
    const { data } = await axios.post(`${URL}/enroll`, {
        params: {
            channel_id: parseInt(channel_id),
            partner_id: parseInt(partner_id)
        }
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(data.result)
    if (typeof data.result !== 'undefined') {
        return data.result.enroll
    }
    return null
}
