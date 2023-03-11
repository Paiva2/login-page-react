import React, { useRef, useState } from "react";
import Helmet from "react-helmet";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserGreeting from "./UserGreeting";
import { registerUser } from "../store/reducers/registeredUsersReducer";
import alertValidation, { confirmAlert } from "./alertValidation";
import SideImage from "./SideImage";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const formRef = useRef();
  const [confirmPassword, setconfirmPassword] = useState();
  const registeredUsers = useSelector(
    (state) => state.registerDataBase.userData
  );
  const dispatch = useDispatch();
  const dataBaseCopy = [...registeredUsers];

  const resetPassword = (e) => {
    e.preventDefault();

    if (password !== confirmPassword)
      return alertValidation("warning", "Passwords do not match!");

    if (password.length < 6)
      return alertValidation(
        "warning",
        "Use a password with at least 6 numbers!"
      );

    for (let i = 0; i < dataBaseCopy.length; i++) {
      if (dataBaseCopy[i].username === username) {
        dataBaseCopy.splice(i, 1, {
          username: username,
          password: password,
        });
        dispatch(registerUser(dataBaseCopy));
        setLocalStorage(dataBaseCopy);
        resetFormData();
        confirmAlert("Password changed!");
        return;
      }
    }
    return alertValidation("warning", "Username does not exists!");
  };

  const setLocalStorage = (usersData) => {
    localStorage.setItem("user", JSON.stringify(usersData));
  };

  const backHome = () => {
    resetFormData();
    navigate("/login");
  };

  const resetFormData = () => {
    setPassword("");
    setUsername("");
    setconfirmPassword("");
    formRef.current.reset();
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>Forgot Password</title>
      </Helmet>
      <SideImage
        text={
          username
            ? `We'll never forget you ${username}!`
            : "We'll never forget you!"
        }
      />
      <div className="form-div">
        <form ref={formRef} onSubmit={resetPassword} className="form">
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
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value.toString())}
              type="text"
              placeholder="New Password"
              required
              className="password-input"
            />
            <input
              onChange={(e) => setconfirmPassword(e.target.value)}
              type="text"
              placeholder="Confirm Password"
              required
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
