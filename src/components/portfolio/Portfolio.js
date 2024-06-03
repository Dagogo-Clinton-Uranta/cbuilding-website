import React,{useEffect,useState} from 'react'

//import ImageFadeIn from "react-image-fade-in";

import './portfolio.css'

import IMG1 from '../../assets/roof1.jpg'
import IMG2 from '../../assets/roof10.jpg'
import IMG3 from '../../assets/c3.png'
import IMG4 from '../../assets/bathroom1.jpg'
//import IMG5 from '../../assets/bway-cop-op.gif'
import IMG6 from '../../assets/bathroom2.jpg'
import IMG7 from '../../assets/bridgewayview1.png'
import IMG8 from '../../assets/laravel-job-board2.png'
import IMG9 from '../../assets/oop-dalibor1.png'
//import IMG10 from '../../assets/calc-3.gif'
import IMG11 from '../../assets/chat-app2.png'


/*co-op slideshow */
import IMG12 from '../../assets/bathroom4.jpg'
import IMG13 from '../../assets/co2.png'
import IMG14 from '../../assets/co3.png'

/*calc slideshow */
import IMG21 from '../../assets/c1.png'
import IMG22 from '../../assets/c2.png'
import IMG23 from '../../assets/c3.png'
import IMG24 from '../../assets/c4.png'
import IMG25 from '../../assets/c5.png'
import IMG26 from '../../assets/c6.png'
import IMG27 from '../../assets/c7.png'
import IMG28 from '../../assets/c8.png'
import IMG29 from '../../assets/c9.png'

/*bway slideshow */
/*import IMG31 from '../../assets/bw1.png'
import IMG32 from '../../assets/bw2.png'
import IMG33 from '../../assets/bw3.png'
import IMG34 from '../../assets/bw4.png'
import IMG35 from '../../assets/bw5.png'
import IMG36 from '../../assets/bw6.png'
import IMG37 from '../../assets/bw7.png'
import IMG38 from '../../assets/bw8.png'
import IMG39 from '../../assets/bw9.png'
import IMG40 from '../../assets/bw10.png'
import IMG41 from '../../assets/bw11.png'
import IMG42 from '../../assets/bw12.png'*/
import IMG43 from '../../assets/pavement1.jpg'
import IMG44 from '../../assets/pateo-outdoors11.jpg'
/*import IMG45 from '../../assets/bw15.png'
import IMG46 from '../../assets/bw16.png'
import IMG47 from '../../assets/bw17.png'
import IMG48 from '../../assets/bw18.png'
import IMG49 from '../../assets/bw19.png'
import IMG50 from '../../assets/bw20.png'
import IMG51 from '../../assets/bw21.png'
import IMG52 from '../../assets/bw22.png'
import IMG53 from '../../assets/bw23.png'*/
import IMG54 from '../../assets/roof7.jpg'
import IMG55 from '../../assets/pateo-outdoors10.jpg'
import IMG56 from '../../assets/pool-outdoors4.jpg'
import IMG57 from '../../assets/outdoors1.jpg'

import {Link} from "react-router-dom";

