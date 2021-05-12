import React, { useState, Redirect } from "react";
import "./LoginStyles.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [input, setInput] = useState(false);

  const submit = (event) => {
    event.preventDefault();

    const baseURL =
      "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";

    axios({
      method: "post",
      url: `${baseURL}/login`,
      data: { username: username, password: password },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setToken(localStorage.getItem("token"));

        if (
          token === res.data.token
          // password === res.data.password &&
          // username === res.data.username
        ) {
          <Redirect to="/fanportal" />;
        } else {
          alert("you are not authenticated");
          <Redirect to="/login" />;
        }
        // setToken(res.data.token);
        // setRedirect(true);
        // console.log(username, password);
        // console.log(res);
        // console.log(res.data.token);
      })
      .catch((err) => {
        console.log(err);

        alert("password is or username is incorrect");
      });
  };

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
              // autoComplete="on"
              onChange={(event) => {
                setUserName(event.target.value);
                setInput(true);
              }}
            />
            <input
              type="password"
              placeholder="password"
              // autoComplete="on"
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
