import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpStyles.scss";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = (res) => {
    let token = res.data.token;
    if (token) {
      props.history.push("/home");
    } else {
      alert("something was input incorrectly");
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
        if (err) {
          setErrorMessage(
            "Username or Password has already been taken. Please input different information"
          );
        }
      });
  };

  return (
    <section id="signup">
      <Navbar />
      <div className="signup-container">
        <h1>Start your collection today</h1>
        <div className="signup-contents">
          <h2>Sign Up</h2>
          <p>
            <span>
              Already have an account? <Link to="/login">Login</Link>
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
      <Footer />
    </section>
  );
};

export default SignUp;
