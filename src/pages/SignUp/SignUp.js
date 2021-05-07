import React from "react";
import { Link } from "react-router-dom";
import "./SignUpStyles.scss";

function SignUp() {
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
        <form action="">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
