import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/reducers/registeredUsersReducer";
import UserGreeting from "./UserGreeting";
import { IoIosArrowBack } from "react-icons/io";
import alertValidation from "./alertValidation";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const form = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    dispatch(registerUser({ username: username, password: password }));
    resetFormData();
  };

  const resetFormData = () => {
    setPassword("");
    setUsername("");
    setconfirmPassword("");
    form.current.reset();
  };

  const backHome = () => {
    resetFormData();
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="img-div">
        <div className="welcome-text">
          <UserGreeting
            greetingText={
              username ? `Nice to meet you ${username}!` : "Welcome!"
            }
          />
        </div>
        <div className="bottom-text">
          <a href="https://github.com/Paiva2">Check my Github</a>
        </div>
      </div>
      <div className="form-div">
        <form ref={form} onSubmit={(e) => registerNewUser(e)} className="form">
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
              type="password"
              placeholder="Password"
              required
            />
            <input
              onChange={(e) => setconfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm password"
              required
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
