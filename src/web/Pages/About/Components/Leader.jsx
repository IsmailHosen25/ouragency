import React from 'react'
import style from "./Leader.module.css"
import {leaderdata} from "../Components/aboutdata"

import { FaFacebookF,FaLinkedinIn,FaTwitter,FaInstagram } from "react-icons/fa";

export default function Leader() {
  return (
    <div className="min-w-[100%] flex flex-col justify-center items-center gap-[30px] md:gap-[40px] lg:gap-[60px]">
     <h2 className='text-[20px] sm:text-[25px] md:text-[35px] lg:text-[40px] font-semibold uppercase'>Meet Our <span className='text-[#3081D0]'>Leadership</span></h2>
    <div className="w-[100%] flex justify-center items-center">
    <div className="w-[90%] flex flex-wrap justify-around items-center gap-[10px]">
        {leaderdata.map((item,i)=><div key={i} className="w-[320px] sm:w-[280px] md:w-[300px] lg:w-[320px]">
            <div className={style.our_team}>
                <div className={style.team_image}>
                    <img src={item.img}/>
                    <p className={style.description}>
                        {item.description}
                    </p>
                    <ul className={style.social}>
                        <li className={style.li}><a href={item.facebooklink} target="_blank" className={style.a} ><FaFacebookF className='text-[#0866FF] w-[100%] h-[100%] flex justify-center items-center p-[8px]'/></a></li>
                        <li  className={style.li}><a href={item.linkedinlink} target="_blank" className={style.a}><FaLinkedinIn className='text-[#0A66C2] w-[100%] h-[100%] flex justify-center items-center p-[8px]'/></a></li>
                        <li  className={style.li}><a href={item.twitterlink} target="_blank" className={style.a}><FaTwitter className='text-[#1C96E8] w-[100%] h-[100%] flex justify-center items-center p-[8px]'/></a></li>
                        <li  className={style.li}><a href={item.instagramlink} target="_blank" className={style.a}><FaInstagram className='text-[#EE1900] w-[100%] h-[100%] flex justify-center items-center p-[8px]'/></a></li>
                    </ul>
                </div>
                <div className={style.team_info}>
                    <h3 className={style.title}>{item.name}</h3>
                    <span className={style.post}>{item.post}</span>
                </div>
            </div>
        </div>)}
        
    </div>
</div>
</div>
  )
}
