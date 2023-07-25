import React from 'react'
import google from "googleapis"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from "next/router"

import { NoData } from './NoData'

export function PastEventsCard ({views, type}: {views: google.classroom_v1.Schema$Course[], type: string}) {
  const router = useRouter()
  const [slidesPerView, setSlidesPerView] = useState(3)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 })

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
    <div>
        <Swiper
            className="mx-auto mt-4 w-full"
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
            >
              {
              views.length ?
              views.map((view) => (
                <Link key={view.id} href={`/${type}/${view.id}`}>
                  <SwiperSlide>
                      <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded bg-center bg-no-repeat bg-cover mx-auto"
                          style={{ backgroundImage: `url(../images/intersect.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                          <button
                            onClick={() => router.push(`/courses/${view.id}`)}
                            className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red btn3 xl:text-3xl"
                          >
                            {view.name}
                          </button>
                      </div>
                  </SwiperSlide>
                </Link>
              )) :
            <NoData/>
        }
      </Swiper>
    </div>
  )
}
