import React from "react";
import UserGreeting from "./UserGreeting";

const SideImage = ({ text }) => {
  return (
    <div className="img-div">
      <div className="welcome-text">
        <UserGreeting greetingText={text} />
      </div>
      <div className="bottom-text">
        <a href="https://github.com/Paiva2">Check my Github</a>
      </div>
    </div>
  );
};

export default SideImage;
