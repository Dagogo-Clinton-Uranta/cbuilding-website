import React from 'react'
import {Link} from "react-router-dom";
import {BiCaretRight, BiHome, BiHomeAlt} from 'react-icons/bi';


import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay} from 'swiper';


/*Description imports */
import './itemdesc.css'


/*carousel imports */
import './gallery.css'



  /*portfolio item imports */
  import './formerportfolio.css'
  import IMG1 from '../../assets/cinna-display-1.png'
  import IMG2 from '../../assets/cinnamon4.png'
  import IMG3 from '../../assets/cinnamon3.png'
  import IMG4 from '../../assets/cinnamon1.png'
  import IMG5 from '../../assets/cinnamon2.png'

/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item1 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130);}}>

<section id='testimonials'>
      <div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
      
      <h5>Item 1</h5>
      <h2>Virtual Bank Design</h2>
     
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
    <a href="https://github.com/Dagogo-Clinton-Uranta/digital-bank-frontend" className="btn">Project Code(Github)</a>
    <a href="https://agitated-albattani-022e3c.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>
    


     {/*2 */}
     <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={isBrowser?IMG2:IMG3} alt="portfolio item 1" />
    </div>
    <h3>(II)</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com/Dagogo-Clinton-Uranta/digital-bank-frontend" className="btn">Project Code(Github)</a>
    <a href="https://agitated-albattani-022e3c.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>

 {/*3 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={isBrowser?IMG3:IMG5} alt="portfolio item 1" />
    </div>
    <h3>(III)</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com/Dagogo-Clinton-Uranta/digital-bank-frontend" className="btn">Project Code(Github)</a>
    <a href="https://agitated-albattani-022e3c.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>


  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Virtual Bank Web Design </h5>
    <h2>Design Decisions</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Design Decisions Include :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The theming is bright green, symbolising "growth" and "new terrain" in banking.</p>
          </li>
          
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>A navbar is present for the whole page and each section is scrolled to when clicked.</p>
          </li>
          
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The page has 3 feature sections on black and white backgrounds for max contrast.</p>
          </li>

          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Each feature section has alternating image placement to avoid monotony.</p>
          </li> 

          
        
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Virtual Bank Web Design</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>The rationale for technologies used :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>All images are SVG (scalable vector graphics) to maintain image quality.</p>
          </li>
          
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p> React js was used, to easily replicate sections via component usage and for a single page load. </p>
          </li>
          
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>React's styled components are used here, to integrate react with a dynamic style of css and media queries.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>A useState hook is used to determine the visibility of the sign in page.</p>
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