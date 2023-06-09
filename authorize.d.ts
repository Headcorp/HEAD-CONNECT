import google from "googleapis";

export function getGoogleClassroom() : Promise<google.classroom_v1.Classroom>;
export function getGoogleDrive() : Promise<google.drive_v3.Drive>;