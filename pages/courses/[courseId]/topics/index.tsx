import "@fontsource/yantramanav";

import React from 'react'
import axios from 'axios';
import google from 'googleapis';
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Disclosure, Tab } from '@headlessui/react';
import { ArrowLeftIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid'

import { MyTopic } from '../../../../types/topic'
import { listTopics } from '@/pages/api/classroom/courses/[courseId]/topics';
import { listCourseWorks } from '@/pages/api/classroom/courses/[courseId]/courseWork';
import { listCourseWorkMaterials } from '@/pages/api/classroom/courses/[courseId]/courseWorkMaterials';
import { listContents } from '@/pages/api/classroom/courses/[courseId]/contents';

import { ListItem } from '../../../../components/ListItem'
import { Playlist } from '../../../../components/Playlist'
import { TopicsTab } from '../../../../components/TopicsTab'
import { CourseContent } from '../../../../components/CourseContent'
import { CoursesNavbar } from '../../../../components/CoursesNavbar'
import { CoursesNavbarMobile } from '../../../../components/CoursesNavbarMobile'
import { content } from "googleapis/build/src/apis/content";

export default function course({ topics, contents }: { topics: MyTopic[], contents: any }) {
  const router = useRouter()
  const { courseId } = router.query
  const [openDrawer, setOpenDrawer] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isMedium, setisMedium] = useState(false)
  const tempIsMobile = useMediaQuery({ maxWidth: 768 })
  const tempIsMedium = useMediaQuery({ maxWidth: 1023 })

  useEffect(() => {
    setIsMobile(tempIsMobile)
    setisMedium(tempIsMedium)
  }, [tempIsMobile, tempIsMedium])

  return (
    <div className="flex flex-col space-y-4 body" >
      {isMobile ? <CoursesNavbarMobile /> : <CoursesNavbar />}
      <Tab.Group>
        <div className="flex px-1 h-auto sm:px-5 space-x-4">
          {/*<Playlist />*/}
          <Tab.Panels className={`h-[250px] md:h-[400px] lg:h-[500px] w-full ${openDrawer ? 'lg:w-3/4' : 'lg:w-full'} lg:${openDrawer&&'max-w-xl'} bg-blancsale/60 relative`}>
            <div onClick={() => setOpenDrawer(true)} className={`bg-pink text-white w-10 hover:w-36 hover:duration-1000 hover:delay-75 cursor-pointer h-10 ${openDrawer ? 'hidden' : 'lg:flex'} items-center overflow-hidden justify-between absolute top-10 right-0`}>
              <div className='flex justify-center items-center p-2'>
                <ArrowLeftIcon className='h-6 w-6'/>
              </div>
              <div>Course content</div>
            </div>
            {
              contents.map((content: any) => (
                <Tab.Panel key={content.id}>
                  { content.slide_category === "video" ? (
                    <div key={content.id}>
                      { <iframe
                        className = "w-full h-[250px] md:h-[400px] lg:h-[500px]"
                        title = {`${content.name}`}
                        src = {`${content.video_url?.replace("watch?v=", "embed/")}`}
                        // src = {`${content.video_url}`}
                        // src = "https://www.youtube.com/watch?v=HA6DlL0Rxkw" // Lien de la vidéo (ça ne marche pas)
                        // src = "https://www.youtube.com/embed/HA6DlL0Rxkw" // Lien de la vidéo modifiée (ça marche)
                        allowFullScreen 
                        // "https://www.w3schools.com/html/mov_bbb.mp4"
                        // {`${material.youtubeVideo?.alternateLink?.replace("watch?v=", "embed/")}`}
                      />}
                      {/* <video controls playsInline src="https://www.w3schools.com/html/mov_bbb.mp4" className="w-full h-[250px] md:h-[400px] lg:h-[500px]"></video> */}
                    </div>
                    // <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] flex flex-col justify-center items-center space-y-4 overflow-scroll">
                    //   <h2 className="text-3xl text-darkBlue font-bold uppercase">{content.name}</h2>
                    //   <p className="text-xl text-darkBlue font-semibold">{content.description}</p>
                    // </div>
                  ) : undefined }
                  {/* {JSON.stringify(content)} */}
                </Tab.Panel>
              ))
            }

          {/*contents.map((content) => (
            <div key={topic.topicId}>
            {topic.courseWorkMaterials?.map((courseWorkMaterial) => (
              <Tab.Panel key={courseWorkMaterial.id}>
                { courseWorkMaterial.materials?.map((material) => (
                    <div key={material.youtubeVideo?.id}>
                      { <iframe
                        className = "w-full h-[250px] md:h-[400px] lg:h-[500px]"
                        title = {`${material.youtubeVideo?.title}`}
                        src = {`${material.youtubeVideo?.alternateLink?.replace("watch?v=", "embed/")}`}
                        // src = "https://www.youtube.com/watch?v=HA6DlL0Rxkw" // Lien de la vidéo (ça ne marche pas)
                        // src = "https://www.youtube.com/embed/HA6DlL0Rxkw" // Lien de la vidéo modifiée (ça marche)
                        allowFullScreen 
                        "https://www.w3schools.com/html/mov_bbb.mp4"
                        {`${material.youtubeVideo?.alternateLink?.replace("watch?v=", "embed/")}`}
                      />}
                      <video controls playsInline src="https://www.w3schools.com/html/mov_bbb.mp4" className="w-full h-[250px] md:h-[400px] lg:h-[500px]"></video>
                    </div>
                  )
                )}
                { {JSON.stringify(courseWorkMaterial)} }
              </Tab.Panel>
                      ))*/}
            {/*topic.courseWorks?.map((courseWork) => (
              <Tab.Panel key={courseWork.id}>
                { courseWork.workType === "SHORT_ANSWER_QUESTION" ? (
                  <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] flex flex-col justify-center items-center space-y-4 overflow-scroll">
                    <h2 className="text-3xl text-darkBlue font-bold uppercase">{courseWork.title}</h2>
                    <p className="text-xl text-darkBlue font-semibold">{courseWork.description}</p>
                    <textarea name="" id="" cols={100} rows={10} className="border-2 border-pink"></textarea>
                    <button
                      className="px-4 py-2 sm:px-8 sm:py-4 btn text-white font-bold text-2xl rounded-xl"
                      onClick={() => {}}
                    >
                      Soumettre
                    </button>
                  </div>
                ) : undefined }
                { courseWork.title === "MCQ" && courseWork.materials ? (
                  <iframe
                    className = "w-full h-[250px] md:h-[400px] lg:h-[500px]"
                    src = {`${courseWork.materials[0]?.form?.formUrl}`}
                    title = {`${courseWork.title}`}
                    allow-forms
                  />
                ) : undefined }
                { courseWork.title === "Assignment" && courseWork.workType === "ASSIGNMENT" ? (
                  <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] flex flex-col justify-center items-center space-y-4 overflow-scroll">
                    <h2 className="text-3xl text-darkBlue font-bold uppercase">{courseWork.title}</h2>
                    <p className="text-xl text-darkBlue font-semibold">{courseWork.description}</p>
                    <form method="post" className="flex flex-col justify-center items-center space-y-2">
                      <label htmlFor="file" className="text-lg text-darkBlue font-medium">Choose a file :</label>
                      <input type="file" id="file" name="file" accept="image/*,.pdf" className="text-xl" />
                      <button
                        className="px-4 py-2 sm:px-8 sm:py-4 btn text-white font-bold text-2xl rounded-xl"
                        onClick={() => {}}
                      >
                        Soumettre
                      </button>
                    </form>
                  </div>
                ) : undefined }
                { {JSON.stringify(courseWork)} }
              </Tab.Panel>
            ))}
            </div>
          ))*/}
          </Tab.Panels>
          {/* <div className="w-3/4 flex flex-col space-y-4">
            <div className="w-full bg-darkBlue h-[500px]">
              <img src="../" alt="" />
            </div>
            <div className="w-full">
              <TopicsTab />
            </div>
          </div> */}

          {!isMedium &&  <div id="drawer" className={`${!openDrawer && 'hidden'} w-1/4`}>
            <div className='flex p-1 justify-between'>
              <b>Course content</b>
              <XMarkIcon className='cursor-pointer h-6 w-6' onClick={() => setOpenDrawer(false)} />
            </div>
            <CourseContent topics={topics} />
            <Tab.List>
              {
                contents.map((content: any, ind: number) => (
                    <Tab key={content.id}>
                      <ListItem order={ind + 1} title={content.name ? content.name : ''} />
                    </Tab>
                ))
              }
              {/* {
                topics.map((topic) => (
                  <Disclosure key={topic.topicId}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full border-y-pink border-y justify-between bg-blancsale px-4 py-6 text-left text-sm font-medium text-purple-900 hover:bg-blancsale-200 focus:outline-none focus-visible:ring focus-visible:ring-blancsale-500 focus-visible:ring-opacity-75">
                          <span>{topic.name}</span>
                          <ChevronDownIcon
                            className={`${open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 flex flex-col pt-4 pb-2 text-sm text-gray-500">
                          {topic.courseWorkMaterials?.map((courseWorkMaterial, ind) => (
                            <Tab key={courseWorkMaterial.id}>
                              <ListItem order={ind + 1} title={courseWorkMaterial.title ? courseWorkMaterial.title : ''} />
                            </Tab>
                          ))}
                          {topic.courseWorks?.map((courseWork) => (
                            <Tab key={courseWork.id}>
                              <ListItem order={0} title={courseWork.title ? courseWork.title : ''} />
                            </Tab>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))
              } */}
            </Tab.List>
          </div>}

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
      <div className={`w-full ${openDrawer ? 'lg:w-3/4' : 'w-full'}`}>
        <TopicsTab topics={topics} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });
  const { courseId } = context.query

  
  if (!session) {
    return {
      redirect: { destination: "/auth/login" },
    };
  }
  let topics = await listTopics(courseId) as MyTopic[] | undefined
  //const topics = await listTopics(courseId);
  const courseWorks = await listCourseWorks(courseId);
  const courseWorkMaterials = await listCourseWorkMaterials(courseId);
  const contents = await listContents(courseId);

  topics?.forEach((topic, index, array) => {
    array[index].courseWorks = courseWorks?.filter((courseWork) => courseWork.topicId == topic.topicId)
    array[index].courseWorkMaterials = courseWorkMaterials?.filter((courseWorkMaterial: { topicId: string | null | undefined }) => courseWorkMaterial.topicId == topic.topicId)
    // array[index].contents = contents?.filter((content: { topicId: string | null | undefined }) => content.topicId == topic.topicId)
  })

  return {
    props: { contents },
  };
}