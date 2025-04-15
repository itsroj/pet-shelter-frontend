import React, { useContext, useState } from 'react';
import { ArticleContext } from '../contexts/ArticleContext';
import { AddArticle } from '../components/AddArticle';
import { EditArticle } from '../components/EditArticle';
import './Information.css';

export const InformationPage = () => {
  const { articles, isUser, handleDeleteArticle } = useContext(ArticleContext);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleEdit = (articleId) => {
    setEditId(articleId);
    setShowEditForm(true);
  }

  if (!articles) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="information-page">
      <div className="info-header">
        <h2 className="info-title">Community Information</h2>
        <p>Lost pets, announcements, and important information for pet owners and animal lovers.</p>
      </div>
      
      {articles.length === 0 ? (
        <p className="no-articles-message">No information available at the moment.</p>
      ) : (
        <div className="articles-container">
          {articles.map((article) => (
            <div key={article._id} className="article-card">
              <div className="article-image-wrapper">
                <img src={article.image} alt={article.title} className="article-image" />
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <p className="article-author">By: {article.author?.username || "Unknown"}</p>
                
                {isUser && (
                  <div className="admin-controls">
                    <button
                      type="button"
                      className="edit-button"
                      onClick={() => handleEdit(article._id)}
                    >
                      Edit
                    </button>
                    <button className="delete-button" onClick={() => handleDeleteArticle(article._id)}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
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
