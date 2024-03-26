import React,{useEffect} from 'react'
import Footer from '../../GlobalComponents/Footer'
import ContactForm from '../../GlobalComponents/ContactForm'
import Header from './Components/Header'
export default function Contact() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div>
      <Header />
      <ContactForm/>
      <Footer/>
    </div>
  )
}
