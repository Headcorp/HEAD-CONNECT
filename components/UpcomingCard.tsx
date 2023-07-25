import React from 'react'
import google from "googleapis"
import Link from "next/link"
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRouter } from "next/router"

import { NoData } from './NoData'

export function UpcomingCard ({views, type}: {views: google.classroom_v1.Schema$Course[], type: string}) {
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
                            <div className="bg-white/40 mx-auto space-y-1 xl:space-y-4 rounded-xl p-2 text-center xl:w-[400px]">
                                <div className="bg-pink text-center p-2 rounded-xl mx-auto">
                                    <h2 className="text-yellow font-bold text-xl xl:text-2xl">{`Theme: ${view.name}`}</h2>
                                    <h2 className="text-yellow font-bold text-xl xl:text-2xl">{`Date: ${view.write_date?.split(" ")[0]}`}</h2>
                                </div>
                                <h2 className="text-red font-bold text-2xl xl:text-3xl">Principal guest</h2>
                                <img src={`../images/conf1.png`} alt="" className="mx-auto" />
                                <div>
                                    <h2 className="text-darkBlue font-bold text-2xl xl:text-3xl">Aliana Kodjo</h2>
                                    <h3 className="text-darkBlue font-bold text-lg xl:text-xl">Data analyst</h3>
                                </div>
                                <button
                                    onClick={() => router.push(`/courses/${view.id}`)}
                                    className="text-white px-4 py-3 text-xl xl:text-4xl font-bold rounded-xl btn"
                                >
                                    Read more
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
