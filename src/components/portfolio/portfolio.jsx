import React from 'react'
import './portfolio.css'
import project2 from '..//../assests/project2.jpg'
import project3 from '..//../assests/project3.png'
import project1 from '../../assests/project1.png'
const portfolio = () => {
  return (
    <section id='portfolio' className='classx'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
      <article className='portfolio_item'>
          <div className="portfolio_item-image">
           <img src={project1} alt=" "/>
          </div>
          <h3>Microsoftbot Using Selenium</h3>
          <div className="portfolio_item_cta">
          <a href=" https://github.com/SeverusSnapee/Microsoftbot" className='btn' target="_blank">Github</a>
          
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
           <img src={project3} alt=" "/>
          </div>
          <h3>Linear Regression (ML)</h3>
          <div className="portfolio_item_cta">
          <a href=" https://github.com/parabhjyot-singh/LINEAR-REGRESSION" className='btn' target="_blank">Github</a>
          
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
           <img src={project2} alt=" "/>
          </div>
          <h3>BlackBoard Bot</h3>
          <div className="portfolio_item_cta">
          <a href="https://github.com/parabhjyot-singh/BLACKBOARD-BOT " className='btn' target="_blank">Github</a>
         
          </div>
        </article>   
      </div>
    </section>
  )
}

export default portfolio