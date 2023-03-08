import React from "react";

const UserGreeting = (props) => {
  return <p>{props.username ? `Welcome ${props.username}!` : "Welcome!"}</p>;
};

export default UserGreeting;
