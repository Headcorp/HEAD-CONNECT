import { GridView } from '@/components/GridView'
import axios from 'axios';
import google from 'googleapis';
import React from 'react'

function Courses({courses}:{courses: google.classroom_v1.Schema$Course[]}) {
  return (
    <GridView type="courses" views={courses}/>
  )
}

export default Courses

export async function getServerSideProps(context: any) {
    let courses = []
    const API_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000'
    try {
        const {data} = await axios.get(`${API_URL}/api/classroom/courses`)
        courses = data
        console.log("cou", courses)
    } catch (error) {
        console.log(error)
    }
  
    return {
      props: {courses},
    };
}