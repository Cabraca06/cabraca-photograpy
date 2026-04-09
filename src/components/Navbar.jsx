import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/navbar.css'
import { useState } from 'react'

function Navbar() {
   //logica para el menu hamburguesa
   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    
  return (
    <>
    <nav className="navbar">
    
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About me</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>


  </>
  )
}

export default Navbar
