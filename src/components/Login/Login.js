import { useState } from "react";
import "./LoginStyles.scss";
import axios from "axios";

import { ReactComponent as Logo } from "../../assets/images/bng_test.svg";
import { ReactComponent as LoginArrow } from "../../assets/images/login.svg";
import { ReactComponent as LoginLoading } from "../../assets/images/pulse_loader_black.svg";
import { ReactComponent as Warning } from "../../assets/images/exclamation.svg";
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
      <LoginArrow />
    </>
  );

  const submit = (event) => {
    event.preventDefault();
    setLoginStatus(
      <>
        <div>Logging In...</div>
        <LoginLoading />
      </>
    );

    axios({
      method: "post",
      url: `${env.BACKEND_URL}/login`,
      data: { username: username, password: password },
      loading: false,
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleFailure(err);
      });

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
          <LoginArrow />
        </>
      );
      setInputClass("input-error");
      setMessage(
        <div className="error-message">
          <Warning className="warning-icon" /> Username or Password is
          incorrect. Please try again.
        </div>
      );
    };
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
              <Logo />
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
              {/* <div className="forgot-password">
                <Link
                  onClick={() => {
                    props.showLoginPopup(!props.loginPopup);
                    props.setMobileMenuOpen(false);
                  }}
                  to="/password-recovery"
                >
                  Forgot Password?
                </Link>
              </div> */}
              {message}
            </form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Login;
