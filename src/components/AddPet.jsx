import React from "react";
import { useState, useContext, useEffect } from "react";
import { PetContext } from '../contexts/PetContext';
import { AuthContext } from "../contexts/AuthContext";
import './AddPet.css';

export const AddPet = ({setShowForm})=> {
    const {handleCreatePet} = useContext(PetContext);
    const { currentUser } = useContext(AuthContext);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const [type, setType] = useState("Cat");
    const [breed, setBreed] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [size, setSize] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");
    const [createdBy, setCreatedBy] = useState("");

    // set the createdBy field automatically
    // useEffect(() => {
    //     if (currentUser && currentUser._id) {
    //         setCreatedBy(currentUser._id);
    //     }
    // }, [currentUser]);

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
                closeForm();
            })
            .catch(err => console.log(err));
    };

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
        if (setShowForm) setShowForm(!isFormVisible);
        
        // Prevent scrolling when modal is open
        if (!isFormVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeForm = () => {
        setIsFormVisible(false);
        if (setShowForm) setShowForm(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="add-pet-container">
            <button 
                onClick={toggleForm} 
                className="add-pet-toggle-btn"
                aria-label="Add new pet"
            >
                <span className="plus-icon">+</span>
            </button>

            {isFormVisible && (
                <div className="modal-overlay" onClick={closeForm}>
                    <div className="add-pet-form-wrapper" onClick={e => e.stopPropagation()}>
                        <form onSubmit={submitHandler} className="add-pet-form">
                            <div className="form-header">
                                <h3>Add New Pet</h3>
                                <button 
                                    type="button" 
                                    className="close-button" 
                                    onClick={closeForm}
                                >
                                    ×
                                </button>
                            </div>
                            
                            <div className="form-grid">
                                <div className="form-group">
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
                                            required
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
                                            required
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
                                            required
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
                                
                                <div className="form-group full-width">
                                    <label>
                                        Description:
                                        <textarea
                                            placeholder="Description"
                                            value={description}
                                            onChange={(event) => setDescription(event.target.value)}
                                            required
                                        />
                                    </label>
                                </div>
                                
                                {/* Hidden input for createdBy - user won't see this */}
                                <input
                                    type="hidden"
                                    name="createdBy"
                                    value={createdBy}
                                />

                                <div className="form-group full-width">
                                    <label>
                                        Image:
                                        <input
                                            type="file"
                                            name="image"
                                            className="file-input"
                                            required
                                        />
                                    </label>
                                </div>
                                
                                <div className="form-actions full-width">
                                    <button type="button" onClick={closeForm} className="cancel-btn">
                                        Cancel
                                    </button>
                                    <button type="submit" className="submit-btn">
                                        Add Pet
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}