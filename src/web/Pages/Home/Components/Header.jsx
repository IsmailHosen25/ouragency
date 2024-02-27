import React from "react";
import style from "./Header.module.css"
import {motion} from "framer-motion"
import { FaHandshake } from "react-icons/fa6";
import design from "../../../../assets/design.png";
import prog1 from "../../../../assets/prog1.png";
import prog2 from "../../../../assets/prog2.png";
import prog3 from "../../../../assets/prog3.png";
import hammer from "../../../../assets/hammer.png";
import win from "../../../../assets/win.png";
import world from "../../../../assets/world.png";
import airballon from "../../../../assets/hot_air_balloon.png"
import rocket from "../../../../assets/rocket.png"

export default function Header() {


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      }
    }
  };
  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };


  return (
    <div className="min-w-[100%] min-h-[100vh] relative flex justify-end items-center">
      <div className="w-[94%] min-h-[90vh] relative z-[200] flex flex-col justify-start items-start gap-[30px] md:w-[95%] lg:w-[97%]">
        <div className="flex justify-start items-center gap-[5px]">
          <div className=" text-[30px] p-[3px] text-[#ffff] bg-[#18B898]">
            <FaHandshake />
          </div>
          <h1 className="text-[30px] text-[#18B898]">Our Agency</h1>
        </div>
        <motion.div 
          variants={container}
          initial={"hidden"}
          animate={"visible"}
        className="w-[100%] h-[80vh] flex flex-col gap-[10px] justify-center items-center sm:gap-[65px] md:gap-[30px] lg:pl-[30px] lg:gap-[10px]">
          <motion.div
           variants={item}
           className="w-[100%] flex flex-wrap justify-start items-center">
            <div className="w-[auto] text-[20px] flex flex-wrap justify-center items-center sm:text-[40px] lg:text-[40px] xl:text-[60px]">
              <p>We design</p>
              <img className="h-[45px] mb-[15px]" src={design} />
              and build
              <img className="h-[45px] mb-[15px]" src={hammer} />
              <span className="text-[#7FC7D9]">programmes</span>
            </div>
            <div
             className="hidden justify-center items-center relative left-[32%] top-[30%]  lg:flex lg:left-0 lg:top-[0%] lg:ml-[5px]">
              <img
                className="absolute left-0 min-w-[40px] h-[40px] xl:min-w-[50px] xl:h-[50px] bg-white p-[3px] border-[3px]  border-solid border-[#86A7FC]  rounded-md"
                src={prog1}
              />
              <img
                className=" absolute left-[30px] min-w-[40px] h-[40px] xl:min-w-[50px] xl:h-[50px] bg-white p-[3px]  border-[3px]  border-solid border-[#86A7FC] rounded-md outline-[3px] outline outline-[#fff]"
                src={prog2}
              />
              <img
                className="absolute left-[65px] min-w-[40px] h-[40px] xl:min-w-[50px] xl:h-[50px] bg-white p-[3px]  border-[3px]  border-solid border-[#86A7FC] rounded-md outline-[3px] outline outline-[#fff]"
                src={prog3}
              />
            </div>
          </motion.div>
          <motion.div 
          variants={item}
          className="w-[100%] flex justify-start items-center">
            <p className="text-[20px] flex flex-wrap justify-center items-center sm:text-[40px] lg:text-[35px]">
              for the world's
              <img
                className="h-[55px] mb-[5px] ml-[5px] mr-[5px]"
                src={world}
              />
              most <span className="text-[#7FC7D9]">&nbsp; ambitious</span>
              <img className="h-[55px] mb-[5px] ml-[5px] mr-[5px]" src={win} />
              <span className="text-[#7FC7D9]">brands</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="hidden absolute bottom-0 w-[100%] lg:block">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.1" d="M0,192L0,32L60,32L60,160L120,160L120,64L180,64L180,32L240,32L240,224L300,224L300,96L360,96L360,224L420,224L420,128L480,128L480,192L540,192L540,96L600,96L600,192L660,192L660,256L720,256L720,288L780,288L780,96L840,96L840,96L900,96L900,128L960,128L960,32L1020,32L1020,288L1080,288L1080,160L1140,160L1140,192L1200,192L1200,32L1260,32L1260,192L1320,192L1320,256L1380,256L1380,96L1440,96L1440,320L1380,320L1380,320L1320,320L1320,320L1260,320L1260,320L1200,320L1200,320L1140,320L1140,320L1080,320L1080,320L1020,320L1020,320L960,320L960,320L900,320L900,320L840,320L840,320L780,320L780,320L720,320L720,320L660,320L660,320L600,320L600,320L540,320L540,320L480,320L480,320L420,320L420,320L360,320L360,320L300,320L300,320L240,320L240,320L180,320L180,320L120,320L120,320L60,320L60,320L0,320L0,320Z"></path></svg>
      </div>
      <div className={style.airballon}>
          <img  className="w-[80px] h-[80px]" src={airballon}/>
      </div>
      <div className={style.rocket}>
          <img  className="w-[90px] h-[90px]" src={rocket}/>
      </div>
    </div>
  );
}
