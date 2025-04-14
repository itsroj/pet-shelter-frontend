import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { PetContext } from '../contexts/PetContext';
import { useParams } from "react-router-dom";

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
    const [image, setImage] = useState ("");
    const [createdBy, setCreatedBy] = useState ("");


    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_API_URL}/pet/one-pet/${petId}`)
          .then(({ data }) => {
            console.log("here is the data for the update:", import.meta.env.VITE_APP_URL, data);
            setName(data.name);
            setType(data.type);
            setBreed(data.breed);
            setAge(data.age);
            setDescription(data.description);
            setSize(data.size);
            setImage(data.image);
            setCreatedBy(data.createdBy);
          })
          .catch((err) => console.log(err));
      }, [petId]);



  return (
    <div>
      <form onSubmit={(event) => handleUpdatePet(event, petId, {name, type, breed, age, gender, size, description, image, createdBy})}>
            <h3>Edit Pet</h3>
            <h6 className="closeButton" onClick={() => setShowEditForm(false)}>x</h6>
            
            <label>
                Pet Name:
                <input
                    type="text"
                    placeholder="Pet Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            
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
            
            <label>
                Breed:
                <input
                    type="text"
                    placeholder="Breed"
                    value={breed}
                    onChange={(event) => setBreed(event.target.value)}
                />
            </label>
            
            <label>
                Age:
                <input
                    type="text"
                    placeholder="Age (e.g., '2 years')"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />
            </label>
            
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
            
            {/* Only show size field for dogs */}
            {type !== "cat" && (
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
            )}
            
            <label>
                Description:
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            
            {/* Hidden input for createdBy - user won't see this */}
            <input
                type="hidden"
                name="createdBy"
                value={createdBy}
            />

            <label>
                Image:
                <input
                    type="file"
                    name="image"
                />
            </label>

            <button className="submitButton" type="submit">
               Update Pet
            </button>
        </form>
    </div>
  )
}