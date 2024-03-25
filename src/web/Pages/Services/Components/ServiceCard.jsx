import { useFormik } from 'formik'
import React from 'react'
import style from './ServiceCard.module.css'
import * as yup from 'yup'
import Btn1 from './Btn1'

export default function ServiceCard({title, subtitle, disc, img}) {

  const {handleChange, values, errors, handleSubmit, handleBlur, touched} = useFormik({
    initialValues:{
      email: '',
    },
    validationSchema:{
      email: yup.string().email().required("fill the email"),
    },
    onSubmit:()=>{
      console.log(values)
    }
  })
  return (
    <div className={style.main}>
      <div className={style.card}>
             <div className={style.card_info}>
                 <h1>{title}</h1>
                 <p>{disc}</p>
                 <div className={style.card_input}>
                    <Btn1/>
                 </div>
             </div>
             <div className={style.img}>
                <img src={img} className={style.img_tag}/>
             </div>
      </div>
   </div>
  )
}
