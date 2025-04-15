import React from 'react';
import { Link } from "react-router-dom";
import "./AboutPage.css";

export const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <h1>About Our Shelter</h1>
          <p>Providing care, love, and forever homes since 2013</p>
        </div>
      </div>
      
      {/* About Shelter Section */}
      <section className="about-section" id="about-shelter">
        <div className="container">
          <h2>Our Shelter</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Our shelter is a safe haven for animals in need, providing temporary housing, medical care, and rehabilitation until they find their forever homes. We believe every animal deserves love, respect, and a chance at a happy life.</p>
              <p>Our facility includes:</p>
              <ul className="facility-list">
                <li>Spacious indoor and outdoor play areas</li>
                <li>Clean, comfortable kennels and cat condos</li>
                <li>On-site veterinary clinic</li>
                <li>Grooming station</li>
                <li>Training and socialization spaces</li>
                <li>Adoption meet-and-greet rooms</li>
              </ul>
            </div>
            
            <div className="about-gallery">
              <div className="gallery-image">
                <img src="/images/shelter-exterior.jpg" alt="Shelter exterior" />
              </div>
              <div className="gallery-image">
                <img src="/images/dog-play-area.jpg" alt="Dog play area" />
              </div>
              <div className="gallery-image">
                <img src="/images/cat-room.jpg" alt="Cat room" />
              </div>
              <div className="gallery-image">
                <img src="/images/vet-clinic.jpg" alt="Veterinary clinic" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="about-section" id="about-us">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content reverse">
            <div className="team-image">
              <img src="/images/shelter-team.jpg" alt="Our dedicated team" />
            </div>
            
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>To rescue, rehabilitate, and rehome animals in need while educating the community on responsible pet ownership and animal welfare.</p>
              
              <h3>Our Story</h3>
              <p>Founded in 2013 by a group of passionate animal lovers, our shelter began as a small rescue operation and has grown into a comprehensive animal welfare organization serving hundreds of pets each year.</p>
              
              <h3>Our Team</h3>
              <p>Our dedicated staff includes experienced animal care specialists, veterinarians, trainers, and administrative professionals, all supported by a network of volunteers who donate their time and skills to help our animals thrive.</p>
              
              <h3>Our Values</h3>
              <ul className="values-list">
                <li><strong>Compassion:</strong> We treat every animal with kindness and respect</li>
                <li><strong>Integrity:</strong> We maintain the highest ethical standards in all we do</li>
                <li><strong>Education:</strong> We believe in sharing knowledge to improve animal welfare</li>
                <li><strong>Community:</strong> We work together with our community to create positive outcomes for pets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section className="about-section" id="contact-us">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-intro">Have a question? Looking to adopt? Missing a pet? We're here to help!</p>
              <p>If you've lost a pet or found a stray, please contact us immediately. Time is critical in reuniting lost pets with their families. We can check if your missing pet has been brought to our shelter or help you create and distribute a missing pet report.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Address</h4>
                    <p>123 Rescue Lane<br />Berlin, 10115<br />Germany</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+49 30 1234 5678</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>info@petshelter.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div>
                    <h4>Hours</h4>
                    <p>Monday - Friday: 10:00 - 18:00<br />
                    Saturday: 10:00 - 16:00<br />
                    Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-cta">
                <Link to="/support" className="btn btn-primary">Support Us</Link>
                <Link to="/pet-adoption" className="btn btn-secondary">Adopt a Pet</Link>
              </div>
            </div>
            
            <div className="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654394349496!2d13.3826757!3d52.5200066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c5dd1b3a41%3A0xdede95b93e24aaae!2sBerlin%20Central%20Station!5e0!3m2!1sen!2sde!4v1650000000000!5m2!1sen!2sde" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shelter Location">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

