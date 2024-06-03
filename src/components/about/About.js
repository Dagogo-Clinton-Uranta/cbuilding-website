import React from 'react'
import './about.css'
import ME from '../../assets/aboutpic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Us</h2>
      

      <div className="container about__container">
      
       <div className="about__me">

       <div className="about__me-image">
        <img src={ME} className="about__me-image-pic" alt="About Image"/>
       </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icon'/>
           <h5>Experience</h5>
           <small>20 Years Combined Working Experience</small>
          </article>
         
          <article className='about__card'>
          <FiUsers className='about__icon'/>
           <h5>Clients</h5>
           <small>200+ UK clients </small>
          </article>

          <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
           <h5>Projects</h5>
           <small>250+ Completed Building Works</small>
          </article>
        </div>

        <p>We at C-Building pride ourselves in creating stuctures to the highest standards. We leave no stone unturned when it comes to what we can deliver, both in terms of quality and cost. We follow building standard ISO-9001 as is required by UK law, and all our workers are certified under the builders regulation certification. We guarantee that once you use our services,
           you'll notice the difference! If you like what you see do not hesitate to contact us!     </p>
      
       <div className='ctaButton'>
       <a href="#contact" className="btn btn-primary">Let's Talk</a>
       </div>
      
      </div>




      </div>

      
      </section>
  )
}

export default About