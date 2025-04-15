import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { PetContext } from '../contexts/PetContext';
import { AddPet } from '../components/AddPet';
import './CatDogPage.css';

export const DogPage = () => {
  const { pets, isAdmin, handleDeletePet } = useContext(PetContext)
  
  const setShowForm = () => {
    // console.log("just a test prop!")
  }
  return (
    <div className="pet-listing-page">
      <div className="pet-header">
        <h2 className="pet-title">Dog Adoption</h2>
        <p>Find your perfect canine companion. Our dogs are loyal, friendly, and ready for their forever homes.</p>
      </div>
      
      {pets.length === 0 ? (
        <p className="no-pets-message">No dogs available for adoption at the moment.</p>
      ) : (
        <div className="pets-container">
          {pets.filter(pet => pet.type === "dog").map((dog) => (
            <div key={dog._id} className="pet-item">
              <div className="pet-image-wrapper">
                <Link to={`/pet-details/${dog._id}`} className="pet-image-link">
                  <img src={dog.image} alt={`${dog.name} - ${dog.breed}`} className="pet-image" />
                </Link>
              </div>
              <div className="pet-content">
                <h3 className="pet-name">{dog.name}</h3>
                <p className="pet-attribute"><strong>Breed:</strong> {dog.breed}</p>
                <p className="pet-attribute"><strong>Age:</strong> {dog.age}</p>
                <p className="pet-attribute"><strong>Gender:</strong> {dog.gender}</p>
                <Link to={`/pet-details/${dog._id}`} className="pet-details-btn">Details</Link>
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