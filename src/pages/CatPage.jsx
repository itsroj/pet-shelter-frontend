import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { PetContext } from '../contexts/PetContext';

export const CatPage = () => {

  const { pets, isAdmin } = useContext(PetContext)
  console.log("here are some pets", pets)
  console.log("is admin?", isAdmin)

  return (
    <div>
      
    </div>
  )
}

// export default CatPage
