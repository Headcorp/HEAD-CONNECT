import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Replay() {
  return (
    <div className="replay_bg">
        <div className="w-full text-center mx-auto p-4">
            <h1 className="text-darkBlue font-bold underline text-3xl pb-8 lg:text-4xl xl:text-5xl">You can relive our past events</h1>
            <div className="mx-auto space-x-4 w-full md:w-1/2">
                <button className="text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl border-pink border btn3 lg:text-2xl xl:text-3xl">Conferences</button>
                <button className="text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl border-pink border btn2 lg:text-2xl xl:text-3xl">Workshop</button>
                <button className="text-white px-4 py-2 text-md md:text-xl font-bold rounded-xl border-pink border btn3 lg:text-2xl xl:text-3xl">Formations</button>
            </div>
            <div className="hidden md:flex">
              <Swiper
                className="mx-auto my-8 md:w-full xl:w-3/4"
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded bg-center bg-no-repeat bg-cover" 
                    style={{ backgroundImage: `url(../images/intersect.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                    <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red btn3 xl:text-3xl">Hackaton python</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded bg-center bg-no-repeat bg-cover" 
                    style={{ backgroundImage: `url(../images/intersect1.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                    <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red btn3 xl:text-3xl">Women doing it</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded bg-center bg-no-repeat bg-cover" 
                    style={{ backgroundImage: `url(../images/intersect2.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                    <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red btn3 xl:text-3xl">Dear to do</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded bg-center bg-no-repeat bg-cover" 
                    style={{ backgroundImage: `url(../images/intersect2.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                    <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red btn3 xl:text-3xl">Dear to do</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="md:hidden"> {/* Swiper en mobile */}
              <Swiper
                className="mx-auto my-8 w-full"
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="w-[250px] h-[250px] mx-auto rounded bg-center bg-no-repeat bg-cover" 
                    style={{ backgroundImage: `url(../images/intersect.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                    <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red btn3">Hackaton python</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[250px] h-[250px] mx-auto rounded bg-center bg-no-repeat bg-cover" 
                    style={{ backgroundImage: `url(../images/intersect1.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>xl:text-5xl
                    <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red btn3">Women doing it</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[250px] h-[250px] mx-auto rounded bg-center bg-no-repeat bg-cover" 
                    style={{ backgroundImage: `url(../images/intersect2.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                    <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red btn3">Dear to do</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[250px] h-[250px] mx-auto rounded bg-center bg-no-repeat bg-cover" 
                    style={{ backgroundImage: `url(../images/intersect2.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                    <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red btn3">Dear to do</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
        </div>
    </div>
  )
}
