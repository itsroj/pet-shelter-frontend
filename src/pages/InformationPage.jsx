import React, { useContext, useState } from 'react';
import { ArticleContext } from '../contexts/ArticleContext';
import { AddArticle } from '../components/AddArticle';
import { EditArticle } from '../components/EditArticle';

export const InformationPage = () => {
  const { articles, isUser, handleDeleteArticle } = useContext(ArticleContext);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleEdit = (articleId) => {
    setEditId(articleId);
    setShowEditForm(true);
  }

  return (
    <div className="information-page">
      <h2>Information</h2>
      {articles.length === 0 ? (
        <p>No Information available at the moment.</p>
      ) : (
        <div className="articles-container">
          {articles.map((article) => (
            <div key={article._id} className="article-card">
              <h3>{article.title}</h3>
              <img src={article.image} alt={article.title} />
              <p>{article.description}</p>
              <p className="article-author">By: {article.author?.username || "Unknown"}</p>
              
              {isUser && (
                <div className="admin-controls">
                  <button
                    type="button"
                    className="edit-button"
                    onClick={() => handleEdit(article._id)}
                  >
                    Edit Article
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteArticle(article._id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {isUser && <AddArticle setShowForm={() => {}} />}
      
      {showEditForm && isUser && (
        <EditArticle 
          articleId={editId}
          setShowEditForm={setShowEditForm}
          onUpdateSuccess={() => {
            setShowEditForm(false);
          }} 
        />
      )}
    </div>
  );
}
