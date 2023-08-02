import React, { useEffect } from 'react'
import { Navbar, Banner, About, Footer } from '../components'

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Tea Station || About Tea Station'
  }, [])
  return (
    <>
      <div>hello</div>
      <Navbar />
      <Banner />
      <About />
      <Footer />
    </>
  )
}

export default AboutPage
