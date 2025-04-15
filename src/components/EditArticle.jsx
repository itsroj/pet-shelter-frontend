import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ArticleContext } from '../contexts/ArticleContext';
import { useParams } from "react-router-dom";

export const EditArticle = ({ setShowEditForm, onUpdateSuccess, articleId }) => {

    const { articles, handleUpdateArticle } = useContext(ArticleContext);
    // const { articleId } = useParams()


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");

    const handleImageChange = (event) => {
      if (event.target.files[0]) {
        setImage(event.target.files[0]);
      }
    };

    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_API_URL}/article/one-article/${articleId}`)
          .then(({ data }) => {
            console.log("here is the data for the update:", import.meta.env.VITE_API_URL, data);
            setTitle(data.title);
            setDescription(data.description);
            // setAuthor(data.author);
            setImage(data.image);
          })
          .catch((err) => console.log(err));
      }, [articleId]);



  return (
    <div className="form-overlay">
        <form className="article-form" onSubmit={async (event) => {
            handleUpdateArticle(event, articleId, {title, description, image})
            setShowEditForm(false);
        }}>
            <div className="form-header">
                <h3>Edit Article</h3>
                <h6 className="closeButton" onClick={() => setShowEditForm(false)}>x</h6>
            </div>
            
            <div className="form-group">
                <label>
                    Title:
                    <input
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
            </div>
            
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
               Update Article
            </button>
        </form>
    </div>
  )
}