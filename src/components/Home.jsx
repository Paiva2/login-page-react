import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizeUser } from "../store/reducers/userReducer";

const Home = () => {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(authorizeUser(false));
  };

  return (
    <div className="container">
      <h1>Bem vindo!</h1>
      <button onClick={handleExit}>Sair</button>
    </div>
  );
};

export default Home;
