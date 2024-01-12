import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Nav.module.css"

import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { MdContactMail,MdMiscellaneousServices,MdDesignServices } from "react-icons/md";

export default function Nav() {
  return (
    <>
    <div className='fixed top-[35%] right-[0%] min-h-[100vh] bg-transparent z-[1000]'>
      <div className='flex flex-col justify-center items-center gap-[5px] relative'>
         <div className={`flex justify-center items-center relative bg-[#fff] ${styles.haha}`}>
          <Link to="/" className={styles.linkicons}><FaHome /></Link>
          <div className={styles.linktitle}>Home</div>
         </div>
         <div className={`flex justify-center items-center bg-[#fff] ${styles.haha}`}>
          <Link to="/work" className={styles.linkicons}><MdDesignServices/></Link>
          <div className={styles.linktitle}>Work</div>
         </div>
         <div className={`flex justify-center items-center bg-[#fff] ${styles.haha}`}>
          <Link to="/services" className={styles.linkicons}><MdMiscellaneousServices/></Link>
          <div className={styles.linktitle}>Services</div>
         </div>
         <div className={`flex justify-center items-center bg-[#fff] ${styles.haha}`}>
          <Link to="/about" className={styles.linkicons}><SiAboutdotme /></Link>
          <div className={styles.linktitle}>About</div>
         </div>
         <div className={`flex justify-center items-center bg-[#fff] ${styles.haha}`}>
          <Link to="/contact" className={styles.linkicons}><MdContactMail /></Link>
          <div className={styles.linktitle}>Contact</div>
         </div>

      </div>
    </div>
    </>
  )
}
