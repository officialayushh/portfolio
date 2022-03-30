import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <>
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <article className='service'>
            <div className="service__head">
              <h3>UI Design</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>

          {/* End of UI/UX */}

          <article className='service'>
            <div className="service__head">
              <h3>Web development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>

          {/* End of Web Development */}

          <article className='service'>
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='sevice__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>

          {/* End of Content Creation */}
        </div>
      </section>
    </>
  )
}

export default Services
