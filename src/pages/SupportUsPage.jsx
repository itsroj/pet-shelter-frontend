import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./SupportUsPage.css";

export const SupportUsPage = () => {
  const [donationAmount, setDonationAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  
  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
    setCustomAmount("");
  }
  
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount(0);
  }

  return (
    <div className="support-page">
      <div className="support-hero">
        <div className="container">
          <h1>Support Our Mission</h1>
          <p>Help us continue providing care and finding homes for animals in need</p>
        </div>
      </div>
      
      <div className="container">
        {/* Donate Section */}
        <section className="support-section" id="donate">
          <h2>Donate</h2>
          <div className="support-section-content">
            <div className="support-text">
              <p>Your financial support makes a direct impact on the lives of our animals. Every donation helps provide food, shelter, medical care, and love to animals waiting for their forever homes.</p>
              <p>Donations are tax-deductible and go directly to supporting our shelter operations and animal care programs.</p>
            </div>
            
            <div className="donation-form">
              <h3>Make a Donation</h3>
              
              <a 
                href="https://www.paypal.com/pool/9e2ePT7gCZ?sr=ancr" 
                target="_blank" 
                className="btn btn-primary donate-btn"
              >
                Donate
              </a>
            </div>
          </div>
        </section>
        
        {/* Sponsorship Section */}
        <section className="support-section" id="sponsorship">
          <h2>Sponsorship</h2>
          <div className="support-section-content">
            <div className="support-text">
              <p>Sponsor a specific animal or an area of our shelter. Sponsorships help provide ongoing care for animals with special needs or help maintain vital shelter facilities.</p>
              <p>As a sponsor, you'll receive regular updates about your sponsored animal or facility area, and recognition on our sponsor wall.</p>
            </div>
            
            <div className="sponsorship-options">
              <div className="sponsorship-option">
                <h3>Sponsor an Animal</h3>
                <p>Choose a specific animal to sponsor. Your monthly contribution helps provide food, medical care, and enrichment for your sponsored pet until they find their forever home.</p>
                <h3>Facility Sponsorship</h3>
                <p>Sponsor a kennel, cat room, play yard, or medical treatment area. Your contribution helps maintain and improve these essential spaces.</p>
                <h3>Corporate Sponsorship</h3>
                <p>Partner with us as a business to make a significant impact while gaining visibility in the community. Custom sponsorship packages available.</p>
                <Link to="/pet-adoption" className="btn btn-secondary">
                  View Animals for Sponsorship
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Volunteering Section */}
        <section className="support-section" id="volunteer">
          <h2>Volunteering / Intern</h2>
          <div className="support-section-content">
            <div className="support-text">
              <p>Give the gift of your time and skills. Our volunteers and interns are essential to our daily operations and provide much-needed socialization and care for our animals.</p>
            </div>
            
            <div className="volunteer-options">
              <div className="volunteer-option">
                <div className="volunteer-icon">
                  <i className="fas fa-paw"></i>
                </div>
                <h3>Animal Care</h3>
                <p>Help with daily animal care, dog walking, cat socialization, and playtime.</p>
              </div>
              
              <div className="volunteer-option">
                <div className="volunteer-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h3>Foster Program</h3>
                <p>Provide temporary home care for animals awaiting adoption, including mothers with nursing babies, animals recovering from surgery, or those who need a break from the shelter environment.</p>
              </div>
              
              <div className="volunteer-option">
                <div className="volunteer-icon">
                  <i className="fas fa-camera"></i>
                </div>
                <h3>Special Skills</h3>
                <p>Contribute professional skills such as photography, marketing, web design, or administrative support.</p>
              </div>
              
              <div className="volunteer-option">
                <div className="volunteer-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3>Internships</h3>
                <p>Gain hands-on experience in animal welfare, shelter management, veterinary assistance, or nonprofit operations. Perfect for students in relevant fields.</p>
              </div>
            </div>
            
            <div className="volunteer-cta">
              <h3>Ready to join our team?</h3>
              <p>Fill out our volunteer application form to get started. Training sessions are held monthly.</p>
              <a href={`mailto:once-upon-a-paw@pet-shelter.com?subject=Regarding: Volunteering&body=Hello,%0A%0AI'm contacting you regarding the volunteering program.%0A%0AThank you!`}
                className="btn btn-accent"
              >
              Apply to Volunteer
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
