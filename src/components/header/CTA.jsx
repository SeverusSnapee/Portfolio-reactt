import React from 'react'
import '..//../index.css'
import CV from '..//../assests/cv.pdf'
function CTA( ) {
  return (
    <div className='cta'>
<a href={CV} download className='btn btn-primary '>Download CV</a>
   <a href="#contact" className='btn btn-primary'>Let's Talk</a> 
    </div>
  )
}

export default CTA