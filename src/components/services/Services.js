import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>Our Process For</h5>
    <h2>Onboarding</h2>

    <div className="container services__container ">
      <article className="service">
        <div className="service__head">
          <h3>Getting Started</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>We provide you a quote</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>We plan our Designs and  Calculations based on customer needs </p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>We source the most cost-effective materials</p>
          </li>
          {/*<li>
            <BiCheck className='service__list-icon'/>
            <p>General website theming and consistency </p>
          </li>*/}
         
        </ul>
      </article>
      {/*END OF UI/UX*/}

      <article className="service">
        <div className="service__head">
          <h3>The Official Bits</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>We Obtain Planning Approval from your local council</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>We Obtain permissions from neighbors(if any)</p>
          </li>
         {/* <li>
            <BiCheck className='service__list-icon'/>
            <p>State Management with Redux and Context API</p>
          </li> */}
          <li>
            <BiCheck className='service__list-icon'/>
            <p>We lay out Building Regulations for that area</p>
          </li>
         {/* <li>
            <BiCheck className='service__list-icon'/>
            <p>CSS and SVG animations</p>
          </li>*/}
        </ul>
      </article>
      {/*END OF UI/UX*/}


      <article className="service">
        <div className="service__head">
          <h3>Getting The Job Done</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>We give a breakdown of each task,so you know the time scale in detail.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>We offer 5 year Guarantees,and after sales service, for your peace of mind!</p>
          </li>
         {/* <li>
            <BiCheck className='service__list-icon'/>
            <p>Model View Controller Architecture.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Amazon Web Services S3 (for image manipulation and storage)</p>
          </li>*/}
          
        </ul>
      </article>
      {/*END OF web development*/}


     {/* <article className="service">
        <div className="service__head">
          <h3>Website Hosting and Management</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Cpanel.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Firebase</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Heroku Hosting.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Continuous Deployment and Version Control with Git</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Netlify </p>
          </li>
        </ul>
        </article>*/}
      {/*END OFWEBSITE HOSTING AND MGMT*/}
    
  </div>     
    
    </section>
  )
}

export default Services