import HeaderSlider from "./Components/HeaderSlider";
import ContactForm from '../../GlobalComponents/ContactForm'
import Footer from '../../GlobalComponents/Footer'
import InfinitySlider from "./Components/InfinitySlider";

export default function Services() {
  return (
    <>
      <div className="relative z-[100]">
        <HeaderSlider/>
        <InfinitySlider/>
        <ContactForm />
        <Footer />
      </div>
    </>
    
  )
}

