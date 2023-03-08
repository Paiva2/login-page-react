import { React, useState } from "react";
import App from "../App";

const Home = ({ exit }) => {
  let [logout, setLogout] = useState(exit);

  const exitClick = () => {
    setLogout(false);
  };

  if (logout === false) {
    return <App />;
  } else {
    return (
      <div className="container">
        <h1>Bem vindo!</h1>
        <button onClick={exitClick}>Sair</button>
      </div>
    );
  }
};

export default Home;
