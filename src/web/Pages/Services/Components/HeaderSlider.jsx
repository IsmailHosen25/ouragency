import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeaderDev from './HeaderDev';
import { headerdata } from '../data'

export default function HeaderSlider() {
  console.log(headerdata)
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{delay:3000, disableOnInteraction: true}}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: false }}
    >
        {headerdata.map((data,i)=><SwiperSlide key={i}>
            <HeaderDev title={data.title} subtitle={data.subtitle} disc={data.disc} img={data.bgimg} />
          </SwiperSlide>)}
    </Swiper>
  )
}
