import React, { useEffect } from "react";
import style from "./Work.module.css";

import Footer from "../../GlobalComponents/Footer";
import ContactForm from "../../GlobalComponents/ContactForm";

import WorkCard from "./WorkCard";

import Hero from "./Components/Hero";
import {Workdata} from "./Workdata"
export default function Work() {
  console.log(Workdata)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Hero />
      <div className={ style.work_main}>
        <h1 className={style.work_title}><span>Our</span> Some Work .</h1>
      <div className={ style.allwork}>
        {Workdata.map((item,i)=>
          <WorkCard key={i} img={item.img} title={item.title}/>
        )}
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
