import React from "react";
import style from "./WorkCard.module.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FiMinimize2 } from "react-icons/fi";

export default function WorkCard({img,title}) {
  return (

<div className={style.browser_frame}>
  <div className={style.browser_controls}>
    
    <div className={style.window_controls}>
      <span className={style.close}></span>
      <span className={style.minimise}></span>
      <span className={style.maximise}></span>
    </div>
    
    <div className={style.page_controls}>
      <span className={`${style.back} ${style.white_container}`}><FaChevronLeft /></span>
      <span className={`${style.next} ${style.white_container}`}><FaChevronRight /></span>
    </div>
    
    <span className={`${style.white_container} ${style.url_bar}`}>
    {title}
    </span>
    
    <span className={`${style.full_screen} ${style.white_container}`}><FiMinimize2 /></span>
    
  </div>
  <img src={img} />
</div>

    // <div classNameName={style.main}>
    //   <div classNameName={style.container}>
    //     <div classNameName={style.card}>
    //       <div classNameName={style.cardimg}>
    //         <img classNameName={style.cardmain_img} src={img1} />
    //       </div>
    //       <div classNameName={style.cardtext}>
    //         <span classNameName={style.texttitle}>
    //           <h1 classNameName={style.title}>Our Agency</h1>
    //         </span>
    //         <div classNameName={style.textdisc}>
    //           <p>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //             Explicabo fugit nisi est eligendi perspiciatis dolor odio enim
    //             ipsa iste fugiat.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
        // {/* <div classNameName={style.card2}>
        //   <img src={img2} alt="Not found" />
        // </div> */}
    //   {/* </div>
    // </div> */}
  );
}
