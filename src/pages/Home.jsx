import React, { useState } from 'react'
import '../styles/home.css'

import photoAssets from '../components/img';
import { Link } from 'react-router-dom'

function Home() {
  const images = [photoAssets.img6, photoAssets.img8, photoAssets.img3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOriginalImage, setShowOriginalImage] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleImageClick = () => setShowOriginalImage(true);
  const closeModal = () => setShowOriginalImage(false);

  return (
    <div className="page-home">

      {/* Hero Section */}
      <div className="fondo-home">
        <div className="info-fondo">
          <h1>Cabraca Photography</h1>
          <p>La fotografía es una mejor manera de ver el mundo, explora lo que te puedo ofrecer</p>
          <button className="btn-projects">
            <Link to="/projects">Ver Proyectos</Link>
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container-home">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <img
              src={images[currentImageIndex]}
              alt={`Photography ${currentImageIndex + 1}`}
              className="carousel-image"
              onClick={handleImageClick}
            />
          </div>

          <div className="carousel-controls">
            <button onClick={prevImage} className="carousel-button prev">&#10094;</button>
            <button onClick={nextImage} className="carousel-button next">&#10095;</button>
          </div>

          <div className="carousel-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${currentImageIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showOriginalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img
              src={images[currentImageIndex]}
              alt={`Original Photography ${currentImageIndex + 1}`}
              className="modal-img"
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default Home