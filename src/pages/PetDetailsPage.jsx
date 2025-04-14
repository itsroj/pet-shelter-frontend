import React, {useState, useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import { PetContext } from '../contexts/PetContext';
import { EditPet } from '../components/EditPet';


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
        return <p>loading...</p>
    }

    return (
        <div>
            <h1>hi</h1>
            <h2>{pet && pet.name}</h2>
            <img src={pet.image} alt={pet.name} />
            <p>Type: {pet.type}, Breed: {pet.breed} {pet.type === "dog" && `, Size: ${pet.size}`}</p>
            <p>Gender: {pet.gender}</p>
            <p>Age: {pet.age}</p>
            <p>Description: {pet.description}</p>
            <p>Created By: {pet.createdBy.username}, Created At: {pet.createdAt.slice(0,10)}</p>
            


            {isAdmin && (
                <div className="admin-controls">
                    <button
                        type="button"
                        onClick={() => setShowEditForm(true)}
                    >
                        Edit
                    </button>
                    <button 
                        onClick={() => handleDeletePet(pet._id)}
                    >
                        Delete
                    </button>
                </div>
            )}
            


{showEditForm ? (
  <EditPet 
    setShowEditForm={setShowEditForm}
    onUpdateSuccess={() => {
      setShowEditForm(false); 
    }}
  />
) : null}

        </div>
    )
}