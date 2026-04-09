import React from 'react'
import '../styles/home.css'
import { useState } from 'react'
import img1 from '../assets/img/_MG_0318.jpg';
import img2 from '../assets/img/_MG_0331.jpg';
import img3 from '../assets/img/_MG_0201.jpg';


function Home() {
    const images = [
        img1, 
        img2, 
        img3, 
      ];
    
      // Estado para controlar qué imagen se está mostrando actualmente.
      // currentImageIndex es el índice de la imagen en el array `images`.
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      // Función para ir a la siguiente imagen
      const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      // Función para ir a la imagen anterior
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
  return (
    <>

        <div className='fondo-home' >
            <div className='info-fondo'>
            <h1>#########</h1>
            <p>La fotografia es una mejor manera de ver el mundo, explora lo que te puedo ofrecer </p>
            <button onClick={() => window.location.href = '/projects'}>Explore</button>
            </div>    
        </div>

    <div className='container-home'>
      
      <div className='carousel-container'>
        <div className='carousel-wrapper'>
          <img
            src={images[currentImageIndex]}
            alt={`Photography ${currentImageIndex + 1}`}
            className='carousel-image'
          />
        </div>
        <div className='carousel-controls'>
          <button onClick={prevImage} className='carousel-button prev'>&#10094;</button> 
          <button onClick={nextImage} className='carousel-button next'>&#10095;</button> 
        </div>
    
        <div className='carousel-dots'>
          {images.map((_, idx) => (
            <span key={idx} className={`dot ${currentImageIndex === idx ? 'active' : ''}`} onClick={() => setCurrentImageIndex(idx)}></span>
          ))}
        </div>
    </div>
       
      
      

    </div>
      
    </>
  )
}

export default Home
