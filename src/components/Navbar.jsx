import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/navbar.css'
 
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <nav className="navbar">
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  )
}
 
export default Navbar
 
