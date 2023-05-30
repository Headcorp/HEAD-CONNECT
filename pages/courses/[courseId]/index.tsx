import axios from 'axios'
import { NextApiRequest } from 'next'
import React from 'react'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import google from 'googleapis'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react'
import { CoursesNavbar } from '@/components/CoursesNavbar'
import { CoursesNavbarMobile } from '@/components/CoursesNavbarMobile'
import { CoursesInfo } from '@/components/CoursesInfo'
function AboutCourse({ course, isStudent, teachers }: { course: google.classroom_v1.Schema$Course, isStudent: boolean, teachers: google.classroom_v1.Schema$Teacher[] }) {
  const [isMobile, setIsMobile] = useState(false)
  const tempIsMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    setIsMobile(tempIsMobile)
  }, [tempIsMobile])

  const router = useRouter()
  const { data: session } = useSession()
  const { courseId } = router.query

  const enroll = async () => {

    if (session) {
      //Utilisateur connecté
      try {
        //Enroller l'utilisateur
        const { data } = await axios.post(`/api/classroom/courses/${courseId}/students`, {
          studentWorkFolder: {},
          profile: {},
          courseId,
          userId: session.user.id
        })
        if (data.id) {
          //Si succes l'envoyer suivre le cours
          router.push(`/courses/${courseId}/topics`, { query: { courseId } })
        }
      } catch (error) {

      }
    }
    else {
      //Utilisateur non connecté
      router.push(`/auth/login/redirect=${router.pathname}`)
    }
  }

  const access = async (e: React.MouseEvent) => {
    e.preventDefault()
    isStudent ? router.push(`/courses/${courseId}/topics`) : enroll()
  }

  return (
    <div className='flex flex-col'>
      {/*<div className="py-4 flex item-center justify-center">
        <span>Espace publicité</span>
  </div>*/}
      {isMobile ? <CoursesNavbarMobile /> : <CoursesNavbar />}
      <CoursesInfo />
      {/*<div>{JSON.stringify(course)}</div>
         <div>{teachers.map((teacher) => <div>JSON.stringify(course)</div>)}</div>
        <button onClick={access} className="text-yellow px-4 py-2 md:px-8 md:py-4 font-bold text-2xl md:text-4xl rounded-md btn xl:text-5xl">{isStudent ? "Resume Course" : "Enroll"}</button>*/}
    </div>
  )
}

export default AboutCourse

export async function getServerSideProps(context: any) {
  const { req } = context
  const { courseId } = context.query
  const session = await getSession({ req });
  let course = {}
  let isStudent = false
  let teachers = []

  const API_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000'
  try {
    const { data } = await axios.get(`${API_URL}/api/classroom/courses/${courseId}`)
    course = data
  } catch (error) {

  }

  try {
    //Verifier si enrolé
    const { data } = await axios.get(`${API_URL}/api/classroom/courses/${courseId}/students/${session?.user.id}`)
    isStudent = !!data
  } catch (error) {

  }

  try {

    const { data } = await axios.get(`${API_URL}/api/classroom/courses/${courseId}/teachers`)
    teachers = data
  } catch (error) {

  }

  return {
    props: { course, isStudent, teachers },
  };
}