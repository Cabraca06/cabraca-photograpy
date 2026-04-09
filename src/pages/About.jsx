import React from 'react'
import '../styles/About.css'
import imgbout from '../assets/img/_MG_0333.jpg';

function About() {

  return (
    <div className='about-container'>
      
      <p> <h1>About Me</h1>Hi, I'm a passionate photographer with a love for capturing moments and telling stories through my lens. With years of experience in various photography styles, I strive to create compelling and visually stunning images that resonate with viewers. Whether it's portrait, landscape, or street photography, I am dedicated to honing my craft and sharing my unique perspective with the world...</p>
      <img src={imgbout} alt="" className='about-image' />
    </div>
   
   
  )
}

export default About
