import React from 'react'
//jsx files are for emmet shortcux, not js
import Header from '../components/header/Header.jsx'
import './Homepage.css'
import Nav from '../components/nav/Nav.js'
import About from '../components/about/About.js'
import Experience from '../components/experience/Experience.js'
import Services from '../components/services/Services.js'
import Portfolio from '../components/portfolio/Portfolio.js'
import Contact from '../components/contact/Contact.js'
import Testimonials from '../components/testimonials/Testimonials.js'
import Footer from '../components/footer/Footer.js'



const Homepage = () => {

  return (
    <>
    <Header className="header-margin-bottom" />
    <Nav/>
    
    <Experience />
    <About />
    <Portfolio/>
    
    <Services/>
   
    <Testimonials />
    <Contact />
    

    <Footer/>
    
    
    </>
  )
}

export default Homepage