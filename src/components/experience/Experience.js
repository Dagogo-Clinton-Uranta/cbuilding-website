import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
   <h5>Our Offerings &</h5>
   <h2>Our Services</h2>
   
   <div className="container experience__container">
   
      <div className="experience__frontend">
       <h3>Kitchen & Bathroom</h3>
       <div className="experience__content">
        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}} className="experience__details-icon"/>
         <div>
         <h4>Sink Installation</h4>
         {/*<small className='text-light'>Proficient</small>*/}
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
         <div> 
         <h4>Bathroom Repair</h4>
         {/*<small className='text-light'>intermediate</small>*/}
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
         <div>
         <h4>Shower Tiling</h4>
         {/*<small className='text-light'>Proficient</small>*/}
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
         <div>
         <h4>Pipe Fixtures</h4>
         {/*<small className='text-light'>Proficient</small>*/}
         </div>
       
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
          <div>
         <h4>External Pipe Fittings</h4>
         {/*<small className='text-light'>Intermediate</small>*/}
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
         <div>
         <h4>Bathtub Re-alignment</h4>
         {/*<small className='text-light'>Intermediate</small>*/}
         </div>
        </article>

       </div>
      </div>

       <div className="experience__backend">
       <h3>Outdoor Work</h3>
       <div className="experience__content">
        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
         <div>
         <h4>Retaining wall construction</h4>
         {/*<small className='text-light'>intermediate</small>*/}
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
         <div>
         <h4>Fencing and gate installation</h4>
        {/* <small className='text-light'>intermediate</small>*/}
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
         <div>
         <h4>Gazebo construction</h4>
         {/*<small className='text-light'>intermediate</small>*/}
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px !important"}}  className="experience__details-icon"/>
         <div>
         <h4>Drainage setup/maintenance</h4>
         {/*<small className='text-light'>Intermediate</small>*/}
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
         <div>
         <h4>Outdoor fixture assembly</h4>
         {/*<small className='text-light'>Intermediate</small>*/}
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
         <div>
         <h4>Outdoor fireplace setup</h4>
         {/*<small className='text-light'>Intermediate</small>*/}
         </div>
        </article>

      {/* 
        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"15px"}}  className="experience__details-icon"/>
         <div>
         <h4>Shed and outdoor storage building construction</h4>
        
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Concrete work (steps, slabs, etc.)</h4>
        
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Playground and recreational area construction</h4>
       
         </div>
        </article> */}

       </div>

      </div>


   </div>

    </section>
  )
}

export default Experience