import React, { useRef, useState } from "react";
import Helmet from "react-helmet";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassWord } from "../store/reducers/registeredUsersReducer";
import SideImage from "./SideImage";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const formRef = useRef();
  const dispatch = useDispatch();

  const resetPassword = (e) => {
    e.preventDefault();

    dispatch(
      changePassWord({
        username,
        password,
        confirmPassword,
        resetFormData,
      })
    );
  };

  const backHome = () => {
    resetFormData(true);
    navigate("/login");
  };

  const resetFormData = (willReset) => {
    if (!willReset) return;

    setPassword("");
    setUsername("");
    setconfirmPassword("");
    formRef.current.reset("");
  };

  return (
    <div className="reset-pass-container">
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
      <div className="form-div-reset-pass">
        <form ref={formRef} onSubmit={resetPassword} className="form">
          <div className="page-title">
            <h1>Reset your</h1>
            <h1>
              <span className="reset-pass-undertext-effect">Password</span>
            </h1>
          </div>
          <div className="forgot-pass-inputs">
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
              className="reset-password-input"
            />
            <input
              onChange={(e) => setconfirmPassword(e.target.value)}
              type="text"
              placeholder="Confirm Password"
              required
              className="reset-password-input"
            />
            <button className="submit-reset" type="submit">
              Reset
            </button>
          </div>
          <div className="reset-pass-footer-text">
            <p>Don't forgot our jorney!</p>
          </div>
          <IoIosArrowBack onClick={backHome} className="reset-pass-back-icon" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
