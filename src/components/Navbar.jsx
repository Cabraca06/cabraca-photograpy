import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/home" onClick={closeMenu}>Cabraca</Link>
      </div>

     
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/home"     className={location.pathname === '/home'     ? 'active-link' : ''} onClick={closeMenu}>Home</Link>
        <Link to="/about"    className={location.pathname === '/about'    ? 'active-link' : ''} onClick={closeMenu}>About me</Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''} onClick={closeMenu}>Projects</Link>
        <Link to="/contact"  className={location.pathname === '/contact'  ? 'active-link' : ''} onClick={closeMenu}>Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  )
}

export default Navbar