import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Feature () {
  return (
    <div>
        <div className="relative">
            <div className="z-10 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(../images/feature_bg.png)` }}>
                <div className="absolute z-20 bottom-0 left-0 top-0 right-0 h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(../images/gradiant_feature.png)` }}>
                    <div className="w-full text-center mx-auto p-4 xl:p-8">
                        <h1 className="text-darkBlue font-bold underline text-3xl pb-8 xl:pb-16 lg:text-4xl xl:text-5xl">Head connect's upcoming features</h1>
                        <div className="mx-auto space-x-4 w-full md:w-1/2">
                            <button className="text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl btn2 lg:text-2xl xl:text-3xl">Conferences</button>
                            <button className="text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl border-pink border btn3 lg:text-2xl xl:text-3xl">Workshop</button>
                            <button className="text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl border-pink border btn3 lg:text-2xl xl:text-3xl">Formations</button>
                        </div>
                        <div className="hidden mx-auto mt-4 xl:mt-10 md:grid grid-cols-3 gap-4">
                            <div className="bg-white/40 mx-auto space-y-2 lg:space-y-4 xl:space-y-10 rounded-xl p-4 text-center lg:w-[300px] xl:w-[400px]">
                                <div className="bg-pink text-center p-2 rounded-xl mx-auto">
                                    <h2 className="text-yellow font-bold text-xl lg:text-2xl xl:text-4xl">Theme: Data's value in 2023</h2>
                                    <h2 className="text-yellow font-bold text-xl lg:text-2xl xl:text-4xl">Date: 15/06/2023</h2>
                                </div>
                                <h2 className="text-red font-bold text-2xl lg:text-3xl xl:text-5xl">Principal guest</h2>
                                <img src="../images/conf1.png" alt="" className="mx-auto xl:w-[150%]" />
                                <div>
                                    <h2 className="text-darkBlue font-bold text-2xl lg:text-3xl xl:text-5xl">Aliana Kodjo</h2>
                                    <h3 className="text-darkBlue font-bold text-lg lg:text-xl xl:text-3xl">Data analyst</h3>
                                </div>
                                <button className="text-white px-4 py-3 text-xl lg:text-2xl xl:text-4xl font-bold rounded-xl btn">Read more</button>
                            </div>
                            <div className="bg-white/40 mx-auto space-y-2 lg:space-y-4 xl:space-y-10 rounded-xl p-4 text-center lg:w-[300px] xl:w-[400px]">
                                <div className="bg-pink text-center p-1 rounded-xl mx-auto">
                                    <h2 className="text-yellow font-bold text-xl lg:text-2xl xl:text-4xl">Theme: My cell phone my tresor</h2>
                                    <h2 className="text-yellow font-bold text-xl lg:text-2xl xl:text-4xl">Date: 24/07/2023</h2>
                                </div>
                                <h2 className="text-red font-bold text-2xl lg:text-3xl xl:text-5xl">Principal guest</h2>
                                <img src="../images/conf2.png" alt="" className="mx-auto xl:w-[150%]" />
                                <div>
                                    <h2 className="text-darkBlue font-bold text-2xl lg:text-3xl xl:text-5xl">Elis smiths</h2>
                                    <h3 className="text-darkBlue font-bold text-lg lg:text-xl xl:text-3xl">Marketing director</h3>
                                </div>
                                <button className="text-white px-4 py-3 text-xl lg:text-2xl xl:text-4xl font-bold rounded-xl btn">Read more</button>
                            </div>
                            <div className="bg-white/40 mx-auto space-y-2 lg:space-y-4 xl:space-y-10 rounded-xl p-4 text-center lg:w-[300px] xl:w-[400px]">
                                <div className="bg-pink text-center p-1 rounded-xl mx-auto">
                                    <h2 className="text-yellow font-bold text-xl lg:text-2xl xl:text-4xl">Theme: The First 1M,the hardest</h2>
                                    <h2 className="text-yellow font-bold text-xl lg:text-2xl xl:text-4xl">Date: 26/09/2023</h2>
                                </div>
                                <h2 className="text-red font-bold text-2xl lg:text-3xl xl:text-5xl">Principal guest</h2>
                                <img src="../images/conf3.png" alt="" className="mx-auto xl:w-[150%]" />
                                <div>
                                    <h2 className="text-darkBlue font-bold text-2xl lg:text-3xl xl:text-5xl">John O'dowel</h2>
                                    <h3 className="text-darkBlue font-bold text-lg lg:text-xl xl:text-3xl">Economist</h3>
                                </div>
                                <button className="text-white px-4 py-3 text-xl lg:text-2xl xl:text-4xl font-bold rounded-xl btn">Read more</button>
                            </div>
                        </div>
                        <div className="md:hidden"> {/* Swiper en mobile */}
                            <Swiper
                                className="mx-auto mt-4 w-full"
                                modules={[Navigation, Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                >
                                <SwiperSlide>
                                    <div className="bg-white/40 mx-auto space-y-2 rounded-xl p-4 items-center">
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
                                    <div className="bg-white/40 mx-auto space-y-2 rounded-xl p-4 items-center">
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
                                    <div className="bg-white/40 mx-auto space-y-2 rounded-xl p-4 items-center">
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
