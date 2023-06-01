import google from 'googleapis';

export type MyTopic = {
    courseWorks: google.classroom_v1.Schema$CourseWork[] | undefined;
    courseWorkMaterials: google.classroom_v1.Schema$CourseWorkMaterial[] | undefined;
} & google.classroom_v1.Schema$Topic
