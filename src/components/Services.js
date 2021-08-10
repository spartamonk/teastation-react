import React from 'react'
import { services } from '../utils/constants'
import SingleService  from './SingleService'

const Services = () => {
  return (
    <section className='services'>
      <div className='section-title services-title'>
        <h3>explore</h3>
        <h2>our services</h2>
      </div>
      <div className="section-center clearfix">
       {
        services.map(service=> {
         const {id}= service;
         return (
          <SingleService key={id} {...service}/>
         )
        })
       }
      </div>
    </section>
  )
}

export default Services
