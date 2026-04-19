import React, { useState } from 'react'
import '../styles/Projects.css'
import { photoArray } from '../components/img';

// =====================================================
// CATEGORÍAS — agrega o elimina categorías aquí
// Para añadir una nueva, agrégala al array y asígnala
// en PHOTOS con el mismo valor en "cat"
// =====================================================
const CATEGORIES = ['all', 'portrait', 'landscape', 'street'];

// =====================================================
// FOTOS — edita títulos, categorías y descripciones
// Las imágenes vienen automáticamente desde img.jsx
// Para agregar más: importa en img.jsx y listo
// =====================================================
const PHOTOS = photoArray.map((src, i) => {
  const catalog = [
    { title: 'Golden Hour',        cat: 'portrait',  description: 'Natural light portrait during sunset.'       },
    { title: 'Urban Steps',        cat: 'street',    description: 'Street life captured in motion.'             },
    { title: 'City Pulse',         cat: 'street',    description: 'Urban energy in motion.'                     },
    { title: 'Forest Path',        cat: 'landscape', description: 'A quiet walk through dense forest.'          },
    { title: 'Morning Light',      cat: 'portrait',  description: 'Soft morning light on a natural backdrop.'   },
    { title: 'Golden Hour II',     cat: 'portrait',  description: 'Second take on the golden hour session.'     },
    { title: 'Studio Light',       cat: 'portrait',  description: 'Controlled studio lighting session.'         },
    { title: 'Mountain Silence',   cat: 'landscape', description: 'Peaceful mountain scenery at dawn.'          },
    { title: 'Studio Depth',       cat: 'portrait',  description: 'Playing with depth and shadows.'             },
    { title: 'Rain Reflections',   cat: 'street',    description: 'Wet streets after a night rain.'             },
    { title: 'Coastal Cliffs',     cat: 'landscape', description: 'Dramatic coastline at high tide.'            },
    { title: 'Desert Dunes',       cat: 'landscape', description: 'Minimalist dunes under clear sky.'           },
    { title: 'Night Market',       cat: 'street',    description: 'Warm lights of a local night market.'        },
    { title: 'Open Field',         cat: 'landscape', description: 'Wide open field at dusk.'                    },
    { title: 'Metro Rush',         cat: 'street',    description: 'Peak hour at the metro station.'             },
    { title: 'Backlight',          cat: 'portrait',  description: 'Strong backlight creating a silhouette.'     },
    { title: 'Natural Window',     cat: 'portrait',  description: 'Window light defining the subject.'          },
    { title: 'Street Corner',      cat: 'street',    description: 'A quiet corner in the old town.'             },
    { title: 'Soft Morning',       cat: 'portrait',  description: 'Gentle morning light, minimal setup.'        },
    { title: 'Lake Mirror',        cat: 'landscape', description: 'Perfect reflection on a still lake.'         },
    { title: 'City at Night',      cat: 'street',    description: 'Long exposure of the city at night.'         },
    { title: 'Autumn Tones',       cat: 'landscape', description: 'Warm autumn colors in a city park.'          },
    { title: 'Rooftop View',       cat: 'street',    description: 'City skyline from a rooftop.'                },
    { title: 'Close Up',           cat: 'portrait',  description: 'Tight framing highlighting expression.'      },
    { title: 'Horizon Line',       cat: 'landscape', description: 'Clean horizon at the edge of the sea.'       },
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