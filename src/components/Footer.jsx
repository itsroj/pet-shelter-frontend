import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="mailto:once-upon-a-paw@pet-shelter.com"
          className="footer-item"
        >
          <i className="fas fa-envelope contact-icon"></i>
          once-upon-a-paw@pet-shelter.com
        </a>
        <a href="tel:+493012345678" className="footer-item">
          <i className="fas fa-phone contact-icon"></i>
          +49 3012345678
        </a>
        <a
          href="https://maps.google.com/?q=Pet+Shelter+Berlin"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-item"
        >
          <i className="fas fa-map-marker-alt contact-icon"></i>
          <p>
            Hausvaterweg 39
            <br />
            Berlin, 13057
            <br />
            Germany
          </p>
        </a>
      </div>

      <div className="map-container">
        <iframe
          title="Pet Shelter Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.9857892672845!2d13.514828576908566!3d52.57394437206245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8532524c6b71f%3A0x15dc58a7486b4525!2sHausvaterweg%2039%2C%2013057%20Berlin!5e0!3m2!1sen!2sde!4v1713253535704!5m2!1sen!2sde"
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
