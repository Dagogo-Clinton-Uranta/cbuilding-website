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
   //const dispatch = useDispatch()

   const handleChange = (e) => {
    setInput(e.target.value);
    console.log("this is the parent speaking,we are in header")
  };

  return (
    
   
    <header className="header-pm">
    <Nav/>
    <div className="container-pm header__container-1">
      

      <div className="headerExplainer">
         <h1 className="text-light" style={{marginBottom:"0rem"}}> The Future of Staffing</h1>
   
         
            <p className="text-light" style={{maxWidth:"50%",margin:"0 auto",marginBottom:"-1rem"}}>
            Revolutionize your staffing process with 
            our robust technology. Discover a hiring experience 
            like no other, smooth and effortless. 
           </p>
        
   
           <div className="header-btn-placement" >
           
           
   
              <button onClick ={()=>{/*dispatch(setRecruiter(false));dispatch(setDemo(true));*/navigate('/login')}} className="btn">
                Business
              </button>
     
              <a href={'https://onerecruiter-recruiter.netlify.app/login'}>
              <button onClick ={()=>{/*dispatch(setRecruiter(true));dispatch(setDemo(false));*/ /*navigate('https://onerecruiter-recruiter.netlify.app/login')*/}}  className=" btn-recruiter">
                Recruiter
              </button>
              </a>
            </div>

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header