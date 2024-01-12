import React, { useState } from "react";
import style from "./ContactForm.module.css";

import { useFormik } from "formik";
import  * as yup from "yup"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaTelegramPlane,
  FaMapMarkedAlt,
  FaPhoneAlt
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import shape from "../../assets/shape.png"

export default function ContactForm() {
  const [contact,setcontact]=useState(true)
  const {values,handleChange,handleBlur,errors,handleSubmit,touched}=useFormik({
    initialValues:{
       name:"",
       email:"",
       number:"",
       message:""
    },validationSchema:yup.object({
     name:yup.string().min(2).required("Name is required"),
     email:yup.string().email(),
     message:yup.string().min(5).required("Message is required")
    })
    ,onSubmit:(values)=>{
      if(values.email || values.number){
        toast.success(`Thank You ${values.name}❤️`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setTimeout(()=>window.location.reload(false),5500)
      }
      else{
        setcontact(false)
        
      }

  
    }
 })

  return (
    <div className="min-w-[100%] flex flex-col justify-center items-center py-[20px]">
      <h2 className="w-[80%] text-[25px] flex justify-end items-center gap-[5px] sm:text-[30px]"> <span className='w-[40%] bg-[#000] border-[1px] border-solid border-[#000]'></span>Contact Us</h2>
    <div className="w-[100%] relative z-[100] flex justify-center items-center">
      <div className={`${style.container} min-w-[100%]`}>
        <span className={`${style.big_circle}`}></span>
        <img src={shape} className={`${style.square}`} />
        <div className={`${style.form}`}>
          <div className={`${style.contact_info}`}>
            <h3 className={`${style.title}`}>Let's get in touch</h3>
            <p className={`${style.text}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className={`${style.info}`}>
              <div className={`${style.information}`}>
                <FaMapMarkedAlt className={`${style.icon}`} />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className={`${style.information}`}>
                <MdEmail className={`${style.icon}`} />
                <p>lorem@ipsum.com</p>
              </div>
              <div className={`${style.information}`}>
                <FaPhoneAlt className={`${style.icon}`} />
                <p>123-456-789</p>
              </div>
            </div>

            <div className={`${style.social_media}`}>
              <p>Connect with us :</p>
              <div className={`${style.social_icons}`}>
                <a
                  href="#"
                  className="flex justify-center items-center text-[30px]"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center text-[30px]"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center text-[30px]"
                >
                  <FaTwitterSquare />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center text-[30px]"
                >
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </div>

          <div className={`${style.contact_form}`}>
            <span className={`${style.circle} ${style.one}`}></span>
            <span className={`${style.circle} ${style.two}`}></span>

            <form onSubmit={handleSubmit}>
              <h3 className={`${style.title}`}>Contact us</h3>
              <div className={`${style.input_container}`}>
                <input type="text" name="name" className={`${style.input}`} value={values.name} onBlur={handleBlur} onChange={handleChange} placeholder="Name"/>
                {touched.name && errors.name? <span className="text-[15px] text-[red] pl-[20px]">{errors.name}</span>:""}
              </div>
              <div className={`${style.input_container}`}>
                <input type="email" name="email" className={`${style.input}`} value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder="xyz@gmail.com"/>
                { errors.email? <span className="text-[15px] text-[red] pl-[20px]">{errors.email}</span>:contact?"":<span className="text-[15px] text-[red] pl-[20px]">Email or Number is required</span>}
              </div>
              <div className={`${style.input_container}`}>
                <input type="tel" name="number" className={`${style.input}`} value={values.number} onBlur={handleBlur} onChange={handleChange} placeholder="01XXX NNNNNN"/>
                {errors.number? <span className="text-[15px] text-[red] pl-[20px]">{errors.number}</span>:contact?"":<span className="text-[15px] text-[red] pl-[20px]">Email or Number is required</span>}
              </div>
              <div className={`${style.input_container} ${style.textarea}`} value={values.message} onBlur={handleBlur} onChange={handleChange} >
                <textarea name="message" className={`${style.input}`} placeholder="Message"></textarea>
                {touched.message && errors.message? <span className="text-[15px] text-[red] pl-[20px]">{errors.message}</span>:""}
              </div>
              <input type="submit" className={`${style.btn}`} value="Send"/>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  </div>
  );
}
