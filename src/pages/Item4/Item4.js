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
  import IMG1 from '../../assets/chat-app3.png'
  import IMG2 from '../../assets/chat-app1.png'
  import IMG3 from '../../assets/chat-app2.png'
  

/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item1 = () => {
    return (
      <div div onLoad={()=>{window.scrollTo(0, 130)}}>

<section >
     
<div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" id='testimonials' className="btn btn-primary">Home</a></Link> 
     </div>
     
     
      <h5>Item 4</h5>
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
    <a href="https://github.com/Dagogo-Clinton-Uranta/chat-app-client/tree/master" className="btn">Project Code(Github)</a>
    <a href="https://goofy-einstein-ec2b2b.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
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
    <a href="https://github.com/Dagogo-Clinton-Uranta/chat-app-client/tree/master" className="btn">Project Code(Github)</a>
    <a href="https://goofy-einstein-ec2b2b.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
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
    <a href="https://github.com/Dagogo-Clinton-Uranta/chat-app-client/tree/master" className="btn">Project Code(Github)</a>
    <a href="https://goofy-einstein-ec2b2b.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
    </div>
   </article>
    </SwiperSlide>


  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Chat App</h5>
    <h2>Design Decisions</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Design Insights include :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>
            Users are first greeted with a join screen, requesting a chat room they want to join.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Upon joining, other users in that chat room are made aware of their presence via a broadcast message.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Messages can then be sent, with real time replies from other users. Upon refresh, the entire chat box clears.</p>
          </li>
         
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Chat App</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>The rationale for technologies used :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>This app was created using react js, node and express js. Details for names and rooms are passed using query parameters as opposed to traditionally using props.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>React scroll to bottom library used here to allow the last sent chat bubble to always be visible.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p> React Emojify (library) is also made use of here to convert typed symbols to emojis in the input container.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Socket.io was used on the backend and socket.io-client on the front end.</p>
          </li>

          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>On triggering of certain events the socket connections were made to broadcast a message to all users / emit to all users minus the sender.</p>
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