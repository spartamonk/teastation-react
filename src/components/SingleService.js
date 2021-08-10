import React from 'react'
import {Link} from 'react-router-dom'

const SingleService = ({image, icon, text, title}) => {
 return (
   <article className='service-card'>
     <div className='service-img-container'>
       <img src={image} alt={title} className='service-img' />
       <span className='service-icon' >{icon}</span>
     </div>
     <div className='service-info'>
       <h4 className='service-title'>{title}</h4>
       <p className='service-text'>{text}</p>
       <Link to='/service' className='btn service-btn'>
         read more
       </Link>
     </div>
   </article>
 )
}

export default SingleService
