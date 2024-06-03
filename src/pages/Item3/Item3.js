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
  import IMG1 from '../../assets/bridgeway-web1.png'
  import IMG2 from '../../assets/bridgeway-web3.png'
  import IMG3 from '../../assets/bridgeway-web4.png'
  import IMG4 from '../../assets/bridgeway-web2.png'
 

/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item1 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
     
     <div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
     
     
      <h5>Item 3</h5>
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
      <img src={isBrowser?IMG1:IMG4} alt="portfolio item 1" />
    </div>
    <h3>( I )</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com" className="btn">Project Code(Github)</a>
    <a href="https://bridgewaymfb.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
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
    <a href="https://github.com" className="btn">Project Code(Github)</a>
    <a href="https://bridgewaymfb.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>

 {/*3 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG3} alt="portfolio item 1" />
    </div>
    <h3>(III)</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com" className="btn">Project Code(Github)</a>
    <a href="https://bridgewaymfb.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>


  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Banking Webpage</h5>
    <h2>Design Decisions</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Design Decisions Include :- </h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>
             A blue base color, with red highlights across the page, In accordance with the Bank's key colors.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Faces of smiling staff in abstract curves to give viewers a feeling of friendliness and smoothness associated with the bank.  </p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Mobile first design with navigation shrinking to a menu icon at certain screen widths.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Fixed "scroll to top" button to enhance the user experience concerning the length of the page.</p>
          </li>
         
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Banking Webpage</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>The rationale for technologies used :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>JQuery was used in the Hero section to animate the bank's logo with a "typing" effect.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>A carousel (made with JQuery) was also used to display company events continually.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The contact section relies on an email submission API "FormSubmit", to send information to customer service email. </p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The "Open An Account" button leads to a form where values are stored with browser session storage. </p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The account form employs a signature canvas API (for capturing signatures), that sends the signature to the customer service email. </p>
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