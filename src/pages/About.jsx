import React from 'react'
import '../styles/About.css'
import photoAssets from '../components/img';
import WhatsAppBubble from '../components/WhatsAppBubble';

function About() {
  return (
    <div className="about-container">

      <div className="about-image-wrapper">
        <img src={photoAssets.img9} alt="Cabraca Photography" className="about-image" />
      </div>

      <div className="about-text">
        <h1>About Me</h1>
        <p>
          Hi, I'm a passionate photographer with a love for capturing moments
          and telling stories through my lens. With years of experience in
          various photography styles, I strive to create compelling and visually
          stunning images that resonate with viewers.
        </p>
        <p>
          Whether it's portrait, landscape, or street photography, I am
          dedicated to honing my craft and sharing my unique perspective
          with the world.
        </p>
      </div>
    <WhatsAppBubble /> 
    </div>
  )
}

export default About