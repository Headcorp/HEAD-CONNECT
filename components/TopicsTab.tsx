import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Tab } from '@headlessui/react'

import { MyTopic } from '../types/topic'
import { Overview } from './Overview'
import { LearningTools } from './LearningTools'
import { Notes } from './Notes'
import { Review } from './Review'
import { Announcements } from './Announcements'
import { TopicsFooter } from './TopicsFooter'
import { QnA } from './QnA'
import { CourseContent } from './CourseContent'

export function TopicsTab({ topics }: { topics: MyTopic[] }) {
  const [isMedium, setisMedium] = useState(false)
  const tempisMedium = useMediaQuery({ maxWidth: 1023 })

  useEffect(() => {
    setisMedium(tempisMedium)
  }, [tempisMedium])

  return (
    <div className="px-2 sm:px-0 flex flex-col space-y-2 lg:space-y-6">
      <Tab.Group>
        <Tab.List className="flex p-2 w-full border-b-2 border-b-darkBlue">
          {isMedium && <Tab className='rounded-xl p-1 sm:p-4 text-sm lg:text-lg leading-5 text-darkBlue focus:darkBlue font-bold focus:underline w-full'>
            Course Content
          </Tab>}
          <Tab className='rounded-xl p-1 sm:p-4 text-sm lg:text-lg leading-5 text-darkBlue focus:darkBlue font-bold focus:underline w-full'>
            Overview
          </Tab>
          <Tab className='rounded-xl p-1 sm:p-4 text-sm lg:text-lg leading-5 text-darkBlue focus:darkBlue font-bold focus:underline w-full'>
            QnA
          </Tab>
          <Tab className='rounded-xl p-1 sm:p-4 text-sm lg:text-lg leading-5 text-darkBlue focus:darkBlue font-bold focus:underline w-full'>
            Notes
          </Tab>
          <Tab className='rounded-xl p-1 sm:p-4 text-sm lg:text-lg leading-5 text-darkBlue focus:darkBlue font-bold focus:underline w-full'>
            Announcements
          </Tab>
          <Tab className='rounded-xl p-1 sm:p-4 text-sm lg:text-lg leading-5 text-darkBlue focus:darkBlue font-bold focus:underline w-full'>
            Review
          </Tab>
          <Tab className='rounded-xl p-1 sm:p-4 text-sm lg:text-lg leading-5 text-darkBlue focus:darkBlue font-bold focus:underline w-full'>
            Learning tools
          </Tab>
        </Tab.List>
        <Tab.Panels className="lg:mt-2">
          {isMedium && <Tab.Panel className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'>
            <CourseContent topics={topics} />
          </Tab.Panel>}
          <Tab.Panel className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'>
            <Overview />
          </Tab.Panel>
          <Tab.Panel className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'>
            <QnA />
          </Tab.Panel>
          <Tab.Panel className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'>
            <Notes />
          </Tab.Panel>
          <Tab.Panel className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'>
            <Announcements />
          </Tab.Panel>
          <Tab.Panel className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'>
            <Review />
          </Tab.Panel>
          <Tab.Panel className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'>
            <LearningTools />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <TopicsFooter />
    </div>
  )
}
