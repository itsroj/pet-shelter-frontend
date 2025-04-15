import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PetContext } from '../contexts/PetContext';
import { useParams } from "react-router-dom";
import './EditPetArticle.css'

export const EditPet = ({ setShowEditForm, onUpdateSuccess}) => {

    const { pets, handleUpdatePet } = useContext(PetContext);
    const { petId } = useParams()

    const [name, setName] = useState ("");
    const [type, setType] = useState ("");
    const [breed, setBreed] = useState ("");
    const [age,  setAge] = useState ("");
    const [gender, setGender] = useState ("");
    const [size, setSize] = useState ("");
    const [description, setDescription] = useState ("");
    const [image, setImageFile] = useState();

    const handleImageChange = (event) => {
      if (event.target.files[0]) {
        setImageFile(event.target.files[0]);
      }
    };

    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_API_URL}/pet/one-pet/${petId}`)
          .then(({ data }) => {
            console.log("here is the data for the update:", import.meta.env.VITE_API_URL, data);
            setName(data.name);
            setType(data.type);
            setBreed(data.breed);
            setAge(data.age);
            setDescription(data.description);
            setSize(data.size);
            setImageFile(data.image);
            setGender(data.gender);
          })
          .catch((err) => console.log(err));
      }, [petId]);



  return (
    <div className="form-overlay">
        <form className="pet-form" onSubmit={async (event) => {
            handleUpdatePet(event, petId, {name, type, breed, age, image, gender, size, description})
            setShowEditForm(false);
        }}>
            <div className="form-header">
                <h3>Edit Pet</h3>
                <h6 className="closeButton" onClick={() => setShowEditForm(false)}>x</h6>
            </div>
            
            <div className="form-group">
                <label>
                    Pet Name:
                    <input
                        type="text"
                        placeholder="Pet Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
            </div>
            
            <div className="form-group">
                <label>
                    Pet Type:
                    <select
                        name="type"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                        required
                    >
                        <option value="">Select type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                </label>
            </div>
            
            <div className="form-group">
                <label>
                    Breed:
                    <input
                        type="text"
                        placeholder="Breed"
                        value={breed}
                        onChange={(event) => setBreed(event.target.value)}
                    />
                </label>
            </div>
            
            <div className="form-group">
                <label>
                    Age:
                    <input
                        type="text"
                        placeholder="Age (e.g., '2 years')"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </label>
            </div>
            
            <div className="form-group">
                <label>
                    Gender:
                    <select
                        name="gender"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
            </div>
            
            {/* Only show size field for dogs */}
            {type !== "cat" && (
                <div className="form-group">
                    <label>
                        Size:
                        <select
                            name="size"
                            value={size}
                            onChange={(event) => setSize(event.target.value)}
                        >
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="big">Big</option>
                        </select>
                    </label>
                </div>
            )}
            
            <div className="form-group">
                <label>
                    Description:
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </label>
            </div>
            
            <div className="form-group">
                <label>
                    Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                    />
                </label>
            </div>

            <button className="submitButton" type="submit">
               Update Pet
            </button>
        </form>
    </div>
  )
}