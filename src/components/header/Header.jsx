import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'
import Nav from '../nav/Nav'
//import { setRecruiter,setDemo } from 'src/redux/reducers/auth.slice'
//import { useDispatch } from 'react-redux'
/*import laptop from 'src/assets/images/laptop.svg'

import LoanSlider from './LoanSlider'*/



const Header = () => {

   const [input,setInput] = useState(1000)
   const navigate= useNavigate()
  // const dispatch = useDispatch()

   const handleChange = (e) => {
    setInput(e.target.value);
    console.log("this is the parent speaking,we are in header")
  };

  return (
    
   
    <header className="header-pm">
    {/*<Nav/>*/}
    <div className="container-pm header__container-1">
      

      <div className="headerExplainer">
         <h1 className="text-light" style={{marginBottom:"1rem"}}>CBuilding Construction Services</h1>
   
         
            <p className="text-light intro-desc" style={{margin:"0 auto",marginTop:"1rem",marginBottom:"1rem",fontSize:"18px",fontWeight:"800"}}>
            Quality Home Refurbishment Services provided throughout the Croydon, Bromley, and Sutton areas.
         </p> 
        
   
           <div className="header-btn-placement" >
           
           
           
              <a href="#portfolio" className='btn btn-primary'/*onClick ={()=>{navigate('/login')}}*/>
                View Our Work
              </a>
              
             
            </div>

      </div>
     
    

    </div>


    </header>
    
  )
}

export default Header