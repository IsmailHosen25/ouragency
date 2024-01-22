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
        <div className={`${catagory==='web'? 'bg-[#5562EA] text-white':''}`} onClick={()=>setCatagory('web')}>Web Dev</div>
        <div className={`${catagory==='da'? 'bg-[#5562EA] text-white':''}`} onClick={()=>setCatagory('da')}>Data Analysis</div>
        <div className={`${catagory==='dm'? 'bg-[#5562EA] text-white':''}`} onClick={()=>setCatagory('dm')}>Digital Marketing</div>
        <div className={`${catagory==='cc'? 'bg-[#5562EA] text-white':''}`} onClick={()=>setCatagory('cc')}>Content Creation</div>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-[3rem]'>
        {catagory==='web'? ServiceWeb.map((data,i)=><ServiceCard key={i} title={data.title} subtitle={data.subtitle} disc={data.disc} img={data.img}/>):''}
        {catagory==='dm'? ServiceDM.map((data,i)=><ServiceCard key={i} title={data.title} subtitle={data.subtitle} disc={data.disc} img={data.img}/>):''}
        {catagory==='da'? ServiceDA.map((data,i)=><ServiceCard key={i} title={data.title} subtitle={data.subtitle} disc={data.disc} img={data.img}/>):''}
        {catagory==='cc'? ServiceCC.map((data,i)=><ServiceCard key={i} title={data.title} subtitle={data.subtitle} disc={data.disc} img={data.img}/>):''}
      </div>
    </div>
  )
}
