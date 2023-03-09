import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserGreeting from "./UserGreeting";

const Register = () => {
  const registeredUsers = useSelector(
    (state) => state.registerDataBase.userData
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const dispatch = useDispatch();

  //console.log(registeredUsers);

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
        <form /*onSubmit={{}}*/ className="form">
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
              maxLength={10}
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
        </form>
      </div>
    </div>
  );
};

export default Register;
