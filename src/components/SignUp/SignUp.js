import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./SignUpStyles.scss";
import axios from "axios";
import logo from "../../assets/images/bng_mobile_logo.svg";

// import spotlight from "../../assets/images/spotlight2.png";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = (res) => {
    const token = res.data.token;
    if (token) {
      window.location.replace("http://localhost:3000/home");
    } else {
      alert("A token was not set, please try signing up again.");
    }
  };

  const submit = (event) => {
    event.preventDefault();

    const baseURL =
      "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";

    axios({
      method: "post",
      url: `${baseURL}/registration`,
      data: { email, name, username, password },
    })
      .then((res) => {
        handleSignUp(res);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(
          "Username or Password has already been taken. Please input different information"
        );
      });
  };

  return props.trigger ? (
    <section id="signup">
      <div className="signup-container">
        <div className="signup-contents">
          <div
            className="close-btn-signup"
            onClick={() => props.setTrigger(false)}
          >
            <div>X</div>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h2>Sign Up</h2>
          <p>
            Already have an account?
            <span
              onClick={() => {
                props.setTrigger(false);
                props.showLogIn(true);
              }}
            >
              <span className="login-redirect"> Login</span>
            </span>
          </p>
          <form onSubmit={submit}>
            <input
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              autoComplete="off"
              onChange={(event) => setName(event.target.value)}
            />

            <input
              type="text"
              placeholder="Username"
              required
              autoComplete="off"
              onChange={(event) => setUserName(event.target.value)}
            />
            <input
              type="Password"
              placeholder="Password"
              required
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">SIGN UP</button>
          </form>
          <div className="error-message">{errorMessage}</div>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
};

export default SignUp;
