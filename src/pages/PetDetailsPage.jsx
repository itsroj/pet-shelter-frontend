import React, {useState, useEffect, useContext} from 'react'
import { useParams, Link } from "react-router-dom";
import { PetContext } from '../contexts/PetContext';
import { EditPet } from '../components/EditPet';
import './PetDetailsPage.css';

export const PetDetailsPage = () => {
    const [pet, setPet] = useState(null);
    const { petId } = useParams();
    const { pets, isAdmin, handleDeletePet } = useContext(PetContext);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editId, setEditId] = useState(null);

    // for opening the editing form:
    const handleEdit = (petId) => {
        setEditId(petId);
        setShowEditForm(true);
    }

    useEffect(() => {
        const onePet = pets.find((pet) => pet._id === petId)
        setPet(onePet)
        console.log(onePet)
    },[pets, petId]);

    if (!pet) {
        return <div className="loading-container"><p>Loading pet details...</p></div>
    }

    return (
        <div className="pet-details-page">
            <div className="container">
                <div className="pet-details-content">
                    <div className="pet-details-image">
                        <img src={pet.image} alt={pet.name} />
                        {pet.type === "dog" && <span className="pet-type-badge dog-badge">Dog</span>}
                        {pet.type === "cat" && <span className="pet-type-badge cat-badge">Cat</span>}
                    </div>
                    
                    <div className="pet-details-info">
                        <h1 className="pet-details-name">{pet.name}</h1>
                        
                        <div className="pet-attributes">
                            <div className="pet-attribute">
                                <span className="attribute-label">Breed:</span>
                                <span className="attribute-value">{pet.breed}</span>
                            </div>
                            
                            {pet.type === "dog" && (
                                <div className="pet-attribute">
                                    <span className="attribute-label">Size:</span>
                                    <span className="attribute-value">{pet.size}</span>
                                </div>
                            )}
                            
                            <div className="pet-attribute">
                                <span className="attribute-label">Gender:</span>
                                <span className="attribute-value">{pet.gender}</span>
                            </div>
                            
                            <div className="pet-attribute">
                                <span className="attribute-label">Age:</span>
                                <span className="attribute-value">{pet.age}</span>
                            </div>
                        </div>
                        
                        <div className="pet-description">
                            <h3>About {pet.name}</h3>
                            <p>{pet.description}</p>
                        </div>
                        
                        <div className="pet-meta-info">
                            <p>Posted by {pet.createdBy.username} on {pet.createdAt.slice(0,10)}</p>
                            <p>Call us, if you are interested!</p>
                        </div>
                        
                        {isAdmin && (
                            <div className="admin-controls">
                                <button
                                    type="button"
                                    className="edit-button"
                                    onClick={() => setShowEditForm(true)}
                                >
                                    Edit Pet
                                </button>
                                <button 
                                    className="delete-button"
                                    onClick={() => handleDeletePet(pet._id)}
                                >
                                    Delete Pet
                                </button>
                            </div>
                        )}
                        
                        <div className="back-link">
                            <Link to={`/pet-adoption/${pet.type}`}>
                                Back to {pet.type === "cat" ? "Cats" : "Dogs"}
                            </Link>
                        </div>
                    </div>
                </div>
                {showEditForm && (
                    <div className="edit-form-container">
                        <EditPet 
                            setShowEditForm={setShowEditForm}
                            onUpdateSuccess={() => {
                                setShowEditForm(false); 
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}