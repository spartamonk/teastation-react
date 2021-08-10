import React, { useEffect } from 'react'
import { Navbar, Banner, About, Footer } from '../components'

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Tea Station || About'
  }, [])
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Footer />
    </>
  )
}

export default AboutPage
