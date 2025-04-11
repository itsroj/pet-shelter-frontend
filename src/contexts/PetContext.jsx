import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PetContext = createContext();

const PetContextWrapper = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);
  const nav = useNavigate();
  const { currentUser, isLoggedIn } = useContext(AuthContext);

  // Check if current user has admin role
  const isAdmin = () => {
    return currentUser && currentUser.role === "admin";
  };
  
  // console.log("this is curr user", currentUser)
  useEffect(() => {
    getAllPets();
  }, []);

  function getAllPets() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/pet/all-pets`)
      .then((res) => {
        console.log("all pets", res);
        setPets(res.data.allPets);
        // setError(null);
      })
      .catch((err) => {
        console.log(err);
        // setError("Failed to fetch pets");
      });
  }

  function getOnePet(petId) {
    return axios
      .get(`${import.meta.env.VITE_API_URL}/pet/one-pet/${petId}`)
      .then((res) => {
        console.log("one pet", res);
        setSelectedPet(res.data); // Store in separate state
        return res.data; // Return for component use
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch pet");
        throw err; // Rethrow to allow error handling in components
      });
  }

  async function handleCreatePet(event, petData) {
    event.preventDefault();
    

    console.log("pet create function triggered!")
    // Check for admin permission
    if (!isAdmin()) {
    //   setError("Admin permission required to create pets");
      return;
    }
    
    // Create form data for image upload
    const myFormData = new FormData();

    console.log("pet data inside context:", petData)
    
    // Add pet properties to form data matching the schema
    myFormData.append("type", petData.type);          // "cat" or "dog"
    myFormData.append("breed", petData.breed);        // required
    myFormData.append("name", petData.name);          // required
    myFormData.append("age", petData.age);            // required
    myFormData.append("gender", petData.gender);      // "male" or "female"
    
    if (petData.size) {
      myFormData.append("size", petData.size);        // "small", "medium", or "big" (optional)
    }
    
    myFormData.append("description", petData.description); // required
    
    console.log("my form data before image upload:",myFormData)
    // Add image if provided (required field)
    if (event.target.image.files[0]) {
      const image = event.target.image.files[0];
      myFormData.append("image", image);
    } else {
    //   setError("Image is required");
      return;
    }

    console.log("my form data after image upload:", myFormData)
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/pet/create`,
        myFormData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          }
        }
      );
      console.log("pet created", data);
      setPets([data, ...pets]);
    //   setError(null);
      nav("/pet-adoption");
    } catch (error) {
      console.log(error);
    //   setError("Failed to create pet");
    }
  }

  function handleUpdatePet(petId, updatedData) {
    // Check for admin permission
    if (!isAdmin()) {
    //   setError("Admin permission required to update pets");
      return;
    }

    const myFormData = new FormData();
    
    // Add pet properties to form data
    Object.keys(updatedData).forEach(key => {
      if (key !== 'image') {
        myFormData.append(key, updatedData[key]);
      }
    });
    
    // Add image if provided
    if (updatedData.image) {
      myFormData.append("imageUrl", updatedData.image);
    }

    axios
      .patch(
        `${import.meta.env.VITE_API_URL}/pet/update-pet/${petId}`,
        myFormData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          }
        }
      )
      .then((res) => {
        console.log("pet updated", res);
        const updatedPets = pets.map(pet => 
          pet._id === petId ? res.data : pet
        );
        setPets(updatedPets);
        // setError(null);
      })
      .catch((err) => {
        console.log(err);
        // setError("Failed to update pet");
      });
  }

  function handleDeletePet(petId) {
    // Check for admin permission
    if (!isAdmin()) {
    //   setError("Admin permission required to delete pets");
      return;
    }

    axios
      .delete(
        `${import.meta.env.VITE_API_URL}/pet/delete-pet/${petId}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          }
        }
      )
      .then((res) => {
        console.log("pet removed from DB", res);
        const filteredPets = pets.filter(pet => pet._id !== petId);
        setPets(filteredPets);
        // setError(null);
      })
      .catch((err) => {
        console.log(err);
        // setError("Failed to delete pet");
      });
  }

  return (
    <PetContext.Provider
      value={{
        pets,
        setPets,
        selectedPet,
        handleCreatePet,
        handleUpdatePet,
        handleDeletePet,
        getAllPets,
        getOnePet, 
        error,
        isAdmin: isAdmin()
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export { PetContext, PetContextWrapper };