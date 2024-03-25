import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonial.css";
import { Autoplay } from "swiper/modules";

import { testimonial } from "../Components/homedata";
export default function App() {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center py-[30px]">
        <div className="w-[90%] flex flex-col justify-center items-center gap-[20px]">
          <div className="w-[100%] flex flex-col justify-between items-center gap-[5px] lg:flex-row">
            <h1 className="w-[100%] text-[50px] lg:w-[40%]">
              We make your business stand out
            </h1>
            <p className="w-[100%] text-[20px] lg:w-[28%]">
              We work closely with our clients to know their objectives, target
              audience, unique needs, and practical design solutions.
            </p>
          </div>
          <div className="w-[100%] flex flex-col justify-between items-center gap-[15px] lg:flex-row">
            <div className="w-[100%] lg:w-[70%]">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {testimonial.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="testimonial">
                      <span className="open quote">“</span>
                      <div className="image">
                        <img src={item.img} className="m-0 p-0 max-+w-[100px] max-h-[100px] border-[10px] border-solid border-[#fff]"/>
                      </div>
                      <p className="p">{item.text}</p>
                      <div className="source">
                        <span className="span">{item.name}</span>
                      </div>
                      <span className="close quote">”</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-[100%] h-[400px] flex flex-col justify-around items-center bg-[#FFCA52] sm:w-[500px]">
              <div className="flex flex-col justify-center items-center text-[25px] text-center">
                <p>2+</p>
                <h2>Years of experience</h2>
              </div>
              <div className="flex flex-col justify-center items-center text-[25px] text-center">
                <p>50+</p>
                <h2>Successful projects</h2>
              </div>
              <div className="flex flex-col justify-center items-center text-[25px] text-center">
                <p>100%</p>
                <h2>Client satisfaction rate</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
