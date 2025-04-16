import React from "react";
import { useState, useContext, useEffect } from "react";
import { ArticleContext } from "../contexts/ArticleContext";
import { AuthContext } from "../contexts/AuthContext";
import "./AddPetArticle.css";

export const AddArticle = ({ setShowForm }) => {
  const { handleCreateArticle } = useContext(ArticleContext);
  const { currentUser } = useContext(AuthContext);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    // Create the article data object with all required fields
    const articleData = {
      title,
      description,
      author,
    };

    // Call the context function to handle the creation
    handleCreateArticle(event, articleData)
      .then(() => {
        // Close the form on success
        closeForm();
      })
      .catch((err) => console.log(err));
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    if (setShowForm) setShowForm(!isFormVisible);

    // Prevent scrolling when modal is open
    if (!isFormVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeForm = () => {
    setIsFormVisible(false);
    if (setShowForm) setShowForm(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="admin-add-section">
      <button
        onClick={toggleForm}
        className="add-pet-toggle-btn"
        aria-label="Add new article"
      >
        <span className="plus-icon">+</span>
      </button>

      {isFormVisible && (
        <div className="modal-overlay" onClick={closeForm}>
          <div
            className="add-pet-form-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="form-header">
              <h3>Add New Article</h3>
              <button
                type="button"
                className="close-button"
                onClick={closeForm}
              >
                ×
              </button>
            </div>

            <form onSubmit={submitHandler} className="add-pet-form">
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Title:</label>
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label>Description:</label>
                  <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                  />
                </div>

                {/* Hidden input for author - user won't see this */}
                <input type="hidden" name="author" value={author} />

                <div className="form-group full-width">
                  <label>Image:</label>
                  <input
                    type="file"
                    name="image"
                    className="file-input"
                    required
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={closeForm}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Add Article
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
