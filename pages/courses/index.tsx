import axios from 'axios';
import google from 'googleapis';
import React from 'react'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { CoursesNavbar } from '@/components/CoursesNavbar'
import { CoursesNavbarMobile } from '@/components/CoursesNavbarMobile'

import { GridView } from '@/components/GridView'

function Courses({courses}:{courses: google.classroom_v1.Schema$Course[]}) {
  const [isMobile, setIsMobile] = useState(false)
  const tempIsMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    setIsMobile(tempIsMobile)
  }, [tempIsMobile])

  return (
    <div className="">
      {isMobile ? <CoursesNavbarMobile /> : <CoursesNavbar />}
      <GridView type="courses" views={courses}/>
    </div>
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