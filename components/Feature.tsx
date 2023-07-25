import axios from "axios"
import { Tab } from "@headlessui/react"
import { useState, useEffect } from 'react'

import { UpcomingCard } from './UpcomingCard'

export function Feature () {
    const [activeButton, setActiveButton] = useState('conferences')
    const [courses, setCourses] = useState([])

    const getCourses = async () => {
      try {
        const {data} = await axios.get('/api/classroom/courses')
        setCourses(data)
      } catch (error) {
        
      }
    }

    useEffect(() => {
      getCourses()
    }, []);

  return (
    <div id="calendar">
        <div className="relative">
            <div className="z-10 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(../images/feature_bg.png)` }}>
                <div className="absolute z-20 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(../images/gradiant_feature.png)` }}>
                    <div className="w-full text-center mx-auto p-4 my-8 md:my-0">
                        <h1 className="text-darkBlue font-bold underline text-3xl pb-4 lg:text-4xl xl:text-5xl mb-12 md:mb-0">Head connect's upcoming features</h1>
                        <Tab.Group>
                            <Tab.List className="mx-auto space-x-4 w-full md:w-1/2 mb-6 md:mb-0">
                                <Tab
                                    className={`text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl lg:text-2xl xl:text-3xl border-pink border
                                    ${activeButton === 'conferences' ? 'btn2' : 'btn3'}`}
                                    onClick={() => setActiveButton('conferences')}
                                >
                                    Conferences
                                </Tab>
                                <Tab
                                    className={`text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl lg:text-2xl xl:text-3xl border-pink border
                                    ${activeButton === 'workshops' ? 'btn2' : 'btn3'}`}
                                    onClick={() => setActiveButton('workshops')}
                                >
                                    Workshops
                                </Tab>
                                <Tab
                                    className={`text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl lg:text-2xl xl:text-3xl border-pink border
                                    ${activeButton === 'formations' ? 'btn2' : 'btn3'}`}
                                    onClick={() => setActiveButton('formations')}
                                >
                                    Formations
                                </Tab>
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <UpcomingCard type="conferences" views={[]} />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <UpcomingCard type="workshops" views={[]} />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <UpcomingCard type="courses" views={courses} />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