const Portfolio = () => {

const video1 = 'https://dagogobucket.s3.eu-west-2.amazonaws.com/bway-main-page.mp4'
const video2 = 'https://dagogobucket.s3.eu-west-2.amazonaws.com/co-op-vid.mp4'
const video3 =  'https://dagogobucket.s3.eu-west-2.amazonaws.com/calc3.mp4'



const [changeImage,setChangeImage] = useState(IMG22)
const [changeBw,setChangeBw] = useState(IMG43)
const [changeCo1,setChangeCo1] = useState(true)
const [changeCo2,setChangeCo2] = useState(false)
const [changeCo3,setChangeCo3] = useState(false)
 
  /*for co-op*/
  const urls= [IMG12, IMG13, IMG14];
  const divStyle = {
    height: "270px",
    width: "400px",
    backgroundColor: '#f2f2f2',
    borderRadius:"1rem"
  }
  const imageStyle = {
    height: '100%',
    width: 'auto',
    justifySelf: 'center'
  }

   
   useEffect(()=>{

    /*FOR CO-OPERATIVE*/ 
    setInterval(

      ()=>{
       
         
         setTimeout(function(){
          setChangeCo1(false)
          setChangeCo2(true)
          setChangeCo3(false)
         },2000)

         setTimeout(function(){
          setChangeCo1(false)
          setChangeCo2(false)
          setChangeCo3(true)
         },4000)

         setTimeout(function(){
          setChangeCo1(true)
          setChangeCo2(false)
          setChangeCo3(false)
         },6000)

        },8000)

   
  /*for bway main 
    setInterval(

      ()=>{
        setTimeout(function(){
          setChangeBw(IMG32)
         },100)

         setTimeout(function(){
          setChangeBw(IMG33)
         },200)

         setTimeout(function(){
          setChangeBw(IMG34)
         },300)

         setTimeout(function(){
          setChangeBw(IMG35)
         },400)

         setTimeout(function(){
          setChangeBw(IMG36)
         },500)

         setTimeout(function(){
          setChangeBw(IMG37)
         },600)

         setTimeout(function(){
          setChangeBw(IMG38)
         },700)

         setTimeout(function(){
          setChangeBw(IMG39)
         },800)

         setTimeout(function(){
          setChangeBw(IMG40)
         },900)

         setTimeout(function(){
          setChangeBw(IMG41)
         },1000)

         setTimeout(function(){
          setChangeBw(IMG42)
         },1100)

         setTimeout(function(){
          setChangeBw(IMG43)
         },1200)

         setTimeout(function(){
          setChangeBw(IMG44)
         },1300)

         setTimeout(function(){
          setChangeBw(IMG45)
         },1400)

         setTimeout(function(){
          setChangeBw(IMG46)
         },1800)

         setTimeout(function(){
          setChangeBw(IMG47)
         },1900)

         setTimeout(function(){
          setChangeBw(IMG48)
         },2000)

         setTimeout(function(){
          setChangeBw(IMG49)
         },2100)

         setTimeout(function(){
          setChangeBw(IMG50)
         },2200)

         setTimeout(function(){
          setChangeBw(IMG51)
         },2300)

         setTimeout(function(){
          setChangeBw(IMG52)
         },2400)

        setTimeout(function(){
          setChangeBw(IMG53)
         },2500)
     
         setTimeout(function(){
          setChangeBw(IMG53)
         },2600)

         setTimeout(function(){
          setChangeBw(IMG53)
         },2700)
        
      }
      
    ,3000)*/

/*for calc */
    setInterval(

      ()=>{
        setTimeout(function(){
          setChangeImage(IMG23)
         },100)

         setTimeout(function(){
          setChangeImage(IMG23)
         },200)

         setTimeout(function(){
          setChangeImage(IMG24)
         },300)

         setTimeout(function(){
          setChangeImage(IMG25)
         },300)

         setTimeout(function(){
          setChangeImage(IMG26)
         },400)

         setTimeout(function(){
          setChangeImage(IMG27)
         },500)

         setTimeout(function(){
          setChangeImage(IMG28)
         },600)

         setTimeout(function(){
          setChangeImage(IMG29)
         },700)

         
      }
      
    ,700)


   },[])

   

  return (
<section id='portfolio'>
 <h5>Take a look at</h5>
 <h2>Our Past Work</h2>


<div className="portfolio__item__type">
 <h2>Roofing </h2>
 <div className="portfolio__divider"></div>
 </div>

<div className="container portfolio__container">

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG1} alt="portfolio item 1"  />
</div>
  <h3>Roofing at Alexander Close -  Bromley</h3>
  <div className="portfolio__item-cta">
 <a href="#portfolio" className="btn btn-primary">Work Details </a>
  {/*<a href="https://agitated-albattani-022e3c.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer" >Work Details</a>*/}
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG2} alt="portfolio item 1"/>
</div>
  <h3>Roof Window repair, Arcus Street - Bromley</h3>
  <div className="portfolio__item-cta">
 <a href="#portfolio" className="btn btn-primary">Work Details </a>
  {/*<a href="https://barbucks.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">Work Details</a>*/}
  </div>
 </article>


 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG54} alt="portfolio item 1"  />

</div>
  <h3>Roof Repair, Merebank Lane - Croydon</h3>
  
  <div className="portfolio__item-cta">
 <a href="#portfolio" className="btn btn-primary">Work Details </a>
  </div>
 
 </article>

