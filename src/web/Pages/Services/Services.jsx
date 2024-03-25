import { useRef } from "react";
import HeaderSlider from "./Components/HeaderSlider";
import ContactForm from '../../GlobalComponents/ContactForm'
import Footer from '../../GlobalComponents/Footer'
import InfinitySlider from "./Components/InfinitySlider";
import ServiceSection from "./Components/ServiceSection";

export default function Services() {
  const service_section=useRef()
  const scrollservice=(service_section)=>{
    window.scrollTo({top:service_section.pageY*2,behavior:"smooth"})
    console.log(service_section)
  }
  return (
    <>
      <div>
        <HeaderSlider click={scrollservice}/>
        <InfinitySlider/>
        <div ref={service_section}>
          <ServiceSection />
        </div>
        <ContactForm />
        <Footer />
      </div>
    </>
    
  )
}

