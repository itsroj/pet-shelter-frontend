import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { PetContext } from '../contexts/PetContext';
import "./Homepage.css"

export const HomepagePage = () => {
  const { pets, getAllPets } = useContext(PetContext);
  
  // load all the pets
  useEffect(() => {
    if (getAllPets) {
      getAllPets();
    }
  }, [getAllPets]);
  
  // newest animal in shelter (last 4)
  const recentPets = pets?.slice(0, 4) || [];
  
  return (
    <div className="homepage">
      {/* banner section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find your new best friend</h1>
          <p>Our loving pets are waiting for a new home</p>
          <Link to="/pet-adoption" className="btn btn-primary">View pets</Link>
        </div>
      </section>
      
      {/* about */}
      <section className="about-preview">
        <div className="container">
          <h2>Welcome to the pet shelter</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
              We are a committed team dedicated to the rescue, care and rehoming of pets in need. 
              For over 10 years we have been providing abandoned and abused pets have found a temporary home with us.
              </p>
              <Link to="/about" className="btn btn-secondary">More about us</Link>
            </div>
            <div className="about-image">
              <img src="/images/shelter-team.jpg" alt="Our team" />
            </div>
          </div>
        </div>
      </section>
      
      {/* newest pets */}
      <section className="recent-pets">
        <div className="container">
          <h2>Newest Residents</h2>
          <div className="pets-grid">
            {recentPets.length > 0 ? (
              recentPets.map((pet) => (
                <div key={pet._id} className="pet-card">
                  <div className="pet-image-container">
                    <img src={pet.image} alt={pet.name} className="pet-image" />
                  </div>
                  <div className="pet-info">
                    <h3>{pet.name}</h3>
                    <p>{pet.breed}, {pet.age}</p>
                    <Link to={`/pet-details/${pet._id}`} className="btn btn-sm">Details</Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-pets-message">Currently no pets available</p>
            )}
          </div>
          <div className="more-pets">
            <Link to="/pet-adoption" className="btn btn-outline">View all pets</Link>
          </div>
        </div>
      </section>
      
      {/* types of pet */}
      <section className="pet-types">
        <div className="container">
          <h2>What kind of pet are you looking for?</h2>
          <div className="type-cards">
            <div className="type-card">
              <Link to="/pet-adoption/cat" className="type-link">
                <div className="type-image cat-image"></div>
                <h3>Cats</h3>
                <p>Our cuddly velvet paws</p>
              </Link>
            </div>
            <div className="type-card">
              <Link to="/pet-adoption/dog" className="type-link">
                <div className="type-image dog-image"></div>
                <h3>Dogs</h3>
                <p>Faithful companions for every day</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* support section */}
      <section className="support-cta">
        <div className="container">
          <h2>Help us to help</h2>
          <p>We rely on your support to provide our animals with the best possible care.</p>
          <Link to="/support" className="btn btn-accent">Support now</Link>
        </div>
      </section>
    </div>
  )
}
