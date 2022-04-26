import React from 'react'
import {NavLink} from "react-router-dom"
import "../styles/Header.css"

function Header() {
  return (
    <header className='Header'>
        <nav className='NavBar'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="about">About</NavLink>
        </nav>
    </header>
  )
}

export default Header