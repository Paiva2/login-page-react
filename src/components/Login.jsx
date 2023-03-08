import { React, useState, useEffect, useRef } from "react";
import "../App.css";
import Home from "./Home";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";
import UserGreeting from "./UserGreeting";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let [authorized, setAuthorized] = useState(false);
  const userInput = useRef(null);
  const passwordInput = useRef(null);

  const check = (e) => {
    e.preventDefault();
    if (password === "admin" && username === "admin") {
      setAuthorized(true);
      return;
    }
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Invalid username or Password",
      showConfirmButton: false,
      timer: 1300,
    });
    userInput.current.value = "";
    passwordInput.current.value = "";
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    if (authorized) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Welcome!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }, [authorized]);

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
          <form onSubmit={check} className="form">
            <h1>
              Log
              <span className="undertext-effect">in</span>
            </h1>
            <input
              ref={userInput}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              maxLength={10}
            />
            <input
              ref={passwordInput}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="submit" type="submit">
              Sign in
            </button>

            <p>
              Not a member?{" "}
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
