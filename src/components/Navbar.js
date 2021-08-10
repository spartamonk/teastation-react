import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import {links } from '../utils/constants'
import { useGlobalContext } from '../context/context'
const Navbar = () => {
 const {openNavbar, closeNavbar, isNavbarOpen}= useGlobalContext()
  return (
    <>
      <span className='nav-btn' onClick={openNavbar}>
        <FaBars />
      </span>
      <nav className={`${isNavbarOpen? 'navbar show-nav': 'navbar'}`}>
        <div className='navbar-header'>
          <span className='nav-close' onClick={closeNavbar}>
            <FaTimes className='icon' />
          </span>
        </div>
        <ul className='nav-items'>
          {links.map((link) => {
            const { id, name, url } = link
            return (
              <li key={id} onClick={closeNavbar}>
                <Link to={url} className='nav-link'>
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
