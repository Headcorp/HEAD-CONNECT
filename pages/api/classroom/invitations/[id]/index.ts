import google from 'googleapis';
import {getGoogleClassroom} from '../../../../../authorize'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { odoo } from '@/utils/odoo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< google.classroom_v1.Schema$Invitation | undefined>
) {
  const {id} = req.query
  switch (req.method) {

    case 'GET':
      let invitation = await getInvitation(`${id}`);
      res.status(200).json(invitation)
      break;
  
    case 'DELETE':
      await deleteInvitation(`${id}`);
      res.status(200).json(invitation)
      break;

    case 'POST':
      invitation = await createInvitation(req.body);
      res.status(200).json(invitation)
      break;

    default:
      break;
  }
}

async function getInvitation(id: string) {
  let invitation
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push(["id", "=", id]);
    inParams.push(["id", "userId", "courseId", "role"]); //fields
    inParams.push(0); //offset
    inParams.push(1); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search_read', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        invitation = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.invitations.get({
  //   id
  // })
  // const invitation = res.data
  // if (!invitation) {
  //   console.log('No invitation found.');
  //   return;
  // }
  // console.log('invitations:');
  // console.log(`${invitation.courseId} (${invitation.id})`);
  // console.log(typeof invitation);
  return invitation
}

async function createInvitation(requestBody: any) {
  let invitation
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([]); //id to update
    inParams.push(requestBody)
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'create', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        invitation = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.invitations.create({
  //   requestBody
  // })
  // const invitation = res.data
  // if (!invitation) {
  //   console.log('No invitation found.');
  //   return;
  // }
  // console.log('invitations:');
  // console.log(`${invitation.courseId} (${invitation.id})`);
  // console.log(typeof invitation);
  return invitation
}

async function deleteInvitation(id: string) {
  let invitation
  odoo.connect(function (err: any) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([["id", "=",, id]]); //id to delete
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'unlink', params, function (err: any, value: any) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        invitation = value
    });
  });
  // const classroom = await getGoogleClassroom()
  // const res = await classroom.invitations.delete({
  //   id
  // })
  // const invitation = res.data
  // if (!invitation) {
  //   console.log('No invitation deleted.');
  //   return;
  // }
  // console.log('invitations:');
  // console.log(typeof invitation);
  return invitation
}