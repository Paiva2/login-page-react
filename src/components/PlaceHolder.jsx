import React from "react";
import { BsChatText } from "react-icons/bs";
import "../styles/PlaceHolder.css";

const PlaceHolder = () => {
  return (
    <div className="place-holder-text">
      <h3>
        Post something! <BsChatText />
      </h3>
    </div>
  );
};

export default PlaceHolder;
