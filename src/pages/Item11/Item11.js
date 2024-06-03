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
  import IMG1 from '../../assets/cinna-display-1.png'
  import IMG2 from '../../assets/cinnamon4.png'
  import IMG3 from '../../assets/cinnamon3.png'
  import IMG4 from '../../assets/cinnamon1.png'
  import IMG5 from '../../assets/cinnamon2.png'

/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item1 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
      
<div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
      
      <h5>Item 11</h5>
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
    <h3>Laravel Job Board</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com" className="btn">Project Code(Github)</a>
    <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>
    


     {/*2 */}
     <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={isBrowser?IMG2:IMG3} alt="portfolio item 1" />
    </div>
    <h3>Laravel Job Board</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com" className="btn">Project Code(Github)</a>
    <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>

 {/*3 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={isBrowser?IMG3:IMG5} alt="portfolio item 1" />
    </div>
    <h3>Laravel Job Board</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com" className="btn">Project Code(Github)</a>
    <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>


  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Laravel Job Board</h5>
    <h2>Design Decisions</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Ticket Printing System</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>
            assumenda deserunt voluptas..</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Laravel Job Board</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Ticket Printing System</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
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