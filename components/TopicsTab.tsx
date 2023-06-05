import { useState } from 'react'
import { Tab } from '@headlessui/react'

import { Overview } from './Overview'
import { LearningTools } from './LearningTools'
import { Notes } from './Notes'
import { Review } from './Review'
import { Announcements } from './Announcements'
import { TopicsFooter } from './TopicsFooter'
import { QnA } from './QnA'

export function TopicsTab() {
  return (
    <div className="px-2 sm:px-0 flex flex-col space-y-12">
      <Tab.Group>
        <Tab.List className="flex p-2 w-full border-b-2 border-b-darkBlue">
          <Tab
            className='rounded-xl p-4 text-lg leading-5 text-darkBlue focus:darkBlue font-medium focus:underline w-full'
          >
            Overview
          </Tab>
          <Tab
            className='rounded-xl p-4 text-lg leading-5 text-darkBlue focus:darkBlue font-medium focus:underline w-full'
          >
            QnA
          </Tab>
          <Tab
            className='rounded-xl p-4 text-lg leading-5 text-darkBlue focus:darkBlue font-medium focus:underline w-full'
          >
            Notes
          </Tab>
          <Tab
            className='rounded-xl py-2 text-lg leading-5 text-darkBlue focus:darkBlue font-medium focus:underline w-full'
          >
            Announcements
          </Tab>
          <Tab
            className='rounded-xl p-4 text-lg leading-5 text-darkBlue focus:darkBlue font-medium focus:underline w-full'
          >
            Review
          </Tab>
          <Tab
            className='rounded-xl p-4 text-lg leading-5 text-darkBlue focus:darkBlue font-medium focus:underline w-full'
          >
            Learning tools
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'
          >
            <Overview />
          </Tab.Panel>
          <Tab.Panel
            className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'
          >
            <QnA />
          </Tab.Panel>
          <Tab.Panel
            className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'
          >
            <Notes />
          </Tab.Panel>
          <Tab.Panel
            className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'
          >
            <Announcements />
          </Tab.Panel>
          <Tab.Panel
            className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'
          >
            <Review />
          </Tab.Panel>
          <Tab.Panel
            className='bg-white p-3 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:underline'
          >
            <LearningTools />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <TopicsFooter />
    </div>
  )
}
