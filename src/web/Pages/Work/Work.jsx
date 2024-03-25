import React, { useRef, useState } from 'react';
import  "./Work.css";
import Footer from "../../GlobalComponents/Footer";
import ContactForm from "../../GlobalComponents/ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import WorkCard from "./WorkCard";

import Hero from "./Components/Hero";

export default function Work() {

  return (
    <div>
      <Hero />
      <div className="swiper_div">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper_work"
      >
        <SwiperSlide><WorkCard/></SwiperSlide>
        <SwiperSlide><WorkCard/></SwiperSlide>
        <SwiperSlide><WorkCard/></SwiperSlide>
        <SwiperSlide><WorkCard/></SwiperSlide>
        <SwiperSlide><WorkCard/></SwiperSlide>
        <SwiperSlide><WorkCard/></SwiperSlide>
      </Swiper>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
