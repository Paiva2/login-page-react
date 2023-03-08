import React from "react";

const UserGreeting = ({ username }) => {
  return <p>{username ? `Welcome ${username}!` : "Welcome!"}</p>;
};

export default UserGreeting;
