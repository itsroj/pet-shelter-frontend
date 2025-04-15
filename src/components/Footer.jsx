import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="mailto:info@petshelter.com" className="footer-item">
          <i className="fas fa-envelope contact-icon"></i>
          info@petshelter.com
        </a>
        <a href="tel:+491234567890" className="footer-item">
          <i className="fas fa-phone contact-icon"></i>
          +49 123 456 7890
        </a>
        <a
          href="https://maps.google.com/?q=Pet+Shelter+Berlin"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-item"
        >
          <i className="fas fa-map-marker-alt contact-icon"></i>
          Berlin, Germany
        </a>
      </div>

      <div className="map-container">
        <iframe
          title="Pet Shelter Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.921264400946!2d13.404954315857364!3d52.52000647981262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c3bbf1ed91%3A0x73b0f2e05b41a98!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1713180000000!5m2!1sen!2sde"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};