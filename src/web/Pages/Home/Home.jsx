import React from 'react'
import Header from './Components/Header'
import Footer from '../../GlobalComponents/Footer'
import  Skills from "./Components/Skill/Skills"
import Testimonial from "./Components/Testimonial"
import ContactForm from '../../GlobalComponents/ContactForm'
import Nav from '../../GlobalComponents/Nav'
export default function Home() {

  return (<>
    <div className='min-w-[100%] overflow-x-hidden'>
      <div className='min-w-[100%] h-[100vh]'>
        {/* <Nav/> */}
       <Header/>
       < Skills/>
       <Testimonial/>
       <ContactForm/>
       <Footer/>
      </div>
    </div>
    </>
  )
}
