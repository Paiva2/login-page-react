import { React, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import "../App.css";
import UserGreeting from "./UserGreeting";
import alert from "./alertValidation";
import {
  authorizeUser,
  userName,
  passWord,
} from "../store/reducers/userReducer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Login() {
  const userInput = useRef(null);
  const passwordInput = useRef(null);
  const username = useSelector((state) => state.userData.username);
  const password = useSelector((state) => state.userData.password);
  const registeredUsers = useSelector(
    (state) => state.registerDataBase.userData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkSignIn = (e) => {
    e.preventDefault();

    for (let i = 0; i < registeredUsers.length; i++) {
      if (registeredUsers[i].username === username) {
        if (registeredUsers[i].password === password) {
          dispatch(authorizeUser(true));
          navigate("/home");
          clearUserInfo();
          return;
        }
      }
      return alert("error", "Invalid username or password!");
    }
  };

  const clearUserInfo = () => {
    dispatch(userName(""));
    dispatch(passWord(""));
    userInput.current.value = "";
    passwordInput.current.value = "";
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>Login</title>
      </Helmet>
      <div className="img-div">
        <div className="welcome-text">
          <UserGreeting
            greetingText={
              username ? `Welcome back ${username}!` : "Welcome back!"
            }
          />
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
            onChange={(e) => dispatch(passWord(+e.target.value))}
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
