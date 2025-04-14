import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { PetContext } from '../contexts/PetContext';
import { AddPet } from '../components/AddPet';

export const CatPage = () => {
  const { pets, isAdmin, handleDeletePet } = useContext(PetContext)
  
  // console.log("Cat pets:", pets);

  const setShowForm = () => {
    // console.log("just a test prop!")
  }
  return (
    <div>
      <h2>Cat Adoption</h2>
      {pets.length === 0 ? (
        <p>No cats available for adoption at the moment.</p>
      ) : (
        <div>
          {pets.filter(pet => pet.type === "cat").map((cat) => (
            <div key={cat._id}>
              <Link to={`/pet-details/${cat._id}`}>
                <img src={cat.image} alt={`${cat.name} - ${cat.breed}`} />
              </Link>
              <h3>{cat.name}</h3>
              <p>Breed: {cat.breed}</p>
              <p>Age: {cat.age}</p>
              <p>Gender: {cat.gender}</p>
              <Link to={`/pet-details/${cat._id}`}>Details</Link>
            </div>
          ))}
        </div>
      )}
      {isAdmin && (<AddPet setShowForm={setShowForm} />)}
      
    </div>
  )
}
