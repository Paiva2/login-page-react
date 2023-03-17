import React from "react";
import UserGreeting from "./UserGreeting";
import "../styles/SideImage.css";

const SideImage = ({ text }) => {
  return (
    <div className="img-div">
      <div className="welcome-text">
        <UserGreeting greetingText={text} />
      </div>
      <div className="bottom-text">
        <a className="github-link" href="https://github.com/Paiva2">
          Check my Github
        </a>
      </div>
    </div>
  );
};

export default SideImage;
