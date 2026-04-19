import React, { useState } from 'react'
import '../styles/Projects.css'
import { photoArray } from '../components/img';

const CATEGORIES = ['all', 'portrait', 'landscape', 'street'];


const PHOTOS = photoArray.map((src, i) => {
  const catalog = [
    { title: 'Golden Hour',        cat: 'portrait',  description: '##'},
    { title: 'Urban Steps',        cat: 'street',    description: '##'},
    { title: 'City Pulse',         cat: 'street',    description: '##'},
    { title: 'Forest Path',        cat: 'landscape', description: '##'},
    { title: 'Morning Light',      cat: 'portrait',  description: '##'},
    { title: 'Golden Hour II',     cat: 'portrait',  description: '##'},
    { title: 'Studio Light',       cat: 'portrait',  description: '##'},
    { title: 'Mountain Silence',   cat: 'landscape', description: '##'},
    { title: 'Studio Depth',       cat: 'portrait',  description: '##'},
    { title: 'Rain Reflections',   cat: 'street',    description: '##'},
    { title: 'Coastal Cliffs',     cat: 'landscape', description: '##'},
    { title: 'Desert Dunes',       cat: 'landscape', description: '##'},
    { title: 'Night Market',       cat: 'street',    description: '##'},
    { title: 'Open Field',         cat: 'landscape', description: '##'},
    { title: 'Metro Rush',         cat: 'street',    description: '##'},
    { title: 'Backlight',          cat: 'portrait',  description: '##'},
    { title: 'Natural Window',     cat: 'portrait',  description: '##'},
    { title: 'Street Corner',      cat: 'street',    description: '##'},
    { title: 'Soft Morning',       cat: 'portrait',  description: '##'},
    { title: 'Lake Mirror',        cat: 'landscape', description: '##'},
    { title: 'City at Night',      cat: 'street',    description: '##'},
    { title: 'Autumn Tones',       cat: 'landscape', description: '##'},
    { title: 'Rooftop View',       cat: 'street',    description: '##'},
    { title: 'Close Up',           cat: 'portrait',  description: '##'},
    { title: 'Horizon Line',       cat: 'landscape', description: '##'},
  ];
  const meta = catalog[i] || { title: `Photo ${i + 1}`, cat: 'street', description: '' };
  return { id: i + 1, src, ...meta };
});

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox]         = useState(null);

  const filtered = activeFilter === 'all'
    ? PHOTOS
    : PHOTOS.filter(p => p.cat === activeFilter);

  const openLightbox  = (photo) => setLightbox(photo);
  const closeLightbox = (e) => {
    if (!e || e.target.classList.contains('lb-overlay')) setLightbox(null);
  };

  const prevPhoto = () => {
    const idx = filtered.findIndex(p => p.id === lightbox.id);
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]);
  };

  const nextPhoto = () => {
    const idx = filtered.findIndex(p => p.id === lightbox.id);
    setLightbox(filtered[(idx + 1) % filtered.length]);
  };

  return (
    <div className="projects-page">

      {/* Header */}
      <div className="projects-header">
        <h1>Portfolio</h1>
        <p>A collection of moments captured through the lens</p>
      </div>

      {/* Filters */}
      <div className="filter-bar">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Contador */}
      <p className="photo-count">{filtered.length} photo{filtered.length !== 1 ? 's' : ''}</p>

      {/* Grid */}
      <div className="photo-grid">
        {filtered.map(photo => (
          <div
            key={photo.id}
            className="photo-card"
            onClick={() => openLightbox(photo)}
          >
            <img src={photo.src} alt={photo.title} className="photo-img" loading="lazy" />
            <div className="photo-overlay">
              <span className="photo-title">{photo.title}</span>
              <span className="photo-cat">{photo.cat}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lb-overlay" onClick={closeLightbox}>
          <button className="lb-close" onClick={() => setLightbox(null)}>&times;</button>

          <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); prevPhoto(); }}>&#10094;</button>

          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="lb-img" />
            <div className="lb-info">
              <span className="lb-title">{lightbox.title}</span>
              <span className="lb-desc">{lightbox.description}</span>
              <span className="lb-badge">{lightbox.cat}</span>
            </div>
          </div>

          <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); nextPhoto(); }}>&#10095;</button>
        </div>
      )}

    </div>
  );
}

export default Projects