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
        <link to="/">Home</link>
        <link to="/about">About me</link>
        <link to="/projects">Projects</link>
        <link to="/contact">Contact</link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>


  </>
  )
}

export default Navbar
