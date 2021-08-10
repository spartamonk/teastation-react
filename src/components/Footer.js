import React from 'react'
import { socials } from '../utils/constants'
const Footer = () => {
 return (
   <section className='footer'>
     <div className='section-center'>
       <div className='social-icons'>
         {socials.map((social) => {
           const { id, icon } = social
           return (
             <span key={id} className='social-icon'>
               {icon}
             </span>
           )
         })}
       </div>
       <h4 className="footer-text">&copy;{new Date().getFullYear()} <span className="company">tea station</span> <span>all rights reserved</span></h4>
     </div>
   </section>
 )
}

export default Footer
