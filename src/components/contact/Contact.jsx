import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'


const Contact = () => {
  return (
    <section className='contacts' id='contact'>
      <h3>Get In Touch</h3>
      <h2>Contact Me</h2>
      <div className="container contact_container">
      <div className="contact_options">
        <article className='contact_option'>
        <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>Prabhjyot50001@gmail.com</h5>
          <a href='mailto:prabhjyot50001@gmail.com' target="_blank" rel="noreferrer">
            Send A Message
          </a>
        </article>
        <article className='contact_option'>
        <MdOutlineEmail className='contact_option-icon'/>
          <h4>Linkedin</h4>
          <h5>Prabhjyot50001@gmail.com</h5>
          <a href='mailto:prabhjyot50001@gmail.com' target="_blank" rel="noreferrer">
            Send A Message
          </a>
        </article>
        <article className='contact_option'>
        <MdOutlineEmail className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+9198765</h5>
          <a href='https://api.whatsapp.com/send?phone=8168034260' target="_blank" rel="noreferrer">
            Send A Message
          </a>
        </article>
</div>
        <form action=''>
          <input type="text" name='name' placeholder="Your full name" required/>
          <input type="emailt" name='email' placeholder="Your Email" required/>
           <textarea name='message' row="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      
      </div>
    </section>
  )
}

export default Contact