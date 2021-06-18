import React, { useState } from "react";
import "./LoginStyles.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import spotlight from "../../assets/images/spotlight2.png";

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
      // setTimeout(() => {

      // }, 2000);
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
    <section id="login">
      <Navbar />
      {/* <h1>
        <div>PORTAL</div>
        <div>
          <img src={spotlight} alt="spotlight" />
        </div>
      </h1> */}
      <div className="login-container">
        <div className="login-contents">
          <h2>Sign In</h2>
          <p>
            <span>
              New user? <Link to="/signup">Create an account</Link>
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
            <i class="fab fa-google"></i> <span>Sign In with Google</span>
          </button>
          <button>
            <i class="fab fa-facebook-square"></i>
            <span>Sign In with Facebook</span>
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Login;
