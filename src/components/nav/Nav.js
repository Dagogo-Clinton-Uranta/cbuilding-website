import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {RiSuitcaseLine} from "react-icons/ri"
import {BiWrench} from "react-icons/bi"
import {BiPaperPlane} from "react-icons/bi"
import {BsStackOverflow} from "react-icons/bs"
import {AiOutlineHeart}from  "react-icons/ai"
import {MdOutlineDesignServices} from  "react-icons/md"

import {useState} from 'react'

import building from   '../../assets/cbuildinglogo.png'


const Nav = () => {
 
  const [activeNav,setActiveNav] = useState('#')

 
  return (
    <>
    <nav className='desktopNav'>

<div>
  <img src={building} style={{height:"75px"}} alt="company logo" />
</div>


 <div style={{display:"flex"}}>     
<a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#'? 'active':''}>Home{/*<AiOutlineHome/>*/}</a>
<a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about'? 'active':''}>{/*<AiOutlineUser/>*/}About</a>
<a href="#experience" onClick={()=>{setActiveNav('#experience')}} className={activeNav === '#experience'? 'active':''}>{/*<RiSuitcaseLine/>*/}Experience</a>
<a href="#portfolio" onClick={()=>{setActiveNav('#portfolio')}} className={activeNav === '#portfolio'? 'active':''}>{/*<MdOutlineDesignServices/>*/}Past Work</a>

<a href="#services" onClick={()=>{setActiveNav('#services')}} className={activeNav === '#services'? 'active':''}>{/*<BiWrench/>*/}Testimonials</a>
<a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact'? 'active':''}>{/*<BiPaperPlane/>*/}Contact</a>
</div>


    </nav>

<nav className='mobileNav'>
      
<a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#'? 'active':''}><AiOutlineHome/></a>
<a href="#experience" onClick={()=>{setActiveNav('#experience')}} className={activeNav === '#experience'? 'active':''}><RiSuitcaseLine/></a>
<a href="#portfolio" onClick={()=>{setActiveNav('#portfolio')}} className={activeNav === '#portfolio'? 'active':''}><MdOutlineDesignServices/></a>


<a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about'? 'active':''}><AiOutlineUser/></a>


<a href="#services" onClick={()=>{setActiveNav('#services')}} className={activeNav === '#services'? 'active':''}><BiWrench/></a>
<a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact'? 'active':''}><BiPaperPlane/></a>



    </nav>

   </> 
  )
}

export default Nav