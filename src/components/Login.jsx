import { React, useState, useRef } from "react";
import "../App.css";
import Home from "./Home";
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

function Login() {
  const userInput = useRef(null);
  const passwordInput = useRef(null);
  const authorized = useSelector((state) => state.userData.authorized);
  const username = useSelector((state) => state.userData.username);
  const password = useSelector((state) => state.userData.password);
  const dispatch = useDispatch();

  const checkSignIn = (e) => {
    e.preventDefault();
    if (password !== "admin" && username !== "admin") {
      alert("error", "Invalid username or password!");
      return;
    }

    dispatch(authorizeUser(true));
    userInput.current.value = "";
    passwordInput.current.value = "";
    dispatch(userName(""));
    dispatch(passWord(""));
  };

  if (authorized === false) {
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
              <a href="">
                <span className="undertextsign">SignUp</span>
              </a>
            </p>
            <span className="socialmedia">
              <button>
                <FontAwesomeIcon icon={faFacebook} size="2x" color="#328AEE" />
              </button>
              <button>
                <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
              </button>
              <button>
                <FontAwesomeIcon icon={faGoogle} size="2x" color="#D14836" />
              </button>
            </span>
            <div className="img-text">
              <p>Start your journey with us!</p>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <Home exit={authorized} />;
  }
}

export default Login;
