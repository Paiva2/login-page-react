import React, { useRef, useState } from "react";
import Helmet from "react-helmet";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserGreeting from "./UserGreeting";

const ForgotPassword = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const form = useRef();
  const [confirmPassword, setconfirmPassword] = useState();
  const registeredUsers = useSelector(
    (state) => state.registerDataBase.userData
  );
  const dispatch = useDispatch();
  const resetPassword = (e) => {
    e.preventDefault();

    for (let i = 0; i < registeredUsers.length; i++) {
      if (registeredUsers[i] === username) {
        console.log(registeredUsers[i]);
      }
    }
  };

  const backHome = () => {
    resetFormData();
    navigate("/login");
  };

  const resetFormData = () => {
    setPassword("");
    setUsername("");
    setconfirmPassword("");
    form.current.reset();
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>Forgot Password</title>
      </Helmet>
      <div className="img-div">
        <div className="welcome-text">
          <UserGreeting
            greetingText={
              username
                ? `We'll never forget you ${username}!`
                : "We'll never forget you!"
            }
          />
        </div>
        <div className="bottom-text">
          <a href="https://github.com/Paiva2">Check my Github</a>
        </div>
      </div>
      <div className="form-div">
        <form ref={form} onSubmit={resetPassword} className="form">
          <div className="page-title">
            <h1>Reset your</h1>
            <h1>
              <span className="undertext-effect">Password</span>
            </h1>
          </div>
          <div>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              maxLength={30}
              //   required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="New Password"
              //   required
              className="password-input"
            />
            <input
              onChange={(e) => setconfirmPassword(e.target.value)}
              type="text"
              placeholder="Confirm Password"
              //   required
              className="password-input"
            />
            <button className="submit" type="submit">
              Reset
            </button>
          </div>
          <div className="footer-text">
            <p>Don't forgot our jorney!</p>
          </div>
          <IoIosArrowBack onClick={backHome} className="back-icon" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
