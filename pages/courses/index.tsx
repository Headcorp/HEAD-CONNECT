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
      <div>
        <nav className="flex py-4 mx-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/userhome" className="inline-flex items-center text-sm font-medium text-darkBlue hover:text-blue-600 hover:underline">
                <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </a>
            </li>
            <li aria-current="page">
              <div className="flex items-center text-darkBlue">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span className="ml-1 text-sm font-medium text-darkBlue hover:text-blue-600 md:ml-2">Courses</span>
              </div>
            </li>
          </ol>
        </nav>
        <GridView type="courses" views={courses}/>
      </div>
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