import { React, useState, useRef } from "react";
import "../App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import UserGreeting from "./UserGreeting";
import { useSelector, useDispatch } from "react-redux";
import {
  authorizeUser,
  userName,
  passWord,
} from "../store/reducers/userReducer";
import alert from "./alertValidation";
import { useNavigate, NavLink } from "react-router-dom";

function Login() {
  const userInput = useRef(null);
  const passwordInput = useRef(null);
  const username = useSelector((state) => state.userData.username);
  const password = useSelector((state) => state.userData.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkSignIn = (e) => {
    e.preventDefault();

    if (password !== "admin" && username !== "admin") {
      return alert("error", "Invalid username or password!");
    }

    navigate("/home");
    dispatch(authorizeUser(true));
    clearUserInfo();
  };

  const clearUserInfo = () => {
    dispatch(userName(""));
    dispatch(passWord(""));
    userInput.current.value = "";
    passwordInput.current.value = "";
  };

  return (
    <div className="container">
      <div className="img-div">
        <div className="welcome-text">
          <UserGreeting username={username} />
        </div>
        <div className="bottom-text">
          <a href="https://github.com/Paiva2">Check my Github</a>
        </div>
      </div>
      <div className="form-div">
        <form onSubmit={checkSignIn} className="form">
          <h1>
            Log
            <span className="undertext-effect">in</span>
          </h1>
          <input
            ref={userInput}
            onChange={(e) => dispatch(userName(e.target.value))}
            type="text"
            placeholder="Username"
            maxLength={10}
          />
          <input
            ref={passwordInput}
            onChange={(e) => dispatch(passWord(e.target.value))}
            type="password"
            placeholder="Password"
          />
          <button className="submit" type="submit">
            Sign in
          </button>

          <p>
            Not a member?
            <NavLink onClick={clearUserInfo} to="/register">
              <span className="undertextsign">SignUp</span>
            </NavLink>
          </p>

          <span className="socialmedia">
            <FontAwesomeIcon
              className="icon"
              icon={faFacebook}
              size="2x"
              color="#328AEE"
            />
            <FontAwesomeIcon
              className="icon"
              icon={faTwitter}
              size="2x"
              color="#1DA1F2"
            />
            <FontAwesomeIcon
              className="icon"
              icon={faGoogle}
              size="2x"
              color="#D14836"
            />
          </span>

          <div className="footer-text">
            <p>Start your journey with us!</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
