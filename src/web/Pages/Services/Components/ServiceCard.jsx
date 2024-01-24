import { useFormik } from 'formik'
import React from 'react'
import style from './ServiceCard.module.css'
import * as yup from 'yup'

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
        <h1 className='text-[2.5rem] font-[700]'>{title}</h1>
        <h3 className='text-[1.7rem] font-[500]'>{subtitle}</h3>
        <p className='mt-4 text-[1.3rem] font-[500] text-justify'>{disc}</p>

      </div>
      <div className={style.btndiv}>
            <form className='flex-col center p-3' onSubmit={handleSubmit}>
              <div>
                <input type='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your email to contact' className='w-[200px] px-3 rounded-xl h-[20px] mt-2 mb-2 outline outline-2 outline-offset-2' />
              </div>
              <div>
                <p>
                  {touched.email & errors.email? <span className="text-[15px] text-[red] pl-[20px]">{errors.email}</span>:''}
                </p>
              </div>
            <button type='submit' className='px-[1rem] py-[.3rem] text-[1.5rem] font-[700] rounded-[12px] hover:bg-[green] hover:text-[white] mt-1 mb-2'>Contact to hair</button>
            </form>            
      </div>
    </div>
  )
}
