import React, { useState } from "react";
import "./LoginStyles.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import ComponentLoading from "../Loading/ComponentLoading";

function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const handleSuccess = (res) => {
      localStorage.setItem("token", res.data.token);
      console.log("Authenticated");
      setTimeout(() => {
        window.location.replace("http://localhost:3000/home");
      }, 1000);
    };

    const handleFailure = (err) => {
      console.log(err);
      setMessage("Username or Password is incorrect. Please try again.");
    };

    const baseURL =
      "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";

    axios({
      method: "post",
      url: `${baseURL}/login`,
      data: { username: username, password: password },
      loading: false,
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleFailure(err);
      });
  };

  return props.trigger ? (
    <section id="login">
      <div className="login-container">
        <div className="login-contents">
          <div
            className="close-btn-login"
            onClick={() => props.setTrigger(false)}
          >
            <div>X</div>
          </div>
          <h2>Sign In</h2>
          <p>
            <span
              onClick={() => {
                props.setTrigger(false);
                props.showSignUp(true);
              }}
            >
              New user?{" "}
              <span className="signup-redirect">Create an account</span>
            </span>
          </p>
          <form onSubmit={submit}>
            <input
              type="text"
              placeholder="Username"
              required
              autoComplete="off"
              onChange={(event) => {
                setUserName(event.target.value);
                // setInput(true);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="login-btn-password">
              <div className="forgot-password">
                <Link to="">Forgot Password?</Link>
              </div>
              <div className="login-button">
                <button className="button" type="submit">
                  LOGIN
                </button>
              </div>
            </div>
          </form>

          <div className="login-messages">{message}</div>
          <div className="or-fold">
            <hr></hr>
            <p>or</p>
            <hr></hr>
          </div>
          <button>
            <i className="fab fa-google"></i> <span>Sign In with Google</span>
          </button>
          <button>
            <i className="fab fa-facebook-square"></i>
            <span>Sign In with Facebook</span>
          </button>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
}

export default Login;
