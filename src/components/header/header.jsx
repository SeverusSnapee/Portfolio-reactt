import React from 'react'
import ME from '..//../assests/me3.jpeg'
import './header.css'
import CTA from './CTA'
import Headersocial  from './headersocials'
const header = () => {
  return (
   <header className='headerclass'>
 
     <div className="container header_container">
       
     <div className='Intro'>
   
   <h1>Parabhjyot Singh</h1>
   <h5 >FrontEnd Developer</h5><Headersocial/>
</div>
       <CTA/>
       
       <div className="me">
         <img src={ME} alt=""/>
         <a href="#contact" className='scroll_down'>
           Scroll Down
         </a>
       </div>
     </div>
   </header>
  )
}

export default header