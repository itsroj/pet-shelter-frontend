import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { PetContext } from '../contexts/PetContext';
import { AddPet } from '../components/AddPet';
import './CatDogPage.css';

export const CatPage = () => {
  const { pets, isAdmin, handleDeletePet } = useContext(PetContext)
  
  // console.log("Cat pets:", pets);

  const setShowForm = () => {
    // console.log("just a test prop!")
  }

  if (!pets) {
    return <div className="loading-container"><p>Loading cats...</p></div>
}

  return (
    <div className="pet-listing-page">
      <div className="pet-header">
        <h2 className="pet-title">Cat Adoption</h2>
        <p>Find your perfect feline companion. Our cats are loving, playful, and ready for their forever homes.</p>
      </div>
      
      {pets.length === 0 ? (
        <p className="no-pets-message">No cats available for adoption at the moment.</p>
      ) : (
        <div className="pets-container">
          {pets.filter(pet => pet.type === "cat").map((cat) => (
            <div key={cat._id} className="pet-item">
              <div className="pet-image-wrapper">
                <Link to={`/pet-details/${cat._id}`} className="pet-image-link">
                  <img src={cat.image} alt={`${cat.name} - ${cat.breed}`} className="pet-image" />
                </Link>
              </div>
              <div className="pet-content">
                <h3 className="pet-name">{cat.name}</h3>
                <p className="pet-attribute"><strong>Breed:</strong> {cat.breed}</p>
                <p className="pet-attribute"><strong>Age:</strong> {cat.age}</p>
                <p className="pet-attribute"><strong>Gender:</strong> {cat.gender}</p>
                <Link to={`/pet-details/${cat._id}`} className="pet-details-btn">Details</Link>
              </div>
            </div>
          ))}
        </div>
      )}
      {isAdmin && (
        <div className="admin-add-section">
          <AddPet setShowForm={setShowForm} />
        </div>
      )}
    </div>
  )
}
