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
      <div className={style.imgdiv}><img src={img} alt='Image is not found' /></div>
      <div className={style.textdiv}>
        <h1 className='text-[25px] font-[700]'>{title}</h1>
        <h3 className='text-[17px] font-[500]'>{subtitle}</h3>
        <p className='mt-4 text-[13px] font-[500] text-justify'>{disc}</p>

      </div>
      <div className={style.btndiv}>
        <Btn1/>
      </div>
    </div>
  )
}
