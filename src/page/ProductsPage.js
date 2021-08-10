import React, {useEffect} from 'react'
import {Navbar, Banner, Products, Footer} from '../components'

const ProductsPage = () => {
  useEffect(() => {
    document.title = 'Tea Station || Products'
  }, [])
 return (
   <>
     <Navbar />
     <Banner />
     <Products />
     <Footer />
   </>
 )
}

export default ProductsPage
