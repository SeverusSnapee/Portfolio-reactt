import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
 import {AiOutlineUser} from 'react-icons/ai'
 import{BiBook} from 'react-icons/bi'

 import{AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'
 const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active':' '}><AiFillHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}  className={activeNav==='#about' ? 'active':' '}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')}  className={activeNav==='#experience' ? 'active':' '}><BiBook/></a>
   
      <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav==='#contact' ? 'active':' '}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav