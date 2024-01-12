import React from 'react'
import img1 from "../../../../assets/browser.png"
import img2 from "../../../../assets/digital-marketing.png"
import img3 from "../../../../assets/stock.png"
import img4 from "../../../../assets/camera.png"
export default function Head() {
  return (
    <div className='min-w-[100%] flex flex-col justify-center items-center '>
     <div className='w-[100%] flex justify-center items-center bg-[#EEF5FF] pt-[30px]'>
        <div className='w-[90%] flex flex-col justify-between items-center gap-[20px] md:flex-row'>
          <div className='w-[100%]'>
            <h1 className='flex justify-start items-center gap-[5px]'>About Us <span className='w-[100px] bg-[#000] border-[1px] border-solid border-[#000]'></span></h1>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vel aspernatur culpa quam, officia illo. Facilis, ipsa. Rerum earum voluptate voluptatibus ut odit dolores odio libero! Voluptas ipsam nostrum consequatur?</p>
           <h1 className='text-[25px] text-[#5FBDFF]'>Our Agency.</h1>
          </div>
          <div className='w-[100%] flex flex-col justify-center items-center pb-[20px]'>
            <div className='w-[100%] flex justify-end items-center gap-[5px] relative'>
                <img className='w-[30%] border-[2px] border-solid border-[#000] rounded-lg rotate-[-8deg] absolute right-[45%]' src={img3}/>
                <img className='w-[30%] border-[2px] border-solid border-[#000] rounded-lg ' src={img4}/>
            </div>
            <div className='w-[100%] flex justify-end items-center gap-[5px]'>
               <img className='w-[30%] border-[2px] border-solid border-[#000] rounded-lg' src={img1}/>
               <img className='w-[30%] border-[2px] border-solid border-[#000] rounded-lg' src={img2}/>
            </div>
          </div>
        </div>
     </div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EEF5FF" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,90.7C384,85,480,43,576,37.3C672,32,768,64,864,85.3C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
  )
}
