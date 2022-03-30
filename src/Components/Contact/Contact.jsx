import React from 'react'
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tc6s0xa', 'template_onhvvqp', form.current, 'D2JmBmZfsw_i1O3AG')
      
    e.target.reset();
  };
  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>sharmaayush3299@gmail.com</h5>
              <a href="mailto:sharmaayush3299@gmail.com" target="_blank">
                Send a message
              </a>
            </article>

            {/* <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Ayush Sharma</h5>
              <a href="https://google.com" target="_blank">
                Send a message
              </a>
            </article> */}

            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+91 6378706157</h5>
              <a href="https://wa.me/+916378706257" target="_blank">
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}

          <form ref={form} onSubmit={sendEmail}>
            {/* <Box sx={{
              width: 500,
              maxWidth: "100%",
            }}>
              <TextField type="text" name="name" fullWidth label="Name" required/>
            </Box>

            <Box sx={{
              width: 500,
              maxWidth: "100%",
            }}>
              <TextField type="email" name="email" fullWidth label="Email" required/>
            </Box>  */}
            
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <input type="email" name='email' placeholder='Enter Your Email' required/>
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
