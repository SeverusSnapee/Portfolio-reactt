import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'

import Portfolio from './components/portfolio/portfolio'

import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      
      <Portfolio />
      
      <Contact/>
      <Footer/>


    </>
  )
}

export default app