import React from 'react'
import style from './WorkCard.module.css'
import img1 from '../../../assets/Work_Card_01.png'
import img2 from '../../../assets/Work_Card_02.png'

export default function WorkCard() {
  return (
    <div className={style.main}>
    <div className={style.container}>
        <div className={style.card}>
        <div className={style.cardimg}>
            <img src={img1} />
        </div>
        <div className={style.cardtext}>
            <span className={style.texttitle}>
                    <h1 className={style.title}>Our Agency</h1>
            </span>
        <div className={style.textdisc}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit nisi est eligendi perspiciatis dolor odio enim ipsa iste fugiat. Incidunt omnis tenetur alias ipsum, reiciendis cum laborum suscipit eligendi provident dolores amet, iure sequi rerum quos reprehenderit voluptatibus ex?
            </p>
        </div>
        </div>
        </div>
        <div className={style.card2}>
            <img src={img2} alt='Not found'/>
        </div>
    </div>
    </div>
  )
}
