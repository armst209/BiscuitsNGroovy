import React, { useState } from "react";
import "./LoginStyles.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const handleSuccess = (res) => {
      localStorage.setItem("token", res.data.token);
      console.log("Authenticated");
      props.history.push("/fanportal");
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
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleFailure(err);
      });
  };

  return (
    <div id="login">
      {/* <Navbar /> */}
      <div className="login-container">
        <h3>Start your collection today</h3>
        <div className="login-contents">
          <h1>LOGIN</h1>
          <p>
            Don't have an account?
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
          <form onSubmit={submit}>
            <input
              type="text"
              placeholder="username"
              required
              autoComplete="off"
              onChange={(event) => {
                setUserName(event.target.value);
                // setInput(true);
              }}
            />
            <input
              type="password"
              placeholder="password"
              required
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="button" type="submit">
              Login
            </button>
          </form>
          <Link to="">Forgot Password?</Link>
          <div className="login-messages">{message}</div>
          <div className="or-fold">
            <hr></hr>
            <p>or</p>
            <hr></hr>
          </div>
          <button>Log In with Google</button>
          <button>Log In with Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
