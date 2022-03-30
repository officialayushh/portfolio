import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'


function headerSocials() {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/ayush-saraswat-522695229" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/officialayushh" target="_blank"><BsGithub/></a>
      <a href="https://twitter.com/officialayushh" target="_blank"><IoLogoTwitter/></a>
    </div>
  )
}

export default headerSocials;
