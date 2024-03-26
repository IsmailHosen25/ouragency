import React,{useEffect} from 'react'
import Header from './Components/Header'
import Footer from '../../GlobalComponents/Footer'
import  Skills from "./Components/Skill/Skills"
import Testimonial from "./Components/Testimonial"
import ContactForm from '../../GlobalComponents/ContactForm'
export default function Home() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])

  return (<>
    {/* <div className='min-w-[100%] overflow-x-hidden'>
      <div className='min-w-[100%] h-[100vh]'> */}
       <Header/>
       < Skills/>
       <Testimonial/>
       <ContactForm/>
       <Footer/>
      {/* </div>
    </div> */}
    </>
  )
}
