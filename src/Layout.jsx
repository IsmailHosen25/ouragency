import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Nav from './web/GlobalComponents/Nav'
import Home from "./web/Pages/Home/Home"
import About from "./web/Pages/About/About"
import Work from "./web/Pages/Work/Work"
import Services from "./web/Pages/Services/Services"
import Contact from "./web/Pages/Contact/Contact"
import Privacy_policy from "./web/GlobalComponents/Privacy_policy"
import Terms from './web/GlobalComponents/Terms'
export default function Layout() {
  return (
    <>
     <Nav/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/work' element={<Work/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/privacypolicy' element={<Privacy_policy/>}/>
       <Route path='/terms' element={<Terms/>}/>
     </Routes>
     
    </>
  )
}
