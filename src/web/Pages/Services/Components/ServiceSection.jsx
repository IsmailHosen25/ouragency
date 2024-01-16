import React, { useState } from 'react'
import style from './ServiceSection.module.css'
import ServiceCard from './ServiceCard'
import { ServiceCC, ServiceDA,ServiceDM, ServiceWeb } from '../data'

export default function ServiceSection() {
  const [catagory, setCatagory]=useState('web')
  return (
    <div className={style.main}>
      <h1 className='text-[4rem] font-[400] pb-[1.5rem]'>Service</h1>
      <div className={style.optiondiv}>
        <div className='border-r-[1px] border-[#000] rounded-tl-[.8rem] rounded-bl-[.8rem]' onClick={()=>setCatagory('web')}>Web Dev</div>
        <div className='border-r-[1px] border-[#000]' onClick={()=>setCatagory('da')}>Data Analysis</div>
        <div className='border-r-[1px] border-[#000]' onClick={()=>setCatagory('dm')}>Digital Marketing</div>
        <div className='rounded-tr-[1rem] rounded-br-[1rem]' onClick={()=>setCatagory('cc')}>Content Creation</div>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-[3rem]'>
        {catagory==='web'? ServiceWeb.map((data,i)=><ServiceCard title={data.title} subtitle={data.subtitle} disc={data.disc} img={data.img}/>):''}
        {catagory==='dm'? ServiceDM.map((data,i)=><ServiceCard title={data.title} subtitle={data.subtitle} disc={data.disc} img={data.img}/>):''}
        {catagory==='da'? ServiceDA.map((data,i)=><ServiceCard title={data.title} subtitle={data.subtitle} disc={data.disc} img={data.img}/>):''}
        {catagory==='cc'? ServiceCC.map((data,i)=><ServiceCard title={data.title} subtitle={data.subtitle} disc={data.disc} img={data.img}/>):''}
      </div>
    </div>
  )
}
