import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpStyles.scss";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [redirect, setRedirect] = useState(false);
  const [token, setToken] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const baseURL =
      "https://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";

    const response = axios({
      method: "post",
      url: `${baseURL}/registration`,
      data: { email, first_name, last_name, username, password },
    })
      .then((res) => {
        setToken(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (response) {
      localStorage.setItem("token", token);
      // setRedirect(true);
      console.log(response);
    } else {
      alert("You are not logged in");
    }
  };
  // if (redirect) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div id="signup">
      <div className="signup-contents">
        <h1>Sign Up</h1>
        <p>
          Already have an account?
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="First Name"
            // name="firstName"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            // name="lastName"
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            // name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            placeholder="username"
            // name="email"
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            // name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
