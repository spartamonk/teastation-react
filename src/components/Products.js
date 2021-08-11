import React from 'react'
import {products} from '../utils/constants'
import SingleProduct from './SingleProduct'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const Products = () => {
  const { closeNavbar } = useGlobalContext()
 return (
   <section className='products' onClick={closeNavbar}>
     <div className='section-center clearfix'>
       <article className='products-info'>
         <div className='section-title'>
           <h3>check out</h3>
           <h2>our products</h2>
           <p className='products-text'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
             quidem, repellat praesentium esse ducimus odit alias nulla laborum
             doloremque voluptatum, a cum magnam iure accusamus.
           </p>
         </div>
         <Link to='/products' className='btn'>
           inventory
         </Link>
       </article>
       <article className='products-inventory clearfix'>
         {products.map((product) => {
           const { id } = product
           return <SingleProduct key={id} {...product} />
         })}
       </article>
     </div>
   </section>
 )
}

export default Products
