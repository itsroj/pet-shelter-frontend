import React, { useContext } from 'react'
import { ArticleContext } from '../contexts/ArticleContext';


export const InformationPage = () => {

  const { articles, isUser, handleDeleteArticle } = useContext(ArticleContext)
  const setShowForm = () => {
    // console.log("just a test prop!")
  }
  return (
    <div>
      <h2>Information</h2>
            {articles.length === 0 ? (
              <p>No Information available at the moment.</p>
            ) : (
              <div>
                {articles.map((article) => (
                  <div key={article._id}>
                    <h3>{article.title}</h3>
                    <img src={article.image} alt={article.title} />
                    <p>Description: {article.description}</p>
                    <p>By: {article.author}</p>
                    
                    {isUser && (
                      <div>
                        <button >Edit</button>
                        <button onClick={() => handleDeleteArticle(article._id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            {isUser && (<AddArticle setShowForm={setShowForm} />)}
    </div>
  )
}
