import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { PetContext } from '../contexts/PetContext';
import { AddPet } from '../components/AddPet';

export const DogPage = () => {
  const { pets, isAdmin, handleDeletePet } = useContext(PetContext)
  
  // console.log("Dog pets:", pets);

  const setShowForm = () => {
    // console.log("just a test prop!")
  }
  return (
    <div>
      <h2>Dog Adoption</h2>
      {pets.length === 0 ? (
        <p>No dogs available for adoption at the moment.</p>
      ) : (
        <div>
          {pets.filter(pet => pet.type === "dog").map((dog) => (
            <div key={dog._id}>
              <Link to={`/pet-details/${dog._id}`}>
                <img src={dog.image} alt={`${dog.name} - ${dog.breed}`} />
              </Link>
              <h3>{dog.name}</h3>
              <p>Breed: {dog.breed}</p>
              <p>Age: {dog.age}</p>
              <p>Gender: {dog.gender}</p>
              <p>Size: {dog.size}</p>
              <Link to={`/pet-details/${dog._id}`}>Details</Link>
            </div>
          ))}
        </div>
      )}
      {isAdmin && (<AddPet setShowForm={setShowForm} />)}
      
    </div>
  )
}