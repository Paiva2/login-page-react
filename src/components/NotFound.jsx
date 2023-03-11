import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/login");
  };

  return (
    <div className="not-found-container">
      <div className="not-found-text">
        <h2>Nothing here...</h2>
      </div>
      <IoIosArrowBack onClick={backHome} className="register-back-icon" />
    </div>
  );
};

export default NotFound;
