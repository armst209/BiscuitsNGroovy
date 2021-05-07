import React from "react";
import "./LoginStyles.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function Login() {
  //   document
  //     .getElementById("login-submit")
  //     .addEventListener("click", loginRequest);

  //   function loginRequest() {
  //     console.log("hit");
  //     // fetch("https://TODO/login")
  //     //   .then((res) => res.json())
  //     //   .then(
  //     //     (result) => {
  //     //       this.setState({
  //     //         isLoaded: true,
  //     //         items: result.items,
  //     //       });
  //     //     },
  //     //     // Note: it's important to handle errors here
  //     //     // instead of a catch() block so that we don't swallow
  //     //     // exceptions from actual bugs in components.
  //     //     (error) => {
  //     //       this.setState({
  //     //         isLoaded: true,
  //     //         error,
  //     //       });
  //     //     }
  //     //   );
  //   }

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
          <form action="">
            <input type="email" placeholder="email" name="" />
            <input type="password" placeholder="password" name="" />
            <button id="login-submit" type="submit">
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
