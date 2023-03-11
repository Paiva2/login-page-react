import { React } from "react";
import { useDispatch } from "react-redux";
import { authorizeUser } from "../store/reducers/userReducer";
import { Helmet } from "react-helmet";

const Home = () => {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(authorizeUser(false));
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>Home</title>
      </Helmet>
      <h1>Bem vindo!</h1>
      <button onClick={handleExit}>Sair</button>
    </div>
  );
};

export default Home;
