import React, { useState } from "react";
import "./LoginStyles.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/bng_test.svg";
import login_arrow from "../../assets/images/login.svg";
import login_loading from "../../assets/images/pulse_loader_black.svg";
import warning from "../../assets/images/exclamation.svg";
import env from "react-dotenv";
import { motion } from "framer-motion";

//variants for framer motion
const loginModalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [loginStatus, setLoginStatus] = useState(
    <>
      <div>Login</div>
      <img src={login_arrow} alt="arrow" />
    </>
  );

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
      //timing out login redirect in case of hangup
      setTimeout(() => {
        window.location.replace(env.FRONTEND_URL + "/home");
      }, 0);
    };

    const handleFailure = (err) => {
      console.log(err);
      setLoginStatus(
        <>
          <div>Login</div>
          <img src={login_arrow} alt="arrow" />
        </>
      );
      setInputClass("input-error");
      setMessage(
        <div className="error-message">
          <img className="warning-icon" src={warning} alt="warning" /> Username
          or Password is incorrect. Please try again.
        </div>
      );
    };

    const baseURL = env.BACKEND_URL;

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

  return (
    <motion.section
      id="login"
      variants={loginModalBackground}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        className="login-wrapper"
        exit={{ y: "-100vh" }}
      >
        <div className="login-container">
          <div className="login-contents">
            <div
              className="close-btn-login"
              onClick={() => props.showLoginPopup(!props.loginPopup)}
            >
              <div>X</div>
            </div>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h2>Sign in to Biscuits n Groovy</h2>

            <form onSubmit={submit}>
              <div className="input-styles">
                <input
                  className={inputClass}
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
                  className={inputClass}
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
                    props.showLoginPopup(!props.loginPopup);
                    props.showSignUpPopup(!props.signUpPopup);
                    props.setMobileMenuOpen(props.mobileMenuOpen);
                  }}
                >
                  New user?{" "}
                  <span className="signup-redirect">Create an account</span>
                </span>
              </p>
              <div className="forgot-password">
                <Link
                  onClick={() => {
                    props.showLoginPopup(!props.loginPopup);
                    props.setMobileMenuOpen(false);
                  }}
                  to="/account-recovery-email"
                >
                  Forgot Password?
                </Link>
              </div>
              {message}
            </form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Login;
