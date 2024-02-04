import React from 'react'
import style from './Btn1.module.css'
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Btn1() {
  return (
    <div>
      <div className={style.wrapper}>
        <input type="text" placeholder="Enter your email" className={style.input}/>
        <button className={style.btn}>
           <IoArrowForwardSharp className='text-[white] text-[30px]'/>
        </button>
    </div>
    </div>
  )
}