{/*
 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG43} alt="portfolio item 1"  />

</div>
  <h3> Bank Webpage</h3>
  
  <div className="portfolio__item-cta">
  <Link to={"/portfolio3"}><a href="https://github.com" className="btn btn-primary">Work Details </a></Link> 

  </div>
 
 </article>




 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG55} alt="portfolio item 1"  />

</div>
  <h3>"Sleep Connection" Sales Page</h3>
  
  <div className="portfolio__item-cta">
  <Link to={"/portfolio12"}><a href="" className="btn btn-primary">Work Details </a></Link> 
 
  </div>
 
 </article>



 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG57} alt="portfolio item 1"  />

</div>
  <h3>"Nigth Social" social media</h3>
  
  <div className="portfolio__item-cta">
  <Link to={"/portfolio3"}><a href="https://github.com" className="btn btn-primary">Work Details </a></Link> 
 
  </div>
 
 </article>



 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG56} alt="portfolio item 1"  />

</div>
  <h3> "poor credit" Conversions Page</h3>
  
  <div className="portfolio__item-cta">
  <Link to={"/portfolio3"}><a href="https://github.com" className="btn btn-primary">Work Details </a></Link> 
  
  </div>
 
 </article>
*/}
 </div>
 
 
 <div className="portfolio__item__type">
 <h2>Bathroom Fixtures</h2>
 <div className="portfolio__divider"></div>
 </div>

 <div className="container portfolio__container">
 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG4} alt="portfolio item 1"  />
</div>
  <h3> Bathroom Installation, Old Street - London</h3>
  <div className="portfolio__item-cta">
<a href="#portfolio" className="btn btn-primary">Work Details </a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
 
{<img  height={300} src={IMG12} /> }

</div>
  <h3>Bathroom Tiling, Bexley - London</h3>
  <div className="portfolio__item-cta">
<a href="#portfolio" className="btn btn-primary">Work Details </a>
 
  </div>
 </article>



 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG6} alt="portfolio item 1"  />
  </div>
  <h3>New Sink Fitting, Angel - London</h3>
  <div className="portfolio__item-cta">
 <a href="#portfolio" className="btn btn-primary">Work Details </a>
 
  
  </div>
 </article>

  {/*

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG7} alt="portfolio item 1"  />
  </div>
  <h3> Bank Account Portal</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio7"}><a href="https://github.com" className="btn btn-primary">Work Details </a></Link> 
  
  </div>
 </article>

*/}

</div>




 <div className="portfolio__item__type">
 <h2>Outdoor Work</h2>
 <div className="portfolio__divider"></div>
 </div>

 <div className="container portfolio__container">
 <article className="portfolio__item" >
  <div className="portfolio__item-image" >
  <img src={IMG44} alt="portfolio item 10"  />

  </div>
  
 

  <h3>Patio Completion, Bishops Avenue - Bromley</h3>
  <div className="portfolio__item-cta">
 <a href="#portfolio" className="btn btn-primary">Work Details </a>
  </div>
 </article>


 
 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG43} alt="portfolio item 1"  />

</div>
  <h3> Tile installation, Baths Road - Bromley</h3>
  
  <div className="portfolio__item-cta">
<a href="#portfolio" className="btn btn-primary">Work Details </a>

  </div>
 
 </article>




 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG55} alt="portfolio item 1"  />

</div>
  <h3>Wall Construction, Beamway - Dagenham</h3>
  
  <div className="portfolio__item-cta">
<a href="#portfolio" className="btn btn-primary">Work Details </a>
 
  </div>
 
 </article>



 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG57} alt="portfolio item 1"  />

</div>
  <h3>Pavement Fitting, Bull lane - Dagenham</h3>
  
  <div className="portfolio__item-cta">
  <a href="#portfolio" className="btn btn-primary">Work Details </a>
 
  </div>
 
 </article>



 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG56} alt="portfolio item 1"  />

</div>
  <h3>Swimming Pool build, Guildford - Surrey</h3>
  
  <div className="portfolio__item-cta">
 <a href="#portfolio" className="btn btn-primary">Work Details </a>
  
  </div>
 
 </article>


 
</div>



</section>
  )
}

export default Portfolio