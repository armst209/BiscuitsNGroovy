import React, { useState } from "react";
import "./LoginStyles.scss";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

function Login() {
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [token, setToken] = useState("");
  const submit = (event) => {
    event.preventDefault();
    const baseURL =
      "https://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
    const data = {
      email,
      password,
    };

    const config = {
      "x-access-token": token,
    };

    const response = axios
      .get(`${baseURL}/login`, config, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    if (response) {
      localStorage.setItem("token", setToken(token));

      setRedirect(true);
    } else {
      alert("You are not logged in");
    }
  };

  if (redirect) {
    return <Redirect to="/fanportal" />;
  }

  return (
    <div id="login">
      <Navbar />
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
              name=""
              onChange={(event) => setUserName(event.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              name=""
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="button" type="submit">
              Login
            </button>
          </form>
          <Link to="">Forgot Password?</Link>
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
