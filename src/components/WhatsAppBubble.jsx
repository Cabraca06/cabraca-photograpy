import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppBubble.css';

const WhatsAppBubble = () => {
  return (
    <a
      href="https://wa.me/+506710147##"
      className="whatsapp-bubble"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppBubble;