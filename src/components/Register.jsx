import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/reducers/registeredUsersReducer";
import UserGreeting from "./UserGreeting";
import { IoIosArrowBack } from "react-icons/io";
import alertValidation, { confirmAlert } from "./alertValidation";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import SideImage from "./SideImage";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const formRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registeredUsers = useSelector(
    (state) => state.registerDataBase.userData
  );

  const setLocalStorage = (usersData) => {
    localStorage.setItem("user", JSON.stringify(usersData));
  };

  const registerNewUser = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alertValidation("warning", "Use a password with at least 6 numbers!");
      return;
    }
    if (confirmPassword !== password) {
      alertValidation("error", "Passwords do not match!");
      return;
    }

    for (let i = 0; i < registeredUsers.length; i++) {
      if (registeredUsers[i].username === username)
        return alertValidation("error", "Username already exists!");
    }

    const registeredUsersCopy = [
      ...registeredUsers,
      { username: username, password: password.toString() },
    ];
    confirmAlert("Register succesful!");
    dispatch(registerUser(registeredUsersCopy));
    resetFormData();
    setLocalStorage(registeredUsersCopy);
  };

  const resetFormData = () => {
    setPassword("");
    setUsername("");
    setconfirmPassword("");
    formRef.current.reset();
  };

  const backHome = () => {
    resetFormData();
    navigate("/login");
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>Wish List</title>
      </Helmet>
      <SideImage text={username ? `Welcome ${username}!` : "Welcome!"} />
      <div className="form-div">
        <form
          ref={formRef}
          onSubmit={(e) => registerNewUser(e)}
          className="form"
        >
          <div>
            <h1>
              Reg
              <span className="undertext-effect">ister</span>
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
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Password"
              required
              className="password-input"
            />
            <input
              onChange={(e) => setconfirmPassword(e.target.value)}
              type="text"
              placeholder="Confirm password"
              required
              className="password-input"
            />
            <button className="submit" type="submit">
              Register
            </button>
          </div>
          <div className="footer-text">
            <p>Are u ready to start your journey with us?</p>
          </div>
          <IoIosArrowBack onClick={backHome} className="back-icon" />
        </form>
      </div>
    </div>
  );
};

export default Register;
