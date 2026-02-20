import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>

      <div className="nav-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <div className="nav-right">
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default Navbar