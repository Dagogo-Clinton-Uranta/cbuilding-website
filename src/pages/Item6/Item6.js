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
  import IMG1 from '../../assets/flacs-carpark3.png'
  import IMG2 from '../../assets/flacs-carpark2.png'

  import API from '../../assets/ticket-print-API.pdf'

/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item1 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
     
<div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>


     <div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
     <a href={API} download className='btn'> Download Docs</a>
     </div>
     
      <h5>Park Truck Printer</h5>
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
    <a href={API} download className='btn'> Download Docs</a>
    <a href="https://flacscarpark.herokuapp.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
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
    <a href={API} download className='btn'> Download Docs</a>
    <a href="https://flacscarpark.herokuapp.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>




  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Park Truck Printer</h5>
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
            Entrance and Exit tickets printing are available from the selection menu.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Trucks assigned to specific zones in accordance with truck type .</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>When a truck leaves (recorded via an exit ticket), That space is assigned to the next truck that arrives, regardless of position.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Project was designed to also function as an API, so either a  URL(pointing to ticket's location) or an error message was sent to the browser.</p>
          </li>
         
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Park Truck Printer</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>The rationale for technologies used :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Redux was used for global state management, tracking changes over several parking zones.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Bootstrap was used for consistent theming and styles across pages.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>MongoDB cloud used in the backend for persistence of Data (for occupied car spaces ).</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Express AsyncHandler Used for more concise code on routes</p>
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