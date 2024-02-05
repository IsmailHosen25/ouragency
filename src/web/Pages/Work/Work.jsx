import React from 'react'
import Footer from '../../GlobalComponents/Footer'
import ContactForm from '../../GlobalComponents/ContactForm'

import WorkCard from './WorkCard'

import Hero from './Components/Hero'


export default function Work() {
  return (
    <div>

      <WorkCard />

      <Hero/>

      <ContactForm/>
      <Footer/>
    </div>
  )
}
