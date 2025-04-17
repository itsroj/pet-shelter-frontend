import React from 'react';
import { Link } from "react-router-dom";
import "./AboutPage.css";
import aboutUsImg from '../images/team-about-us.png'
import ShelterPlay from "../images/shelter-play.png"
import ShelterGarden from "../images/shelter-garden.png"
import ShelterCat from "../images/shelter-cat-room.png"
import ShelterClinic from "../images/shelter-clinic.png"

export const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <h1>About Our Shelter</h1>
          <p>Providing care, love, and forever homes since 2025</p>
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
                <img src={ ShelterPlay } alt="Shelter exterior" />
              </div>
              <div className="gallery-image">
                <img src={ ShelterGarden } alt="Dog play area" />
              </div>
              <div className="gallery-image">
                <img src={ ShelterCat } alt="Cat room" />
              </div>
              <div className="gallery-image">
                <img src={ ShelterClinic } alt="Veterinary clinic" />
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
              <img src= {aboutUsImg} alt="Our team" />
            </div>
            
            <div className="about-text">
              <h3>Our Story</h3>
              <p>Hello and welcome!
We're Rojda and Sosha — two aspiring web developers on the final stretch of our full-time Web Development Bootcamp journey.
For our capstone project, we wanted to create something that truly matters — not just to us, but to the world around us.
That’s how "Once Upon a Paw" Shelter came to life.
We believe that every animal deserves a loving home, and that shelters can be more than just temporary places — they can 
be warm, inviting spaces filled with hope. Sadly, we noticed that many animal shelter websites in Germany lack modern, 
thoughtful design. So we set out to change that.
This project is our tribute to the animals who wait patiently for a second chance — and to the people who open their 
hearts and homes to them. Through intuitive functionality and a soft, welcoming design, our goal was to build a platform 
where adoption feels personal, emotional, and easy.
Whether you're here to adopt, volunteer, or simply browse the faces of those looking for love — we're so happy to have 
you here. Thank you for being part of this mission.</p>
          
              <h3>Our Mission</h3>
              <p>To rescue, rehabilitate, and rehome animals in need while educating the community on responsible pet ownership and animal welfare.</p>
              
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
                    <p>Hausvaterweg 39<br />Berlin, 13057<br />Germany</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+493012345678" className="footer-item">
          +49 3012345678
        </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:once-upon-a-paw@pet-shelter.com" className="footer-item">
          once-upon-a-paw@pet-shelter.com
        </a>
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
                <Link to="/pet-adoption" className="btn btn-primary">Adopt a Pet</Link>
              </div>
            </div>
            
            <div className="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.9857892672845!2d13.514828576908566!3d52.57394437206245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8532524c6b71f%3A0x15dc58a7486b4525!2sHausvaterweg%2039%2C%2013057%20Berlin!5e0!3m2!1sen!2sde!4v1713253535704!5m2!1sen!2sde"
                width="100%" 
                height="500" 
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

