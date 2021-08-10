import React from 'react'
import aboutBcg from '../assets/about-bcg.jpeg'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <section className='about'>
      <div className='section-center  clearfix'>
        <article className='about-img'>
          <div className='about-picture-container'>
            <img
              src={aboutBcg}
              alt='boiling kettle'
              className='about-picture'
            />
          </div>
        </article>
        <article className='about-info'>
          <div className='section-title'>
            <h3>about our</h3>
            <h2>tea station</h2>
          </div>
          <p className='about-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            repellendus reprehenderit iure, vero nobis dolore!
          </p>
          <p className='about-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            repellendus reprehenderit iure, vero nobis dolore!
          </p>
          <Link to='/about' className='btn'>
            learn more
          </Link>
        </article>
      </div>
    </section>
  )
}

export default About
