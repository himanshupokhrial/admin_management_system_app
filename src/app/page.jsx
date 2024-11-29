import React from 'react'
import Navbar from './components/Navbar'
import Centre from './components/Centre'
import Cards from './components/Cards'
import AboutSection from './components/AboutSection'
import './index.css'
import Footer from './components/Footer'

const page = () => {
  return (
    <main>
      <Centre/>
      <Cards/>
      <AboutSection/>
      <Footer/>
   </main>
  )
}

export default page