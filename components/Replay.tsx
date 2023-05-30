import axios from "axios"
import { Tab } from "@headlessui/react"
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { PastEventsCard } from './PastEventsCard';

export function Replay() {
  const [slidesPerView, setSlidesPerView] = useState(3)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
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

  useEffect(() => {
    if (isMobile) {
      setSlidesPerView(1)
    } else if (isMedium) {
      setSlidesPerView(2)
    } else {
      setSlidesPerView(3)
      return
    }
  }, [isMobile, isMedium]);

  return (
    <div className="replay_bg h-[500px]" id="pastevents">
        <div className="w-full text-center mx-auto p-4">
            <h1 className="text-darkBlue font-bold underline text-3xl pb-8 lg:text-4xl xl:text-5xl">
              You can relive our past events
            </h1>
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
                      <Swiper
                          className="mx-auto mt-4 w-full"
                          modules={[Navigation, Pagination]}
                          spaceBetween={20}
                          slidesPerView={slidesPerView}
                          navigation
                          pagination={{ clickable: true }}
                          >
                          <SwiperSlide>
                              <PastEventsCard type="conferences" views={[]} />
                          </SwiperSlide>
                      </Swiper>
                  </Tab.Panel>
                  <Tab.Panel>
                      <Swiper
                          className="mx-auto mt-4 w-full"
                          modules={[Navigation, Pagination]}
                          spaceBetween={20}
                          slidesPerView={slidesPerView}
                          navigation
                          pagination={{ clickable: true }}
                          >
                          <SwiperSlide>
                              <PastEventsCard type="workshops" views={[]} />
                          </SwiperSlide>
                      </Swiper>
                  </Tab.Panel>
                  <Tab.Panel>
                      <Swiper
                          className="mx-auto mt-4 w-full"
                          modules={[Navigation, Pagination]}
                          spaceBetween={20}
                          slidesPerView={slidesPerView}
                          navigation
                          pagination={{ clickable: true }}
                          >
                          <SwiperSlide>
                              <PastEventsCard type="courses" views={courses} />
                          </SwiperSlide>
                      </Swiper>
                  </Tab.Panel>
              </Tab.Panels>
          </Tab.Group>
        </div>
    </div>
  )
}
