import React from 'react'
import './About.css'
import ME from '../../images/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <>
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>0.6+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>0+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
            </div>

            <p>I did my diploma in Electrical Engineering ,but I developed interested in computer programming.
              I taught myself 'HTML ,CSS ,JS ,REACT ,PYTHON ,Mongo Db, Java'.
              Being a self taught Programmer ,It was difficult for me to fix errors but i never give up on things which matters and Kept learning.
              I realised computer science is the field in which always there to learn.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;

