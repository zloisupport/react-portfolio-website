import React from 'react'
import {RiMailSendFill} from 'react-icons/ri'
import {SiTelegram} from 'react-icons/si'
import {MdCall} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import './contact.css'
export const Contact = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sju5xnu', 'template_n5sk5eo', form.current, 'kfTjao1_4tEI8f3Of')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <RiMailSendFill className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>my@Email.com</h5>
            <a href="mailto:" target="_blank">Send a message</a>
          </article>
          
          <article className="contact__option">
            <SiTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>My Name</h5>
            <a href="https://t.me/@username" target="_blank">Send a message</a>
          </article>       
          
          <article className="contact__option">
            <MdCall className='contact__option-icon'/>
            <h4>Number</h4>
            <h5>+0774 ## ## ##</h5>
            <a href="tel:0" target="_blank">Call</a>
          </article>
        </div>
        {/* End block */}
        <form ref={form} onSubmit={sendEmail}>  
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact