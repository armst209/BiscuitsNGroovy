import React, { useState } from "react";
import "./LoginStyles.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/bng_test.svg";
import login_arrow from "../../assets/images/login.svg";
import login_loading from "../../assets/images/pulse_loader_black.svg";
// import ComponentLoading from "../Loading/ComponentLoading";

function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState(
    <>
      <div>Login</div>
      <img src={login_arrow} alt="arrow" />
    </>
  );
  const [loading, setLoading] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setLoginStatus(
      <>
        <div>Logging In...</div>
        <img src={login_loading} alt="pulse loader" />
      </>
    );
    const handleSuccess = (res) => {
      localStorage.setItem("token", res.data.token);
      setTimeout(() => {
        window.location.replace("http://localhost:3000/home");
      }, 1000);
    };

    const handleFailure = (err) => {
      console.log(err);
      setLoginStatus(
        <>
          <div>Login</div>
          <img src={login_arrow} alt="arrow" />
        </>
      );
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
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h2>Sign in to Biscuits n Groovy</h2>
          <button className="google">
            <i className="fab fa-google"></i> <span>Sign In with Google</span>
          </button>
          <button className="facebook">
            <i className="fab fa-facebook-square"></i>
            <span>Sign In with Facebook</span>
          </button>
          <div className="or-fold">
            <hr></hr>
          </div>

          <form onSubmit={submit}>
            <div className="input-styles">
              <input
                type="text"
                placeholder="Enter your username"
                required
                autoComplete="off"
                onChange={(event) => {
                  setUserName(event.target.value);
                  // setInput(true);
                }}
              />
              <input
                type="password"
                placeholder="Enter your password"
                required
                autoComplete="off"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="login-btn-password">
              <div className="login-button">
                <button className="button" type="submit">
                  {loginStatus}
                </button>
              </div>
            </div>
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
            <div className="forgot-password">
              <Link to="">Forgot Password?</Link>
            </div>
          </form>

          <div className="login-messages">{message}</div>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
}

export default Login;
