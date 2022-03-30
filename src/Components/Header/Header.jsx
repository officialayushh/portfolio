import React from 'react'
import './Header.css'
import CTA from '../Header/CTA'
import ME from '../../images/me.jpg'
import HeaderSocials from './HeaderSocials'

function header() {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Ayush Saraswat</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
      </header>
    </>
  )
}

export default header;
