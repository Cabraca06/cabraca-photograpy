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
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Get in touch</h1>
        <p>Let's work together on your next project</p>
      </div>

      <div className="contact-grid">

        {/* Formulario */}
        <div className="contact-card">
          <h2>Send a message</h2>

          {submitted ? (
            <div className="success-msg">
              <span className="success-icon">&#10003;</span>
              <p>Message sent! I'll get back to you within 24 hours.</p>
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
                <p className="info-value">cabraca@photography.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">&#9743;</div>
              <div>
                <p className="info-label">Phone</p>
                <p className="info-value">(123) 4##-7#90</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">&#9711;</div>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">123 Main Street, Costa Rica</p>
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
            <a href="https://wa.me/+50671014718"        target="_blank" rel="noreferrer" className="social-btn">WhatsApp</a>
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