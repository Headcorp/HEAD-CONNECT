import React from 'react'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import "@fontsource/yantramanav";
import { CoursesNavbarMobile } from '../../../../components/CoursesNavbarMobile'
import { CoursesNavbar } from '../../../../components/CoursesNavbar'
import { Playlist } from '../../../../components/Playlist'
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { listTopics } from '@/pages/api/classroom/courses/[courseId]/topics';
import google from 'googleapis';
import { ArrowLeftIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Disclosure, Tab } from '@headlessui/react';
import { listCourseWorks } from '@/pages/api/classroom/courses/[courseId]/courseWork';
import { listCourseWorkMaterials } from '@/pages/api/classroom/courses/[courseId]/courseWorkMaterials';
import {ListItem} from '../../../../components/ListItem'

type MyTopic = {
    courseWorks: google.classroom_v1.Schema$CourseWork[] | undefined;
    courseWorkMaterials: google.classroom_v1.Schema$CourseWorkMaterial[] | undefined;
} & google.classroom_v1.Schema$Topic

export default function course({topics}:{topics: MyTopic[], courseWorks: google.classroom_v1.Schema$CourseWork[], courseWorkMaterials: google.classroom_v1.Schema$CourseWorkMaterial[]}) {
  const router = useRouter()
  const {courseId} = router.query
  const [isMobile, setIsMobile] = useState(false)
  const tempIsMobile = useMediaQuery({ maxWidth: 768 })

  const [openDrawer, setOpenDrawer] = useState(true)

  useEffect(() => {
    setIsMobile(tempIsMobile)
  }, [tempIsMobile])

  return (
    <div className="flex flex-col space-y-6 body" >
      { isMobile ? <CoursesNavbarMobile /> : <CoursesNavbar /> }
      <Tab.Group>
      <div className="flex px-1 h-screen sm:px-5">
        {/*<Playlist />*/}

        <Tab.Panels className={`h-3/4 w-full lg:${openDrawer&&'max-w-xl'} bg-darkBlue relative`}>
          <div onClick={() => setOpenDrawer(true)} className={`hidden bg-pink text-white w-10 hover:w-36 hover:duration-1000 hover:delay-75 cursor-pointer h-10 lg:${openDrawer ? 'hidden' : 'flex'} items-center overflow-hidden justify-between absolute top-10 right-0`}>
            <div className='flex justify-center items-center p-2'>
              <ArrowLeftIcon className='h-6 w-6'/>
            </div>
            <div>Course content</div>
          </div>
          {topics.map((topic) => (
            <div key={topic.topicId}>
            {topic.courseWorkMaterials?.map((courseWorkMaterial) => (
              <Tab.Panel key={courseWorkMaterial.id}>
                {JSON.stringify(courseWorkMaterial)}
              </Tab.Panel>
            ))}
            {topic.courseWorks?.map((courseWork) => (
              <Tab.Panel key={courseWork.id}>
                {JSON.stringify(courseWork)}
              </Tab.Panel>
            ))}
            </div>
          ))}
        </Tab.Panels>
        <div className={`${!openDrawer && 'hidden'} w-96`}>
          <div className='flex p-1 justify-between'>
            <b>Course content</b>
            <XMarkIcon className='cursor-pointer h-6 w-6' onClick={() => setOpenDrawer(false)}/>
          </div>
          <Tab.List>
            {
              topics.map((topic) => (
                <Disclosure key={topic.topicId}>
                  {({open}) => (
                    <>
                      <Disclosure.Button className="flex w-full border-y-pink border-y justify-between bg-blancsale px-4 py-6 text-left text-sm font-medium text-purple-900 hover:bg-blancsale-200 focus:outline-none focus-visible:ring focus-visible:ring-blancsale-500 focus-visible:ring-opacity-75">
                        <span>{topic.name}</span>
                        <ChevronDownIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 flex flex-col pt-4 pb-2 text-sm text-gray-500">
                        {topic.courseWorkMaterials?.map((courseWorkMaterial, ind) => (
                          <Tab key={courseWorkMaterial.id}>
                            <ListItem order={ind+1} title={courseWorkMaterial.title?courseWorkMaterial.title:''}/>
                          </Tab>
                        ))}
                        {topic.courseWorks?.map((courseWork) => (
                          <Tab key={courseWork.id}>
                            <ListItem order={0} title={courseWork.title?courseWork.title:''}/>
                          </Tab>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))
            }
            
          </Tab.List>
        </div>
        

        {/*<div id="drawer-right-example" className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
            <h5 id="drawer-right-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Right drawer</h5>
          <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span className="sr-only">Close menu</span>
          </button>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
          <div className="grid grid-cols-2 gap-4">
              <a href="#" className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          </div>
        </div>*/}
      </div>
      </Tab.Group>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });
  const {courseId} = context.query

  if (!session) {
    return {
      redirect: { destination: "/auth/login" },
    };
  }
  let topics = await listTopics(courseId) as MyTopic[] | undefined
  //const topics = await listTopics(courseId);
  const courseWorks = await listCourseWorks(courseId);
  const courseWorkMaterials = await listCourseWorkMaterials(courseId);

  topics?.forEach((topic, index, array) => {
    array[index].courseWorks = courseWorks?.filter((courseWork) => courseWork.topicId == topic.topicId)
    array[index].courseWorkMaterials = courseWorkMaterials?.filter((courseWorkMaterial) => courseWorkMaterial.topicId == topic.topicId)
  })

  return {
    props: {topics},
  };
}