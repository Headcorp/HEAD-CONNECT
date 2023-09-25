// import google from 'googleapis';
// import {getGoogleClassroom} from '../../../../../../authorize'
// import "../../../../types/next-auth.d.ts"
// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// import axios from 'axios';
// import { Session } from 'next-auth';
// import { odoo } from '@/utils/odoo';

// const URL = process.env.NEXTAUTH_URL || 'http://localhost:3000'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse< google.classroom_v1.Schema$Guardian[] | undefined>
// ) {
//   const {studentId} = req.query
//   switch (req.method) {
//     case 'GET':
      
//       const guardians = await listGuardians(`${studentId}`);
//       res.status(200).json(guardians)
//       break;
  
//     default:
//       break;
//   }
  
// }


// async function listGuardians(studentId: string) {
//   let guardians
//   odoo.connect(function (err: any) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     inParams.push([["studentId", "=", studentId]]);
//     var params = [];
//     params.push(inParams);
//     odoo.execute_kw('res.partner', 'search', params, function (err: any, value: any) {
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//         guardians = value
//     });
//   });
//   // const classroom = await getGoogleClassroom()
//   // const res = await classroom.userProfiles.guardians.list({
//   //   studentId
//   // })
//   // const guardians = res.data.guardians
//   // if (!guardians || guardians.length === 0) {
//   //   console.log('No guardians found.');
//   //   return;
//   // }
//   // console.log('guardians:');
//   // guardians.forEach((guardian) => {
//   //   console.log(`${guardian.studentId} (${guardian.invitedEmailAddress})`);
//   //   console.log(typeof guardian);
//   // });
//   return guardians
// }