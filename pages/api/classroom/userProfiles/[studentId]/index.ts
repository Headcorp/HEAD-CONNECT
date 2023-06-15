import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$UserProfile | undefined>
) {
  const {userProfileId} = req.query
  switch (req.method) {
    case 'GET':
      const userProfile = await getUserProfile(`${userProfileId}`);
      res.status(200).json(userProfile)
      break;
  
    default:
      break;
  }
  
}


async function getUserProfile(userId: string) {
  let userProfile
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["userId", "=", userId]]);
    inParams.push(["id", "name", "emailAddress", "photoUrl", "permissions", "verifiedTeacher"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        userProfile = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.userProfiles.get({
  //   userId
  // })
  // const userProfile = res.data
  // if (!userProfile) {
  //   console.log('No userProfile found.');
  //   return;
  // }
  // console.log('userProfiles:');
  // console.log(`${userProfile.name} (${userProfile.id})`);
  // console.log(typeof userProfile);
  return userProfile
}