import React from 'react'
import './testimonials.css'

import AVTR5 from '../../assets/avatar5.jpeg'
import AVTR6 from '../../assets/avatar6.jpg'
import AVTR7 from '../../assets/avatar7.jpg'
import AVTR8 from '../../assets/avatar8.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
     
   <Swiper className="container testimonials__container"
   //swiper js options
   modules={[ Pagination, Scrollbar, A11y,Autoplay]}
   
   autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
   scrollbar={{ draggable: true }}
   slidesPerView={1}
   spaceBetween={50}
   pagination={{clickable:true}}
   
   > 
   {/*1 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR8} alt="avatar one" />
     </div>

     
     <h5 className="client__name">Agatha Parvu</h5>
     <small className="client__review">
     C-Building did an outstanding job with our bathroom fittings! Their attention to detail and professional craftsmanship transformed our bathroom into a modern, sleek space. The project was completed on time, and their friendly service made the entire process stress-free. Highly recommend!
      </small>

    </SwiperSlide>

     {/*2 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR5} alt="avatar one" />

     </div>

     <h5 className="client__name">Alex El Din</h5>
     <small className="client__review">
     We couldn't be happier with our new swimming pool! The contractors were highly skilled, ensuring every detail was perfect. They communicated effectively throughout the project and completed it within the promised timeline. Our backyard has become a stunning oasis thanks to their hard work!
      </small>

    </SwiperSlide>

 {/*3 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR6} alt="avatar one" />
     </div>
    
     <h5 className="client__name">Li Yiu</h5>
     <small className="client__review">
     Exceptional work on fixing our roof! The contractors were efficient, thorough,
      and ensured everything was done to the highest standards. They used quality
       materials and left no mess behind. Our roof looks great and we've had no issues since. Truly top-notch service!
      </small>

    </SwiperSlide>

  {/*3 */}
  <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR7} alt="avatar one" />
     </div>
    
     <h5 className="client__name">Erik Svensson</h5>
     <small className="client__review">
     The floor tiling in our home is flawless, thanks to C-Building! Their precision and attention to detail are evident in every tile. They were professional, efficient, and completed the job on schedule. Our floors have never looked better!
      </small>

    </SwiperSlide>




  </Swiper> 


    </section>
  )
}

export default Testimonials