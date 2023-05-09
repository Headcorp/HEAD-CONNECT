import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Replay() {
  return (
    <div className="replay_bg">
        <div className="w-full text-center mx-auto p-4">
            <h1 className="text-darkBlue underline text-4xl pb-8">You can relive our past events</h1>
            <div className="mx-auto space-x-4 w-1/2">
                <button className="text-white px-4 py-2 text-xl font-bold rounded-xl border-pink border btn3">Conferences</button>
                <button className="text-white px-4 py-2 text-xl font-bold rounded-xl border-pink border btn2">Workshop</button>
                <button className="text-white px-4 py-2 text-xl font-bold rounded-xl border-pink border btn3">Formations</button>
            </div>
            <Swiper
              className="w-3/4 mx-auto my-8"
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="w-[300px] h-[300px] rounded bg-center bg-no-repeat bg-cover" 
                  style={{ backgroundImage: `url(../images/Intersect.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                  <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red">Hackaton python</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[300px] h-[300px] rounded bg-center bg-no-repeat bg-cover" 
                  style={{ backgroundImage: `url(../images/Intersect.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                  <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red">Women doing it</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[300px] h-[300px] rounded bg-center bg-no-repeat bg-cover" 
                  style={{ backgroundImage: `url(../images/Intersect.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                  <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red">Dear to do</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[300px] h-[300px] rounded bg-center bg-no-repeat bg-cover" 
                  style={{ backgroundImage: `url(../images/Intersect.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                  <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red">Dear to do</button>
                </div>
              </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
