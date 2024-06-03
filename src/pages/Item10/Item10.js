import React from 'react'
import {Link} from "react-router-dom";
import {BiCaretRight} from 'react-icons/bi';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay} from 'swiper';


/*Description imports */
import './itemdesc.css'


/*carousel imports */
import './gallery.css'



  /*portfolio item imports */
  import './formerportfolio.css'
  import IMG1 from '../../assets/calc1.png'
  import IMG2 from '../../assets/calc2.png'
  
/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item1 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
      
<div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
      
      <h5>Item 10</h5>
      <h2>Gallery</h2>
     
   <Swiper className="gallery__container"
   //swiper js options
   modules={[ Pagination, Scrollbar, A11y,Autoplay]}
   
   autoplay={{
    delay: 3500,
    disableOnInteraction: true,
  }}
   scrollbar={{ draggable: true }}
   slidesPerView={1}
   spaceBetween={50}
   pagination={{clickable:true}}
   
   > 
   {/*1 */}
  
    
    <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG1} alt="portfolio item 1" />
    </div>
    <h3>( I )</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com/Dagogo-Clinton-Uranta/Dagogo-Bincom" className="btn">Project Code(Github)</a>
    <a href="https://heuristic-jang-f21b6c.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>
    


     {/*2 */}
     <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG2} alt="portfolio item 1" />
    </div>
    <h3>(II)</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com/Dagogo-Clinton-Uranta/Dagogo-Bincom" className="btn">Project Code(Github)</a>
    <a href="https://heuristic-jang-f21b6c.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>

 

  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Neumorphic Calculator</h5>
    <h2>Design Decisions</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Design Decisions Include:-</h3>
        </div>

        <ul className="service__list">
        <li>
            <BiCaretRight className='service__list-icon'/>
            <p>This is a fully functional calculator with a screen glare animation.</p>
          </li>
          
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>
            CSS Box shadows to denote borders and give 3D effect.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>background image replicated in the body of the calculator to avoid hard changes in tone.</p>
          </li>
          
         
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Neumorphic Calculator</h5>
    <h2>Technologies Used </h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Rationale for technologies used include:-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>CSS key frames were chiefly used, varying position of the "glare" within a one second time-frame.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Javascript evet listeners are used to scale down button sizes when clicked.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Javascript variables are also used to store previously clicked values and perform operations with them.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>An animation effect for the words was also created, bringing in the text in 40 evenly spaced intervals</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
      </article>
     
    
  </div>   

  <div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>  
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}
      
    <Footer/>
      
      </div>
    )
  }
  
  export default Item1