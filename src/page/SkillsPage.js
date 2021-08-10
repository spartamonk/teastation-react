import React, { useEffect } from 'react'
import { Navbar, Banner, Skills, Footer } from '../components'
const SkillsPage = () => {
  useEffect(() => {
    document.title = 'Tea Station || Skills'
  }, [])
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Footer />
    </>
  )
}

export default SkillsPage
