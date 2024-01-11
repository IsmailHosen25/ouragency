import React from 'react'
import { FaHandshake } from "react-icons/fa6";
import { BsBoxArrowInDown } from "react-icons/bs";

export default function Header() {
  return (
    <div className='min-w-[100%] min-h-[100vh] relative flex justify-end items-center'>
        <div className='w-[2px] min-h-[100%] bg-[#86A7FC] absolute top-0 left-[6%] z-[100] md:left-[5%] lg:left-[3%]'>
        </div>
        <div className='w-[94%] min-h-[90vh] relative z-[200] flex flex-col justify-start items-start gap-[30px] md:w-[95%] lg:w-[97%]'>
            <div className='flex justify-start items-center gap-[5px]'>
              <div className=' text-[30px] p-[3px] text-[#ffff] bg-[#86A7FC]'><FaHandshake /></div>
               <h1 className='text-[30px] text-[#86A7FC]'>Our Agency</h1>
            </div>
            <div className='w-[100%] pl-[5%]'>
               <div className='w-[100%] sm:w-[60%] 2xl:w-[50%]'><p className='text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px]'>We design and Build programmes</p></div>
               <div className='w-[100%] flex justify-start items-start flex-wrap-reverse sm:flex-nowrap'>
                <div className='w-[100%] flex justify-start items-center gap-[3px] text-[20px] cursor-pointer sm:w-[40%] hover:text-[#86B6F6] duration-[0.3s]'>View Our servies <BsBoxArrowInDown className='text-[#86A7FC]'/></div>
                <p className='w-[100%] text-[30px] sm:w-[50%] sm:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px]' >for the world's most ambitious brands</p>
               </div>
            </div>
        </div>
    </div>
  )
}
