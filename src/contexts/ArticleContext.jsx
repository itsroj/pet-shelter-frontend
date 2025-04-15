import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ArticleContext = createContext();

const ArticleContextWrapper = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const nav = useNavigate();
  const { currentUser, isLoggedIn } = useContext(AuthContext);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Check if current user has user role
  const isUser = () => {
    return currentUser && (currentUser.role === "admin" || currentUser.role === "user");
  };
  
  useEffect(() => {
    getAllArticles();
  }, []);

  function getAllArticles() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/article/all-articles`)
      .then((res) => {
        console.log("all articles", res);
        setArticles(res.data.allArticles);
        // setError(null);
      })
      .catch((err) => {
        console.log(err);
        // setError("Failed to fetch articles");
      });
  }

  function getOneArticle(articleId) {
    return axios
      .get(`${import.meta.env.VITE_API_URL}/article/one-article/${articleId}`)
      .then((res) => {
        console.log("one article", res);
        setSelectedArticle(res.data); // Store in separate state
        return res.data; // Return for component use
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch article");
        throw err; // Rethrow to allow error handling in components
      });
  }

  async function handleCreateArticle(event, articleData) {
    event.preventDefault();
    
    // Check for user permission
    if (!isUser()) {
    //   setError("User permission required to create articles");
      return;
    }
    
    // Create form data for image upload
    const myFormData = new FormData();
    
    // Add article properties to form data matching the schema        
    myFormData.append("title", articleData.title);        
    myFormData.append("description", articleData.description);          
    myFormData.append("author", articleData.author);           
    
    // Add image if provided (required field)
    if (event.target.image.files[0]) {
      const image = event.target.image.files[0];
      myFormData.append("image", image);
    } else {
    //   setError("Image is required");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/article/create`,
        myFormData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          }
        }
      );
      console.log("article created", data);
      setArticles([data, ...articles]);
    //   setError(null);
      nav("/information");
    } catch (error) {
      console.log(error);
    //   setError("Failed to create article");
    }
  }

  function handleUpdateArticle(event, articleId, updatedData) {
    event.preventDefault();
    // Check for admin permission
    // if (!isUser()) {
    //   setError("Admin permission required to update articles");
    //   return;
    // }

    const myFormData = new FormData();
    
    // Add article properties to form data
    Object.keys(updatedData).forEach(key => {
      if (key !== 'image') {
        myFormData.append(key, updatedData[key]);
      }
    });
    
    // Add image if provided
    if (updatedData.image) {
      myFormData.append("imageUrl", updatedData.image);
    }

    axios
      .patch(
        `${import.meta.env.VITE_API_URL}/article/update-article/${articleId}`,
        myFormData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "multipart/form-data"
          }
        }
      )
      .then((res) => {
        console.log("article updated", res);
        const updatedArticles = articles.map(article => 
          article._id === articleId ? res.data : article
        );
        setArticles(updatedArticles);
        // setError(null);
      })
      .catch((err) => {
        console.log(err);
        // setError("Failed to update article");
      });
  }

  function handleDeleteArticle(articleId) {
    // Check for admin permission
    if (!isUser()) {
    //   setError("Admin permission required to delete articles");
      return;
    }

    axios
      .delete(
        `${import.meta.env.VITE_API_URL}/article/delete-article/${articleId}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          }
        }
      )
      .then((res) => {
        console.log("article removed from DB", res);
        const filteredArticles = articles.filter(article => article._id !== articleId);
        setArticles(filteredArticles);
        // setError(null);
      })
      .catch((err) => {
        console.log(err);
        // setError("Failed to delete article");
      });
  }

  return (
    <ArticleContext.Provider
      value={{
        articles,
        setArticles,
        selectedArticle,
        handleCreateArticle,
        handleUpdateArticle,
        handleDeleteArticle,
        getAllArticles,
        error,
        getOneArticle,
        isUser: isUser()
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleContextWrapper };