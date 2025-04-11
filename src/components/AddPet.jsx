import React from "react";
import { useState, useContext, useEffect } from "react";
import { PetContext } from '../contexts/PetContext';
import { AuthContext } from "../contexts/AuthContext";

export const AddPet = ({setShowForm})=> {
    const {handleCreatePet} = useContext(PetContext);
    const { currentUser } = useContext(AuthContext);

    const [type, setType] = useState("Cat");
    const [breed, setBreed] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [size, setSize] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");
    const [createdBy, setCreatedBy] = useState("");


    // Set the createdBy field automatically when currentUser changes
    useEffect(() => {
        if (currentUser && currentUser._id) {
            setCreatedBy(currentUser._id);
        }
    }, [currentUser]);

    // // Set size to "small" by default when cat is selected
    // useEffect(() => {
    //     if (type === "cat") {
    //         setSize("small");
    //     }
    // }, [type]);

    const submitHandler = (event) => {
        event.preventDefault();
        
        // Create the pet data object with all required fields
        const petData = {
            type,
            breed,
            name,
            gender,
            size,
            description,
            age,
            createdBy // Include the createdBy field from state
        };

        console.log("pet data before submit:", petData)
        
        // Call the context function to handle the creation
        handleCreatePet(event, petData)
            .then(() => {
                // Close the form on success
                setShowForm(false);
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={submitHandler}>
            <h3>Add New Pet</h3>
            <h6 className="closeButton" onClick={() => setShowForm(false)}>x</h6>
            
            <label>
                Pet Name:
                <input
                    type="text"
                    placeholder="Pet Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
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
                    required
                />
            </label>
            
            <label>
                Age:
                <input
                    type="text"
                    placeholder="Age (e.g., '2 years')"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    required
                />
            </label>
            
            <label>
                Gender:
                <select
                    name="gender"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                    required
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
                    required
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
                    required
                />
            </label>

            <button className="submitButton" type="submit">
                Add Pet
            </button>
        </form>
    );
}