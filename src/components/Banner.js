import React from 'react'
import {Link} from 'react-router-dom'

const Banner = () => {
 return (
   <>
     <header className='header'>
       <div className='banner'>
         <h2>over one hundred flavors of</h2>
         <h1>
           specially <br /> crafted tea
         </h1>
         <Link className='btn banner-btn' to='/products'>
           explore
         </Link>
       </div>
     </header>
     <div className="content-divider"></div>
   </>
 )
}

export default Banner
