import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SignUpStyles.scss";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    const baseURL = "ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
    await fetch(`${baseURL}/registration`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

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
            name="firstName"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
