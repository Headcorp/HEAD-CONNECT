import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Feature () {
    const [slidesPerView, setSlidesPerView] = useState(3);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    useEffect(() => {
      if (isMobile) {
        setSlidesPerView(1)
      } else if (isMedium) {
        setSlidesPerView(2)
      } else {
        return
      }
    }, [isMobile, isMedium]);

  return (
    <div id="calendar">
        <div className="relative">
            <div className="z-10 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(../images/feature_bg.png)` }}>
                <div className="absolute z-20 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(../images/gradiant_feature.png)` }}>
                    <div className="w-full text-center mx-auto p-4 my-8 md:my-0">
                        <h1 className="text-darkBlue font-bold underline text-3xl pb-4 lg:text-4xl xl:text-5xl mb-12 md:mb-0">Head connect's upcoming features</h1>
                        <div className="mx-auto space-x-4 w-full md:w-1/2 mb-6 md:mb-0">
                            <button className="text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl btn2 lg:text-2xl xl:text-3xl">Conferences</button>
                            <button className="text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl border-pink border btn3 lg:text-2xl xl:text-3xl">Workshop</button>
                            <button className="text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl border-pink border btn3 lg:text-2xl xl:text-3xl">Formations</button>
                        </div>
                        <div className="hidden mx-auto mt-4 lg:grid grid-cols-3 gap-4">
                            <div className="bg-white/40 mx-auto space-y-1 xl:space-y-4 rounded-xl p-2 text-center xl:w-[400px]">
                                <div className="bg-pink text-center p-2 rounded-xl mx-auto">
                                    <h2 className="text-yellow font-bold text-xl xl:text-2xl">Theme: Data's value in 2023</h2>
                                    <h2 className="text-yellow font-bold text-xl xl:text-2xl">Date: 15/06/2023</h2>
                                </div>
                                <h2 className="text-red font-bold text-2xl xl:text-3xl">Principal guest</h2>
                                <img src="../images/conf1.png" alt="" className="mx-auto" />
                                <div>
                                    <h2 className="text-darkBlue font-bold text-2xl xl:text-3xl">Aliana Kodjo</h2>
                                    <h3 className="text-darkBlue font-bold text-lg xl:text-xl">Data analyst</h3>
                                </div>
                                <button className="text-white px-4 py-3 text-xl xl:text-4xl font-bold rounded-xl btn">Read more</button>
                            </div>
                            <div className="bg-white/40 mx-auto space-y-1 xl:space-y-4 rounded-xl p-2 text-center xl:w-[400px]">
                                <div className="bg-pink text-center p-1 rounded-xl mx-auto">
                                    <h2 className="text-yellow font-bold text-xl xl:text-2xl">Theme: My cell phone my tresor</h2>
                                    <h2 className="text-yellow font-bold text-xl xl:text-2xl">Date: 24/07/2023</h2>
                                </div>
                                <h2 className="text-red font-bold text-2xl xl:text-3xl">Principal guest</h2>
                                <img src="../images/conf2.png" alt="" className="mx-auto" />
                                <div>
                                    <h2 className="text-darkBlue font-bold text-2xl xl:text-3xl">Elis smiths</h2>
                                    <h3 className="text-darkBlue font-bold text-lg xl:text-xl">Marketing director</h3>
                                </div>
                                <button className="text-white px-4 py-3 text-xl xl:text-4xl font-bold rounded-xl btn">Read more</button>
                            </div>
                            <div className="bg-white/40 mx-auto space-y-1 xl:space-y-4 rounded-xl p-2 text-center xl:w-[400px]">
                                <div className="bg-pink text-center p-1 rounded-xl mx-auto">
                                    <h2 className="text-yellow font-bold text-xl xl:text-2xl">Theme: The First 1M,the hardest</h2>
                                    <h2 className="text-yellow font-bold text-xl xl:text-2xl">Date: 26/09/2023</h2>
                                </div>
                                <h2 className="text-red font-bold text-2xl xl:text-3xl">Principal guest</h2>
                                <img src="../images/conf3.png" alt="" className="mx-auto" />
                                <div>
                                    <h2 className="text-darkBlue font-bold text-2xl xl:text-3xl">John O'dowel</h2>
                                    <h3 className="text-darkBlue font-bold text-lg xl:text-xl">Economist</h3>
                                </div>
                                <button className="text-white px-4 py-3 text-xl xl:text-4xl font-bold rounded-xl btn">Read more</button>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <Swiper
                                className="mx-auto mt-4 w-full"
                                modules={[Navigation, Pagination]}
                                spaceBetween={20}
                                slidesPerView={slidesPerView}
                                navigation
                                pagination={{ clickable: true }}
                                >
                                <SwiperSlide>
                                    <div className="bg-white/40 mx-auto space-y-2 rounded-xl p-8 items-center w-[350px]">
                                        <div className="bg-pink text-center p-1 rounded-xl mx-auto">
                                            <h2 className="text-yellow font-bold text-xl">Theme: Data's value in 2023</h2>
                                            <h2 className="text-yellow font-bold text-xl">Date: 15/06/2023</h2>
                                        </div>
                                        <h2 className="text-red font-bold text-2xl">Principal guest</h2>
                                        <img src="../images/conf1.png" alt="" className="mx-auto" />
                                        <div>
                                            <h2 className="text-darkBlue font-bold text-2xl">Aliana Kodjo</h2>
                                            <h3 className="text-darkBlue font-bold text-lg">Data analyst</h3>
                                        </div>
                                        <button className="text-white px-4 py-3 text-xl font-bold rounded-xl btn">Read more</button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="bg-white/40 mx-auto space-y-2 rounded-xl p-8 items-center  w-[350px]">
                                        <div className="bg-pink text-center p-1 rounded-xl mx-auto">
                                            <h2 className="text-yellow font-bold text-xl">Theme: My cell phone my tresor</h2>
                                            <h2 className="text-yellow font-bold text-xl">Date: 24/07/2023</h2>
                                        </div>
                                        <h2 className="text-red font-bold text-2xl">Principal guest</h2>
                                        <img src="../images/conf2.png" alt="" className="mx-auto" />
                                        <div>
                                            <h2 className="text-darkBlue font-bold text-2xl">Elis smiths</h2>
                                            <h3 className="text-darkBlue font-bold text-lg">Marketing director</h3>
                                        </div>
                                        <button className="text-white px-4 py-3 text-xl font-bold rounded-xl btn">Read more</button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="bg-white/40 mx-auto space-y-2 rounded-xl p-8 items-center  w-[350px]">
                                        <div className="bg-pink text-center p-1 rounded-xl mx-auto">
                                            <h2 className="text-yellow font-bold text-xl">Theme: The first 1 M the hardest</h2>
                                            <h2 className="text-yellow font-bold text-xl">Date: 26/09/2023</h2>
                                        </div>
                                        <h2 className="text-red font-bold text-2xl">Principal guest</h2>
                                        <img src="../images/conf3.png" alt="" className="mx-auto" />
                                        <div>
                                            <h2 className="text-darkBlue font-bold text-2xl">John O'dowel</h2>
                                            <h3 className="text-darkBlue font-bold text-lg">Economist</h3>
                                        </div>
                                        <button className="text-white px-4 py-3 text-xl font-bold rounded-xl btn">Read more</button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
