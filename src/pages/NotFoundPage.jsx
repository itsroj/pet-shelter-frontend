import React from "react";
import NotFound from "../images/notFound.png";
import './NotFound.css';

export const NotFoundPage = () => {
  return (
    <div className="notFoundContainer">
      <h3>Sorry, Page was not found!</h3>
      <div className="notFoundImgContainer">
        <img src={ NotFound } alt="Page not found" className="NotFoundImg" />
      </div>
    </div>
  );
};
