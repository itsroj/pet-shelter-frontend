import React, {useState, useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import { PetContext } from '../contexts/PetContext';
import { EditPet } from '../components/EditPet';


export const PetDetailsPage = () => {
    const [pet, setPet] = useState({});
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
    },[])

    if (!pets) {
        return <p>loading...</p>
    }

    return (
        <div>
            <h1>hi</h1>
            <h2>{pet && pet.name}</h2>
            <button
                                    type="button"
                                    className="updateProductBtn"
                                    onClick={() => setShowEditForm(true)}
                                  >
                                    Edit
                                  </button>
                                  {showEditForm ? <EditPet /> : null}
            {/* {pets.map((onePet) => {
                return (
                  <div key={onePet.id}>
                    <h3>{onePet.name}</h3>
                    <img src={onePet.image} alt={onePet.name} />
                    <p>{onePet.type}, {onePet.breed}, {onePet.size}</p>
                    <p>{onePet.gender}</p>
                    <p>{onePet.age}</p>
                    <p>{onePet.description}</p>
                    <p>{onePet.createdBy}, {onePet.createdAt}</p>
                    {isAdmin && (
                              <div className="admin-controls">
                               
                                <button
                                    type="button"
                                    className="updateProductBtn"
                                    onClick={() => handleEdit(onePet.id)}
                                  >
                                    Edit
                                  </button>
                              
                                <button className="delete-btn" onClick={() => handleDeletePet(cat._id)}>
                                  Delete
                                </button>
                              </div>
                            )}
                  </div>
                )
            })} */}
        </div>
    )
}