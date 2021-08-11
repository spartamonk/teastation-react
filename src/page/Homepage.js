import React, { useEffect } from 'react'
import {
  About,
  Banner,
  Contact,
  Footer,
  Navbar,
  Products,
  Services,
  Skills,
} from '../components'
const Homepage = () => {
  
  useEffect(() => {
    document.title = 'Tea Station || Home'
  }, [])
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer></Footer>
    </>
  )
}

export default Homepage
