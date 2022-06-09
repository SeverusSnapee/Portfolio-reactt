import React from 'react'
import ME from '..//..//assests/me2.jpeg'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {VscRootFolder} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'
const About = () => {
  return (
    <section id='about' className='aboutclass'>
    <h2>Get To Know</h2>
    <h2>About Me</h2>
    <div className="container about_container">
    <div className="about_me">
<div className="about_me-image">
  <img src={ME} alt="About Image"/>
</div>
    </div>
   <div className="about_content">
   <div className="about_cards">
     <article className='about_card'>
     <FaAward className='about_icon'/>
       <h5>Experience</h5>
       <small>2 YEARS</small>
     </article>
     <article className='about_card'>
     <FiUsers className='about_icon'/>
       <h5>Internships</h5>
       <small>Wordpress ecommerce internship</small>
     </article>
     <article className='about_card'>
     <VscRootFolder className='about_icon'/>
       <h5>Projects</h5>
       <small>+10 projects </small>
     </article>
   </div>
   <p>
   I am a Developer . I have always been keen to learn new ways to develop different things and so far i have tried web development,python automation development
   

   </p>
   <a href='#contact' className='btn btn-primary' >
     Lets's Talk
   </a>
   </div>
    </div>  
    </section>
  )
}

export default About