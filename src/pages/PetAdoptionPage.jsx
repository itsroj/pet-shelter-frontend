import React from 'react'
import { Link } from "react-router-dom";

export const PetAdoptionPage = () => {
  return (
    <div>
      <h3>What kind of pet are you looking for?</h3>
      <div>
        <div>
          <Link to="/pet-adoption/cat">
            <p>Cats</p>
          </Link>
        </div>
        <div>
          <Link to="/pet-adoption/dog">
            <p>Dogs</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

// export default PetAdoptionPage
