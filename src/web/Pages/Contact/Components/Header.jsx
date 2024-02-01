import React from 'react'
import style from './Header.module.css'
import { FaHouse, FaPhone } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import ContactForm from '../../../GlobalComponents/ContactForm';

export default function Header() {
  return (
    <div className={style.container}>
        <div className={style.headertop}>
            <h1 className='ml-[10%]'>Contact Us</h1>
        </div>
        <div className={style.headermid}>
            <div className={style.midleft}>
                <div className={style.mlcontact}>
                    <div className={style.contoption}>
                        <div className={style.cont1}>
                            <div className='text-[#8EA097]'><FaHouse/></div>
                            <div>
                                <h1>Address</h1>
                            </div>
                        </div>
                        <div className={style.cont2}>
                            <h1>38/b Haji Brother's road, Jamtola, Chashara, Narayanganj</h1>
                        </div>
                    </div>

                    <div className={style.contoption}>
                        <div className={style.cont1}>
                            <div className='text-[#8EA097]'><FaPhone /></div>
                            <div>
                                <h1>Get in Touch</h1>
                            </div>
                        </div>
                        <div className={style.cont2}>
                            <h1>(+880) 1905493909</h1>
                            <h1>rafisharkar144@gmail.com</h1>
                        </div>
                    </div>

                    <div className={style.contoption}>
                        <div className={style.cont1}>
                            <div className='text-[#8EA097]'><FaCalendarAlt /></div>
                            <div>
                                <h1>Hours</h1>
                            </div>
                        </div>
                            <div className={style.cont2}>
                                <div>
                                        <p>Mon to Fri 7:30am - 1:00am</p>
                                        <p>Sat 9:00am - 1:00am</p>
                                        <p>Sun 7:30am - 11:30pm</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            {/* <div className={style.midright}> */}
            {/* </div> */}
        </div>
    </div>
  )
}
