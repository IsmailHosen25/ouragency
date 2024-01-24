import React from 'react'
import style from './InfinitySlider.module.css'
import { icons } from '../data'

export default function InfinitySlider() {
  return (
    <div className={style.mdiv}>
      <div className={style.iconSlide}>
          {icons.map((icon,i)=> <img src={icon.img} key={i}/>)}
          {icons.map((icon,i)=> <img src={icon.img} key={i}/>)}
      </div>
    </div>
  )
}
