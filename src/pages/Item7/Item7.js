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
  import IMG1 from '../../assets/bridgewayview3.png'
  import IMG2 from '../../assets/bridgewayview2.png'
  import IMG3 from '../../assets/bridgewayview1.png'
 

/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item1 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
            
<div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
      
      
      <h5>Item 7</h5>
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
    {/*<a href="https://github.com" className="btn">Project Code(Github)</a>*/}
    <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>
    


     {/*2 */}
     <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG2} alt="portfolio item 1" />
    </div>
    <h3>( II )</h3>
    <div className="formerportfolio__item-cta">
    {/*<a href="https://github.com" className="btn">Project Code(Github)</a>*/}
    <a href="http://www.bridgewayview.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>

 {/*3 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG3} alt="portfolio item 1" />
    </div>
    <h3>( III )</h3>
    <div className="formerportfolio__item-cta">
    {/*<a href="https://github.com" className="btn">Project Code(Github)</a>*/}
    <a href="http://www.bridgewayview.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>


  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Bank Account Portal</h5>
    <h2>Design Decisions</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Design Decisions Include :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>
            This Webpage was made for younger audiences so is simplistic with only one input.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The hand drawn font "Amatic" is used, along with simple repeating background shapes, to give a "child-like" feeling.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>There is also a simplified chat that keeps track of a short string of messages.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Finally a transactions tracking list exists and it fetches transactions made by the user based on the month selected .</p>
          </li>
         
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Bank Account Portal</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>The rationale for technologies used :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p> Account data is uploaded in excel spreadsheet format and converted to JSON.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>In Node Js, the Multer library is used here, to process uploaded files</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The MongoDB instance stores two messages per user, newer messages replace older ones.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Transaction fetching options are displayed with the current month as the first option. </p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The corresponding 12 month cycle is replicated in the back end route, to match the selected option from the frontend.</p>
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