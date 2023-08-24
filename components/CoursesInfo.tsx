import React from 'react'
import google from 'googleapis'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Disclosure } from '@headlessui/react'
import { SlideChannel } from '@/types/website_slide'
import { getRating } from '@/pages/api/classroom/courses/[courseId]/ratings/[id]'

import { MyTopic } from '../types/topic'
import { ListItem } from './ListItem'
import { RatingCard } from './RatingCard'
import { InstructorCard } from './InstructorCard'
import { NoData } from './NoData'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'

export function CoursesInfo ({course, isStudent, ratings, contents}: {course: SlideChannel, topics: MyTopic[], channel: SlideChannel, isStudent: boolean, ratings: any, contents: any }) {
  const router = useRouter()
  const { courseId } = router.query
  const { data: session } = useSession()

  const access = async (e: React.MouseEvent) => {
    e.preventDefault()
    session ? router.push(`/courses/${courseId}/topics`) : signIn(undefined, {callbackUrl: router.asPath})
  }

  return (
    <div className="w-full lg:w-2/3 px-8 sm:px-20 py-4 flex-col flex space-y-4 mb-32 lg:mb-4">
      <nav className="flex py-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="/userhome" className="inline-flex items-center text-sm font-medium text-darkBlue hover:text-blue-600 hover:underline">
              <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center text-darkBlue">
              <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <a href="/courses" className="ml-1 text-sm font-medium text-darkBlue hover:text-blue-600 md:ml-2 hover:underline">Courses</a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center text-darkBlue">
              <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex flex-col space-y-4 pb-4 text-center sm:text-start">
        <span className="text-4xl sm:text-5xl font-extrabold text-darkBlue">
          {course.name}
        </span>
        <span className="text-md sm:text-xl font-semibold md:font-bold text-darkBlue">
          {course.my_description}
        </span>
        <div className="flex w-full space-x-8 items-center justify-center sm:justify-start">
          <div className="flex space-x-2 items-center">
            { course.rating_avg_stars === 0 ? null : <span className="text-darkBlue font-medium">{course.rating_avg_stars}</span>}
            {[...Array(course.rating_avg_stars)].map((val:any, index:number, arr) => (
              <svg key={index} width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.0001 35.9791L33.6459 41.2083C35.2293 42.1666 37.1668 40.75 36.7501 38.9583L34.4584 29.125L42.1043 22.5C43.5001 21.2916 42.7501 19 40.9168 18.8541L30.8543 18L26.9168 8.70831C26.2084 7.02081 23.7918 7.02081 23.0834 8.70831L19.1459 17.9791L9.08342 18.8333C7.25009 18.9791 6.50009 21.2708 7.89592 22.4791L15.5418 29.1041L13.2501 38.9375C12.8334 40.7291 14.7709 42.1458 16.3543 41.1875L25.0001 35.9791Z" fill="#FBDB18" />
              </svg>
            ))}
          </div>
          { course.total_votes === 0 ? null : <span className="text-darkBlue font-medium">{course.total_votes} votes</span>}
        </div>
        <span className="text-lg font-semibold text-darkBlue">
          {course.members_count} participants
        </span>
        <div className="flex space-x-8 items-center justify-center sm:justify-start text-darkBlue">
          <div className="flex space-x-4 items-center justify-center">
            <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.9165 18.75H27.0832V14.5834H22.9165M24.9998 41.6667C15.8123 41.6667 8.33317 34.1875 8.33317 25C8.33317 15.8125 15.8123 8.33335 24.9998 8.33335C34.1873 8.33335 41.6665 15.8125 41.6665 25C41.6665 34.1875 34.1873 41.6667 24.9998 41.6667ZM24.9998 4.16669C22.264 4.16669 19.5549 4.70556 17.0273 5.75253C14.4996 6.7995 12.203 8.33408 10.2684 10.2686C6.36144 14.1756 4.1665 19.4747 4.1665 25C4.1665 30.5254 6.36144 35.8244 10.2684 39.7314C12.203 41.666 14.4996 43.2005 17.0273 44.2475C19.5549 45.2945 22.264 45.8334 24.9998 45.8334C30.5252 45.8334 35.8242 43.6384 39.7312 39.7314C43.6382 35.8244 45.8332 30.5254 45.8332 25C45.8332 22.2641 45.2943 19.5551 44.2473 17.0274C43.2004 14.4998 41.6658 12.2032 39.7312 10.2686C37.7967 8.33408 35.5 6.7995 32.9724 5.75253C30.4448 4.70556 27.7357 4.16669 24.9998 4.16669ZM22.9165 35.4167H27.0832V22.9167H22.9165V35.4167Z" fill="#2E5F7E" />
            </svg>
            {course.write_date ? <span className='text-sm sm:text-lg font-semibold'>Dernière mise à jour {course.write_date?.split(" ")[0]}</span> : undefined}
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.9998 45.8334C22.1526 45.8334 19.4616 45.2861 16.9269 44.1917C14.3922 43.0972 12.1783 41.6042 10.2853 39.7125C8.39359 37.8209 6.90053 35.6077 5.80609 33.0729C4.71165 30.5382 4.16512 27.8472 4.16651 25C4.16651 22.1181 4.71373 19.4181 5.80817 16.9C6.90262 14.382 8.39567 12.1778 10.2873 10.2875C12.179 8.39447 14.3915 6.90141 16.9248 5.80835C19.4582 4.7153 22.1498 4.16808 24.9998 4.16669C27.8818 4.16669 30.5818 4.71391 33.0998 5.80835C35.6179 6.9028 37.8221 8.39585 39.7123 10.2875C41.6054 12.1792 43.0985 14.384 44.1915 16.9021C45.2846 19.4202 45.8318 22.1195 45.8332 25C45.8332 27.8472 45.286 30.5382 44.1915 33.0729C43.0971 35.6077 41.604 37.8215 39.7123 39.7146C37.8207 41.6063 35.6158 43.0993 33.0978 44.1938C30.5797 45.2882 27.8804 45.8347 24.9998 45.8334ZM24.9998 41.5625C25.9026 40.3125 26.6839 39.0104 27.3436 37.6563C28.0033 36.3021 28.5415 34.8611 28.9582 33.3334H21.0415C21.4582 34.8611 21.9964 36.3021 22.6561 37.6563C23.3158 39.0104 24.0971 40.3125 24.9998 41.5625ZM19.5832 40.7292C18.9582 39.5834 18.411 38.3938 17.9415 37.1604C17.4721 35.9271 17.0818 34.6514 16.7707 33.3334H10.6248C11.6318 35.0695 12.8908 36.5799 14.4019 37.8646C15.913 39.1493 17.6401 40.1042 19.5832 40.7292ZM30.4165 40.7292C32.361 40.1042 34.0887 39.1493 35.5998 37.8646C37.1109 36.5799 38.3693 35.0695 39.3748 33.3334H33.229C32.9165 34.6528 32.5262 35.9292 32.0582 37.1625C31.5901 38.3959 31.0429 39.5847 30.4165 40.7292ZM8.85401 29.1667H15.9373C15.8332 28.4722 15.7547 27.7861 15.7019 27.1084C15.6491 26.4306 15.6235 25.7278 15.6248 25C15.6248 24.2709 15.6512 23.5681 15.704 22.8917C15.7568 22.2153 15.8346 21.5292 15.9373 20.8334H8.85401C8.6804 21.5278 8.54984 22.2139 8.46234 22.8917C8.37484 23.5695 8.33178 24.2722 8.33317 25C8.33317 25.7292 8.37692 26.432 8.46442 27.1084C8.55192 27.7847 8.68178 28.4709 8.85401 29.1667ZM20.104 29.1667H29.8957C29.9998 28.4722 30.0783 27.7861 30.1311 27.1084C30.1839 26.4306 30.2096 25.7278 30.2082 25C30.2082 24.2709 30.1818 23.5681 30.129 22.8917C30.0762 22.2153 29.9985 21.5292 29.8957 20.8334H20.104C19.9998 21.5278 19.9214 22.2139 19.8686 22.8917C19.8158 23.5695 19.7901 24.2722 19.7915 25C19.7915 25.7292 19.8179 26.432 19.8707 27.1084C19.9235 27.7847 20.0012 28.4709 20.104 29.1667ZM34.0623 29.1667H41.1457C41.3193 28.4722 41.4498 27.7861 41.5373 27.1084C41.6248 26.4306 41.6679 25.7278 41.6665 25C41.6665 24.2709 41.6228 23.5681 41.5353 22.8917C41.4478 22.2153 41.3179 21.5292 41.1457 20.8334H34.0623C34.1665 21.5278 34.245 22.2139 34.2978 22.8917C34.3505 23.5695 34.3762 24.2722 34.3748 25C34.3748 25.7292 34.3484 26.432 34.2957 27.1084C34.2429 27.7847 34.1651 28.4709 34.0623 29.1667ZM33.229 16.6667H39.3748C38.3679 14.9306 37.1096 13.4202 35.5998 12.1354C34.0901 10.8507 32.3623 9.89585 30.4165 9.27085C31.0415 10.4167 31.5887 11.6063 32.0582 12.8396C32.5276 14.0729 32.9179 15.3486 33.229 16.6667ZM21.0415 16.6667H28.9582C28.5415 15.1389 28.0033 13.6979 27.3436 12.3438C26.6839 10.9896 25.9026 9.68752 24.9998 8.43752C24.0971 9.68752 23.3158 10.9896 22.6561 12.3438C21.9964 13.6979 21.4582 15.1389 21.0415 16.6667ZM10.6248 16.6667H16.7707C17.0832 15.3472 17.4741 14.0709 17.9436 12.8375C18.413 11.6042 18.9596 10.4153 19.5832 9.27085C17.6387 9.89585 15.911 10.8507 14.3998 12.1354C12.8887 13.4202 11.6304 14.9306 10.6248 16.6667Z" fill="#2E5F7E" />
            </svg>
            <span className='text-sm sm:text-lg font-semibold'>{course.language[1] || "Anglais"}</span>
          </div>
        </div>
        <button
          onClick={access}
          className="text-yellow px-4 py-2 sm:px-8 sm:py-4 font-bold text-2xl sm:text-4xl rounded-md btn xl:text-5xl w-1/3 mx-auto sm:mx-2">Enroll</button>
      </div>
      <div className="w-full flex flex-col space-y-4">
        <div className='w-full p-4 border-2 border-darkBlue rounded-xl flex flex-col space-y-4 items-center justify-center'>
          <span className='font-bold text-lg sm:text-2xl text-darkBlue'>Ce que vous apprenez</span>
          <div className='flex flex-col justify-between sm:flex-row sm:flex-wrap space-x-2 space-y-2'>
              {course.outcomes? course.outcomes.split(",").map((outcome: string) => (
                <span className='flex w-[48%] space-x-6 items-center justify-start text-darkBlue font-semibold'>
                  <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4167 6.25V14.5833M39.5833 35.4167V43.75M6.25 10.4167H14.5833M35.4167 39.5833H43.75M25 6.25L21.0167 18.3604C20.8128 18.9802 20.4662 19.5435 20.0049 20.0049C19.5435 20.4662 18.9802 20.8128 18.3604 21.0167L6.25 25L18.3604 28.9833C18.9802 29.1872 19.5435 29.5338 20.0049 29.9951C20.4662 30.4565 20.8128 31.0198 21.0167 31.6396L25 43.75L28.9833 31.6396C29.1872 31.0198 29.5338 30.4565 29.9951 29.9951C30.4565 29.5338 31.0198 29.1872 31.6396 28.9833L43.75 25L31.6396 21.0167C31.0198 20.8128 30.4565 20.4662 29.9951 20.0049C29.5338 19.5435 29.1872 18.9802 28.9833 18.3604L25 6.25Z" stroke="#2E5F7E" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  {outcome}
                </span>
              )): undefined}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-darkBlue">Course content</h1>
        <div className="text-sm text-darkBlue font-semibold flex space-x-2">
          <span>19 sections</span>
          <span>•</span>
          <span>423 lectures</span>
          <span>•</span>
          {course.total_time ? <span>{course.total_time} h total length</span>: undefined}
        </div>
        <div className="w-full">
        <Disclosure>
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full border-y-pink border-y justify-between bg-blancsale px-4 py-6 text-left text-2xl font-medium text-pink hover:bg-blancsale-200 focus:outline-none focus-visible:ring focus-visible:ring-blancsale-500 focus-visible:ring-opacity-75">
                      <span>{course.name}</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 flex flex-col pt-4 pb-2 text-sm text-gray-500">
                      {contents.map((content: any, ind: number) => (
                        <div key={content.id}>
                          <ListItem order={ind+1} title={content.name?content.name:''}/>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
          {/*
            topics?.map((topic) => (
              <Disclosure key={topic.topicId}>
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full border-y-pink border-y justify-between bg-blancsale px-4 py-6 text-left text-2xl font-medium text-pink hover:bg-blancsale-200 focus:outline-none focus-visible:ring focus-visible:ring-blancsale-500 focus-visible:ring-opacity-75">
                      <span>{topic.name}</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 flex flex-col pt-4 pb-2 text-sm text-gray-500">
                      {topic.courseWorkMaterials?.map((courseWorkMaterial, ind) => (
                        <div key={courseWorkMaterial.id}>
                          <ListItem order={ind+1} title={courseWorkMaterial.title?courseWorkMaterial.title:''}/>
                        </div>
                      ))}
                      {topic.courseWorks?.map((courseWork) => (
                        <div key={courseWork.id}>
                          <ListItem order={0} title={courseWork.title?courseWork.title:''}/>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))
          */}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-darkBlue">Requirements</h1>
        <ul className="">
          {course.requirements? course.requirements.split(",").map((requirement: string) => (
            <li>{requirement}</li>
          )): undefined}
        </ul>
      </div>
      <div className="space-y-4 w-full">
        <h1 className="text-2xl font-semibold text-darkBlue">Description</h1>
        <div className="space-y-2">
          {course.my_description_html? course.my_description_html.split(",").map((my_description_html) => (
            <p>{my_description_html}</p>
          )): undefined}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl text-darkBlue font-semibold">Who this course is for:</h2>
        <ul className="">
          {course.target? course.target.split(",").map((target: string) => (
            <li>{target}</li>
          )): undefined}
        </ul>
      </div>
      {/* <div className="space-y-4 w-full">
        <h1 className="text-2xl font-semibold text-darkBlue">Instructor</h1>
        <InstructorCard teacher={teacher} />
      </div> */}
      <div className="space-y-4 w-full">
        <h1 className="text-2xl font-semibold text-darkBlue">Ratings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {
            ratings ? ratings.map((rating: any) => (
              <RatingCard rating={rating} />
            )) : undefined
          }
        </div>
      </div>
    </div>
  )
}
