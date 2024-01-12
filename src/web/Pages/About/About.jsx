import React from 'react'
import Footer from '../../GlobalComponents/Footer'
import ContactForm from "../../GlobalComponents/ContactForm"
import Head from './Components/Head'
import Leader from './Components/Leader'
import Team from './Components/Team'
export default function About() {
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
