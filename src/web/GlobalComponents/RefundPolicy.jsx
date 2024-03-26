import React,{useEffect} from 'react'
import Footer from './Footer'
export default function RefundPolicy() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div className="w-[100%] flex flex-col justify-center items-start">
      <div className="w-[100%] relative flex justify-center items-center">
        <div className="w-[100%] absolute top-0 left-0 z-[10]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F3F3F6"
              fill-opacity="1"
              d="M0,288L48,282.7C96,277,192,267,288,240C384,213,480,171,576,138.7C672,107,768,85,864,106.7C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="w-[85%] relative z-[100] pt-[20px] md:pt-[25px] lg:pt-[80px]">
          <div>
            <h2 className="text-[#18B898] text-[20px]">Our Agency</h2>
            <h1 className="text-[25px] text-[#FF4935]">REFUND POLICY</h1>
          </div>
          <div className="pt-[30px] flex flex-col justify-start items-start gap-[25px] md:pt-[45px]">
            <div>
              <div className="flex flex-col justify-start items-start gap-[10px]">
                <p className='text-[#0A1D56] text-[20px] font-[500] pb-[5px]'>
                Website Design Started @ Rs. 3500 - Free Domain - Free Hosting - Free Business Email Ids | Kolkata's No 1 Website Design & Development Company
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[#0A1D56] text-[30px] font-[500] pb-[5px]">STANDARD REFUND TERMS</h2>
              <div className="flex flex-col justify-start items-start gap-[10px]">
                <p>
                This Policy is given in the English language. To the degree any interpretation is given to you, it is accommodated comfort purposes just, and in case of any contention between the English and deciphered adaptation, the English variant will control and win.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[#0A1D56] text-[30px] font-[500] pb-[5px]">
                Refund Policy
              </h2>
              <div className="flex flex-col justify-start items-start gap-[10px]">
                <p>
                The cancellation only becomes effective in accordance with the time chosen by the Customer through the Cancellation process. Cancellation requests must be submitted at least 24 hours prior to the end of the money-back guarantee.
                </p>
                <p>
                Once a cancellation request is submitted, the customer’s account will be suspended either immediately or at the end of the service billing period depending on the customer’s decision during the cancellation process. Once a request has been completed, the customer’s account will be terminated and no copy will be kept.
                </p>
                <p>
                A refund to the original method of payment can be requested only on the first service purchased by the customer. If the customer decides to request a refund for any service purchased after the first purchase, a refund can only be made as credits to the customer’s account at our sole decision. We do not refund guarantee for non-first service purchased by the customer and such requests are dealt on a case-by-case basis only.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[#0A1D56] text-[30px] font-[500] pb-[5px]">Exception for Advance (Partial) Payments</h2>
              <div className="flex flex-col justify-start items-start gap-[10px]">
                <p>
                The 50% deposit of advance paid is only refundable, if we have not booked the domain, hosted & put the basic design, within 5 days of order being placed for silver, gold & customized plans.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[#0A1D56] text-[30px] font-[500] pb-[5px]">Refund Policy for Second (Full) Payment</h2>
              <div className="flex flex-col justify-start items-start gap-[10px]">
                <p>
                Standsweb just gathers rest (balance) half of the subsequent installment post effective finish of work and such installments are non-refundable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
         <Footer/>
      </div>
    </div>
  )
}
