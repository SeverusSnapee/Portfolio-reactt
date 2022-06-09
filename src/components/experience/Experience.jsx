import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'
const experience = () => {
  return (
    <section id='experience' className='experienceclass'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience_container">
     <div className="experience_frontend">
       <h3>Frontend Development </h3>
       <div className="experience_content">
       <article className='experience_details'>
           <BsFillPatchCheckFill  className='experience_details-icon'/>
          <div>
          <h4>HTML</h4>
           <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className='experience_details'>
           <BsFillPatchCheckFill  className='experience_details-icon'/>
           <div>
           <h4>CSS</h4>
           <small className='text-light'>Intermediate</small>
           </div>
         </article>
         <article className='experience_details'>
           <BsFillPatchCheckFill  className='experience_details-icon'/>
         <div>
         <h4>Javascript</h4>
           <small className='text-light'>Intermediate</small>
         </div>
         </article>
         <article className='experience_details'>
           <BsFillPatchCheckFill  className='experience_details-icon'/>
           <div>
           <h4>TailwindL</h4>
           <small className='text-light'>Intermediate</small>
           </div>
         </article>
         <article className='experience_details'>
           <BsFillPatchCheckFill  className='experience_details-icon'/>
           <div>
           <h4>ReactJs</h4>
           <small className='text-light'>Intermediate</small>
           </div>
         </article>
         
       </div>
       
     </div>
         <div className="experience_backend">
     <h3>Backend Development </h3>
     <div className="experience_content">
       <article className='experience_details'>
           <BsFillPatchCheckFill  className='experience_details-icon'/>
          <div>
          <h4>Node js</h4>
           <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className='experience_details'>
           <BsFillPatchCheckFill className='experience_details-icon' />
         <div>
         <h4>MongoDb</h4>
           <small className='text-light'>Intermediate</small>
         </div>
         </article>
         <article className='experience_details'>
           <BsFillPatchCheckFill  className='experience_details-icon'/>
          <div>
          <h4>Php</h4>
           <small className='text-light'>Intermediate</small>
          </div>
         </article>
         <article className='experience_details'>
           <BsFillPatchCheckFill  className='experience_details-icon'/>
           <div>
           <h4>MySql</h4>
           <small className='text-light'>Intermediate</small>
           </div>
         </article>
         <article className='experience_details'>
           <BsFillPatchCheckFill className='experience_details-icon' />
         <div>
         <h4>Python</h4>
           <small className='text-light'>Intermediate</small>
         </div>
         </article>
         
       </div>
     </div>
     
    </div>
    </section>
  )
}

export default experience