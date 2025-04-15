import React from 'react';
import { Link } from "react-router-dom";
import './PetAdoption.css';

export const PetAdoptionPage = () => {
  return (
    <div className="pet-adoption-page">
      <div className="adoption-hero">
        <div className="container">
          <h1>Find Your Perfect Companion</h1>
          <p>Our shelter is home to many loving animals looking for their forever homes. 
             Browse available pets and find your new best friend.</p>
        </div>
      </div>
      
      <section className="pet-categories">
        <div className="container">
          <h2>What kind of pet are you looking for?</h2>
          
          <div className="category-cards">
            <div className="category-card">
              <Link to="/pet-adoption/cat" className="category-link">
                <div className="category-image cat-image"></div>
                <div className="category-info">
                  <h3>Cats</h3>
                  <p>Playful, independent, and loving companions</p>
                  <span className="view-pets">View Cats</span>
                </div>
              </Link>
            </div>
            
            <div className="category-card">
              <Link to="/pet-adoption/dog" className="category-link">
                <div className="category-image dog-image"></div>
                <div className="category-info">
                  <h3>Dogs</h3>
                  <p>Loyal, energetic, and devoted friends</p>
                  <span className="view-pets">View Dogs</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="adoption-process">
        <div className="container">
          <h2>Our Adoption Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Browse Available Pets</h4>
              <p>Look through our selection of cats and dogs to find your perfect match.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Meet Your Match</h4>
              <p>Visit our shelter to meet the pet you're interested in adopting.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Complete Adoption</h4>
              <p>Fill out the necessary paperwork and welcome your new pet home!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
