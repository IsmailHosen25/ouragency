import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

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
    modules={[Navigation, Pagination, A11y, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{delay:7000, disableOnInteraction: true}}
    pagination={{ clickable: true }}
    >
        {headerdata.map((data,i)=><SwiperSlide key={i}>
            <HeaderDev title={data.title} subtitle={data.subtitle} disc={data.disc} img={data.bgimg} />
          </SwiperSlide>)}
    </Swiper>
  )
}
