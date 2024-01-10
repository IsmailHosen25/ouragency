import React from 'react'
import Header from './Components/Header'
import Footer from '../../GlobalComponents/Footer'
export default function Home() {

  return (<>
    <div className='min-w-[100%]'>
      <div className='min-w-[100%] h-[100vh]'>
       <Header/>
       <Footer/>
      </div>
    </div>
    </>
  )
}
