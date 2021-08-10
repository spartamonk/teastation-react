import React, { useEffect } from 'react'

import { Navbar, Banner, Services, Footer } from '../components'
const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Tea Station || Services'
  }, [])
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Footer />
    </>
  )
}

export default ServicesPage
