import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpStyles.scss";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [redirect, setRedirect] = useState(false);
  // const [token, setToken] = useState("");

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
        console.log(res.data);
        let token = res.data.token;

        if (token) {
          props.history.push("/home");
        } else {
          alert("something was input incorrectly");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // if (response) {
    //   localStorage.setItem("token", token);
    //   // setRedirect(true);
    //   console.log(response);
    // } else {
    //   alert("You are not logged in");
    // }
  };
  // if (redirect) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div id="signup">
      <Navbar />
      <div className="signup-container">
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
              placeholder="password"
              required
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
