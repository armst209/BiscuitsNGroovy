import React, { useState } from "react";
import "./SignUpStyles.scss";
import axios from "axios";
import logo from "../../assets/images/bng_test.svg";
import LinkFlowButton from "./LinkFlowButton";
import * as fcl from "@onflow/fcl";
import env from "react-dotenv";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [flowLoader, setFlowLoader] = useState("");
  const [inputClass, setInputClass] = useState("");

  const handleSignUp = (res) => {
    const token = res.data.token;
    if (token) {
      window.location.replace(env.FRONTEND_URL + "home");
    } else {
      alert("A token was not set, please try signing up again.");
    }
  };

  const submit = async function (event) {
    //if flow account is not linked throw error
    let currUser = await fcl.currentUser().snapshot();
    if (currUser.addr === null) {
      setInputClass("input-error-signup");
      setErrorMessage(
        <div className="error-message">
          You must link your Biscuits n Groovy account with a Flow wallet.
        </div>
      );
      return;
    }
    let flow_address = currUser.addr;
    event.preventDefault();
    const baseURL = env.BACKEND_URL;

    axios({
      method: "post",
      url: `${baseURL}/registration`,
      data: { email, name, username, password, flow_address },
    })
      .then((res) => {
        handleSignUp(res);
      })
      .catch((err) => {
        console.log(err);
        setInputClass("input-error-signup");
        setErrorMessage(
          <div className="error-message">
            Username or Password has already been taken. Please input different
            information
          </div>
        );
      });
  };

  return props.trigger ? (
    <section id="signup">
      <div className="signup-wrapper">
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
            <h2>SIGN UP</h2>
            <p className="already-account">
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
                className={inputClass}
                type="email"
                placeholder="Email"
                required
                autoComplete="off"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className={inputClass}
                type="text"
                placeholder="Name"
                autoComplete="off"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className={inputClass}
                type="text"
                placeholder="Username"
                required
                autoComplete="off"
                onChange={(event) => setUserName(event.target.value)}
              />
              <input
                className={inputClass}
                type="Password"
                placeholder="Password"
                required
                autoComplete="off"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                onChange={(event) => setPassword(event.target.value)}
              />
            </form>
            <LinkFlowButton flowBtnLoader={setFlowLoader} />

            {flowLoader}
          </div>
        </div>
        {errorMessage}
      </div>
    </section>
  ) : (
    ""
  );
};

export default SignUp;
