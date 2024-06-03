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
  import IMG1 from '../../assets/bridgewayco-op3.png'
  import IMG2 from '../../assets/bridgewayco-op2.png'
  import IMG3 from '../../assets/bridgewayco-op4.png'
  

/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item1 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
      <h5>Item 5</h5>
      <h2>Gallery</h2>

      <div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
     
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
    <a href="https://github.com/Dagogo-Clinton-Uranta/sample-marketplace" className="btn">Project Code(Github)</a>
    <a href="https://bridgewayco-op.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
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
    <a href="https://github.com/Dagogo-Clinton-Uranta/sample-marketplace" className="btn">Project Code(Github)</a>
    <a href="https://bridgewayco-op.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
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
    <a href="https://github.com/Dagogo-Clinton-Uranta/sample-marketplace" className="btn">Project Code(Github)</a>
    <a href="https://bridgewayco-op.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>


  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5> Co-operative Marketplace</h5>
    <h2>Design Decisions</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Design Decisions include :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>
            Different levels of user access (admin, user, teller) depending on database info.
           </p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Rustic images to inspire community feeling for co-operative system. </p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Multi-step order form with security question variation(to avoid usage of bank PIN).</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Product review system to guide new buyers, and products tied via secondary key to product owner.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Color coding for order status.</p>
          </li>
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Co-operative Marketplace</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>The rationale for technologies used :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>JSON Web Tokens as middleware to verify all routes (for overarching application authorization).</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Bcrypt.js library with hashing algorithm for storage of non-passwords.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Mail alerts(via nodemailer API) for all new messages and orders.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Redux for state management because of large amount of data being passed.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>MVC pattern for separation of data layer, presentation layer and business logic.</p>
          </li>
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}
      
    <Footer/>
      
      </div>
    )
  }
  
  export default Item1