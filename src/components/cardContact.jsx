import React, { useState } from 'react'
import '../styles/ContactCard.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Construimos el mensaje para WhatsApp
    const whatsappNumber = '50671014718'; // Tu número de WhatsApp sin '+' ni símbolos
    const text = `¡Hola! Soy ${form.name}.\n\nEmail: ${form.email}\n\nMensaje: ${form.message}`;
    const encodedText = encodeURIComponent(text);

    // 2. Creamos la URL y la abrimos en una nueva pestaña
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(url, '_blank');

    // 3. Mostramos el mensaje de éxito y reseteamos el formulario
    setSubmitted(true);
    // Opcional: resetear el formulario después de un tiempo
    setTimeout(() => setSubmitted(false), 5000); // El formulario reaparece después de 5 segundos
  };

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contactame</h1>
        <p>Trabajemos juntos en tu proximo proyecto</p>
      </div>

      <div className="contact-grid">

        {/* Formulario */}
        <div className="contact-card">
          <h2>Send a message</h2>

          {submitted ? (
            <div className="success-msg">
              <span className="success-icon">&#128172;</span>
              <p>¡Gracias! Serás redirigido a WhatsApp para enviar tu mensaje.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">Send message</button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="contact-card">
          <h2>Contact info</h2>

          <div className="info-block">
            <div className="info-item">
              <div className="info-icon">&#9993;</div>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">richardcabraca012@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">&#9743;</div>
              <div>
                <p className="info-label">Phone</p>
                <p className="info-value"> 7##1-4718</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">&#9711;</div>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">Heredia, Costa Rica</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">&#9201;</div>
              <div>
                <p className="info-label">Response time</p>
                <p className="info-value">Within 24 hours</p>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <p className="info-label" style={{ marginBottom: '10px' }}>Social media</p>
          <div className="social-row">
            <a href="https://www.instagram.com/mirrorless__photography/" target="_blank" rel="noreferrer" className="social-btn">Instagram</a>
           {/*  <a href="https://linkedin.com"  target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>*/}
            <a href="https://wa.me/+506710147##"        target="_blank" rel="noreferrer" className="social-btn">WhatsApp</a>
          </div>

          <hr className="divider" />

          <div className="availability">
            <span className="dot-green"></span>
            <span className="avail-text">Available for new projects</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact