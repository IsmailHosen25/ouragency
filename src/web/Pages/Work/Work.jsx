import React, {useEffect } from 'react';
import  "./Work.css";
import { Parallax, Background } from 'react-parallax';
import Footer from "../../GlobalComponents/Footer";
import ContactForm from "../../GlobalComponents/ContactForm";
import img1 from "../../../assets/Work_Card_01.png"

import WorkCard from "./WorkCard";

import Hero from "./Components/Hero";

export default function Work() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div>
      <Hero />
      <Parallax blur={3} bgImage={img1} strength={200}>
        <WorkCard/>
    </Parallax>
    <Parallax blur={10} bgImage={img1} strength={200}>
        <WorkCard/>
    </Parallax>
    <Parallax blur={10} bgImage={img1} strength={200}>
        <WorkCard/>
    </Parallax>
      {/* <div className="swiper_div">
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
      </div> */}
      <ContactForm />
      <Footer />
    </div>
  );
}
