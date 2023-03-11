import { React } from "react";
import { useDispatch } from "react-redux";
import { authorizeUser } from "../store/reducers/userReducer";
import { Helmet } from "react-helmet";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(authorizeUser(false));
  };

  return (
    <div className="home-container">
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>Home</title>
      </Helmet>
      <div>
        <h1>Welcome!</h1>
      </div>
      <button className="home-back-btn" onClick={handleExit}>
        Exit
      </button>
    </div>
  );
};

export default Home;
