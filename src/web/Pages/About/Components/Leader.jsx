import React from 'react'
import "./Leader.css"
import {leaderdata} from "../Components/aboutdata"

import { FaFacebookF,FaLinkedinIn,FaTwitter,FaInstagram } from "react-icons/fa";

export default function Leader() {
  return (
    <div className="min-w-[100%] flex flex-col justify-center items-center gap-[30px] md:gap-[40px] lg:gap-[60px]">
     <h2 className='text-[20px] sm:text-[25px] md:text-[35px] lg:text-[40px]'>Meet Our <span className='text-[#3081D0]'>Leadership</span></h2>
    <div className="w-[100%] flex justify-center items-center">
    <div className="w-[90%] flex flex-wrap justify-around items-center gap-[10px]">
        {leaderdata.map((item,i)=><div key={i} className="w-[320px] sm:w-[280px] md:w-[300px] lg:w-[320px]">
            <div className="our-team">
                <div className="team-image">
                    <img src={item.img}/>
                    <p className="description">
                        {item.description}
                    </p>
                    <ul className="social">
                        <li><a href={item.facebooklink} target=''><FaFacebookF className='w-[100%] h-[100%] flex justify-center items-center p-[8px]'/></a></li>
                        <li><a href={item.linkedinlink}><FaLinkedinIn className='w-[100%] h-[100%] flex justify-center items-center p-[8px]'/></a></li>
                        <li><a href={item.twitterlink}><FaTwitter className='w-[100%] h-[100%] flex justify-center items-center p-[8px]'/></a></li>
                        <li><a href={item.instagramlink}><FaInstagram className='w-[100%] h-[100%] flex justify-center items-center p-[8px]'/></a></li>
                    </ul>
                </div>
                <div className="team-info">
                    <h3 className="title">{item.name}</h3>
                    <span className="post">{item.post}</span>
                </div>
            </div>
        </div>)}
        
    </div>
</div>
</div>
  )
}
