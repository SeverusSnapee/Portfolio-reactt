import React from 'react'
import './footer.css'
import{FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import{IoLogoTwitter} from 'react-icons/io'
const footer = () => {
  return (
   <footer>
     <a href='#' className='footer_logo'>Prabh</a>
     <ul className='permalinks'>
     <li><a href='#'>Home</a></li>
     <li><a href='#about'>About</a></li>
     <li><a href='#experience'>Experience</a></li>
     <li><a href='#portfolio'>Portfolio</a></li>
     <li><a href='#Contact'>Contact</a></li>
     </ul>
     <div className="footer_socials">
       <a href='#'><FaFacebookF/></a>
       <a href='#'><FaInstagram/></a>
       <a href='#'><IoLogoTwitter/></a>
     </div>
   <div className="footer_copyright">
     <small>&copy;Parabhjyot Singh</small>
   </div>
   </footer>
  )
}

export default footer