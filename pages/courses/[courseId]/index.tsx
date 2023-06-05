import React from 'react'
import axios from 'axios'
import google from 'googleapis'
import { NextApiRequest } from 'next'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react'

import { CoursesNavbar } from '@/components/CoursesNavbar'
import { CoursesNavbarMobile } from '@/components/CoursesNavbarMobile'
import { FormationPriceCard } from '@/components/FormationPriceCard'
import { CoursesInfo } from '@/components/CoursesInfo'
import { listTopics } from '@/pages/api/classroom/courses/[courseId]/topics'
import { MyTopic } from '../../../types/topic'
import { listCourseWorks } from '@/pages/api/classroom/courses/[courseId]/courseWork'
import { listCourseWorkMaterials } from '@/pages/api/classroom/courses/[courseId]/courseWorkMaterials'

function AboutCourse({ course, isStudent, teachers, topics }: { course: google.classroom_v1.Schema$Course, isStudent: boolean, teachers: google.classroom_v1.Schema$Teacher[], topics: MyTopic[] }) {
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
    <div className='flex flex-col bg-blancsale'>
      {/*<div className="py-4 flex item-center justify-center">
        <span>Espace publicité</span>
  </div>*/}
      {isMobile ? <CoursesNavbarMobile /> : <CoursesNavbar />}
      <div className="flex relative">
        <CoursesInfo topics={topics} />
        <FormationPriceCard />
      </div>
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

  let topics = await listTopics(courseId) as MyTopic[] | undefined
  //const topics = await listTopics(courseId);
  const courseWorks = await listCourseWorks(courseId);
  const courseWorkMaterials = await listCourseWorkMaterials(courseId);

  topics?.forEach((topic, index, array) => {
    array[index].courseWorks = courseWorks?.filter((courseWork) => courseWork.topicId == topic.topicId).map(({ title }) => ({ title }))
    array[index].courseWorkMaterials = courseWorkMaterials?.filter((courseWorkMaterial) => courseWorkMaterial.topicId == topic.topicId).map(({ title }) => ({ title }))
  })

  return {
    props: { course, isStudent, teachers, topics },
  };
}
