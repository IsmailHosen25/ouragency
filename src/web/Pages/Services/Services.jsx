import HeaderSlider from "./Components/HeaderSlider";
import ContactForm from '../../GlobalComponents/ContactForm'
import Footer from '../../GlobalComponents/Footer'
import InfinitySlider from "./Components/InfinitySlider";
import ServiceSection from "./Components/ServiceSection";

export default function Services() {
  return (
    <>
      <div>
        <HeaderSlider/>
        <InfinitySlider/>
        <ServiceSection />
        <ContactForm />
        <Footer />
      </div>
    </>
    
  )
}

