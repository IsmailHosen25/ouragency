import React,{useEffect} from 'react'
import Footer from '../../GlobalComponents/Footer'
import ContactForm from "../../GlobalComponents/ContactForm"
import Head from './Components/Head'
import Leader from './Components/Leader'
import Team from './Components/Team'
export default function About() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div>
      <Head/>
      <Leader/>
      <Team/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
