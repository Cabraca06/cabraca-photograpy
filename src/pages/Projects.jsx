import React, { useState } from 'react'
import '../styles/Projects.css'
import photoAssets from '../components/img';
import WhatsAppBubble from '../components/WhatsAppBubble';

const CATEGORIES = ['all', 'Animals', 'Street', 'Nature', 'Publicity', 'Sunset'];

const PHOTO_META = {
  // --- Animales / retratos de gatos ---
  img1:  { title: 'Golden Hour',      cat: 'Animals', description: 'Un gato tomando el sol en la tarde, bostezando y estirando sus patas, capturando la esencia de la tranquilidad y la belleza de la vida cotidiana.' },
  img2:  { title: 'Urban Steps',      cat: 'Animals', description: 'Boby se ubica en una zona donde la luz ilumina el rostro y posa para la cámara, mostrando su personalidad y la conexión con su entorno.' },
  img5:  { title: 'Morning Light',    cat: 'Animals', description: 'Mostrando su enojo y su mirada penetrante, capturando la esencia de su personalidad y la conexión con su entorno.' },
  img7:  { title: 'Rain Reflections', cat: 'Animals', description: 'Un gato en un día lluvioso, sin perder de vista lo que lo rodea.' },
  img8:  { title: 'Coastal Cliffs',   cat: 'Animals', description: '##' },
  img9:  { title: 'Desert Dunes',     cat: 'Animals', description: '##' },
  img10: { title: 'Night Market',     cat: 'Animals', description: '##' },
  img33: { title: 'Quiet Gaze',       cat: 'Nature', description: '##' },

  // --- Naturaleza / flores ---
  img3:  { title: 'City Pulse',    cat: 'Nature', description: 'Las flores con gotas de lluvia, capturando la frescura y la belleza de la naturaleza.' },
  img4:  { title: 'Forest Path',   cat: 'Nature', description: 'Plano en el cual se muestra una flor con sus detalles y un color vibrante.' },
  img11: { title: 'Open Field',    cat: 'Nature', description: '##' },
  img16: { title: 'Soft Morning',  cat: 'Nature', description: '##' },
  img17: { title: 'Lake Mirror',   cat: 'Nature', description: '##' },
  img18: { title: 'City at Night', cat: 'Nature', description: 'Flor con luminosidad y un color vibrante, capturando la belleza de la naturaleza en su máxima expresión.' },
  img19: { title: 'Autumn Tones',  cat: 'Nature', description: '##' },
  img20: { title: 'Rooftop View',  cat: 'Nature', description: '##' },
  img21: { title: 'Close Up',      cat: 'Nature', description: '##' },

  // --- Street ---
  img12: { title: 'Metro Rush',  cat: 'Street', description: '##' },
  img13: { title: 'Backlight',   cat: 'Street', description: '##' },
  img25: { title: 'Airport',     cat: 'Street', description: '##' },

  // --- Sunset ---
  img14: { title: 'Natural Window', cat: 'Sunset', description: '##' },
  img15: { title: 'Street Corner',  cat: 'Sunset', description: '##' },

  // --- Publicity (publi1.jpg ... publi7.jpg) ---
  img22: { title: 'Night Walk',  cat: 'Publicity', description: '##' },
  img23: { title: 'Terminal',    cat: 'Publicity', description: '##' },
  img24: { title: 'City Grid',   cat: 'Publicity', description: '##' },
  img26: { title: 'Publicity 1', cat: 'Publicity', description: '##' },
  img27: { title: 'Publicity 2', cat: 'Publicity', description: '##' },
  img28: { title: 'Publicity 3', cat: 'Publicity', description: '##' },
  img29: { title: 'Publicity 4', cat: 'Publicity', description: '##' },
  img30: { title: 'Publicity 5', cat: 'Publicity', description: '##' },
  img31: { title: 'Publicity 6', cat: 'Publicity', description: '##' },
  img32: { title: 'Publicity 7', cat: 'Publicity', description: '##' },
};

// Se construye el arreglo final combinando cada import con SU metadata,
// usando la clave (img1, img2...) como puente. Si alguna imagen no tiene
// entrada en PHOTO_META, usa un valor por defecto en vez de romperse.
const PHOTOS = Object.entries(photoAssets).map(([key, src], i) => {
  const meta = PHOTO_META[key] || { title: `Photo ${i + 1}`, cat: 'Street', description: '' };
  return { id: i + 1, key, src, ...meta };
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
    <WhatsAppBubble /> 
    </div>
  );
}

export default Projects