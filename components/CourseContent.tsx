import React from 'react'
import { Disclosure, Tab } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'

import { MyTopic } from '../types/topic'
import { ListItem } from './ListItem'

export function CourseContent({ topics }: { topics: MyTopic[] }) {
  return (
    <Tab.List>
        {
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
        }
    </Tab.List>
  )
}
