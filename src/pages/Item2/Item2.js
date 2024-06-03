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
  import IMG1 from '../../assets/barbucks3.png'
  import IMG2 from '../../assets/barbucks4.png'
  import IMG3 from '../../assets/barbucks5.png'
  
/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item1 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
      
     <div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
      
      
      <h5>Item 2</h5>
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
    <a href="https://github.com/Dagogo-Clinton-Uranta/practice-landing-page" className="btn">Project Code(Github)</a>
    <a href="https://barbucks.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
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
    <a href="https://github.com/Dagogo-Clinton-Uranta/practice-landing-page" className="btn">Project Code(Github)</a>
    <a href="https://barbucks.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
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
    <a href="https://github.com/Dagogo-Clinton-Uranta/practice-landing-page" className="btn">Project Code(Github)</a>
    <a href="https://barbucks.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>

 


  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Barbucks Landing Page</h5>
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
           This page was made to introduce 3 major flavors of "Barbucks" (a starbucks knock off)</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Each drink choice has a description upon hovering, and when items move upwards to emphasize selection.</p>
          </li>

          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The plain Poppins font used in the description is used to juxtapose the expressive Oleo-Script font for the brand name "Barbucks". </p>
          </li>

          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>On clicking each flavor, the large picture changes to the selected flavor and the description of the flavour is given.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The description of each flavor has a text color that matches the flavor's color (for easy information association).</p>
          </li>
         
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Barbucks Landing Page</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>The rationale for technologies used :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Plain HTML, CSS and Javascript were used here as the project was simple enough not to require a framework.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Semantic HTML "section" and "header" tags were used here to group  page content into sections.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p> Social Media icons are positioned at the side of the page using CSS position "absolute", and image changes are done by altering opacity values.</p>
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