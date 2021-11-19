import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import env from "react-dotenv";
import "./LoginFormStyles.scss";
import { ReactComponent as LoginArrow } from "../../../assets/images/login.svg";
import { ReactComponent as LoginLoading } from "../../../assets/images/pulse_loader_black.svg";
import { ReactComponent as Warning } from "../../../assets/images/exclamation.svg";

import GoogleLogin from "react-google-login";
import GoogleLoginButton from "../GoogleLogin/GoogleLoginButton";
import { minMaxLength, emailValidation } from "../../../modules/FormValidation";

const LoginForm = ({ setErrorMessages }) => {
  //=========STATE HOOKS=========
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [emailInputLoginClass, setEmailInputLoginClass] = useState("");
  const [passwordInputLoginClass, setPasswordInputLoginClass] = useState("");
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const [loginStatus, setLoginStatus] = useState(
    <>
      <div>Login</div>
      <LoginArrow />
    </>
  );
  //=========STATE HOOKS=========

  //function for form validation
  const loginFormValidation = (event) => {
    //destrcutring name & value from event.target
    let { name, value } = event.target;
    //switch execution based on "name" attribute on input elements
    switch (name) {
      case "email":
        setUserName(value);
        if (minMaxLength(value, 7)) {
          setEmailInputLoginClass("input-error");
          setIsLoginButtonDisabled(true);
          setUserNameErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">
                Username must be at least 7 characters
              </div>
            </>
          );
        } else {
          setEmailInputLoginClass("input-success");
          setIsLoginButtonDisabled(false);
          setUserNameErrorMessage("");
        }
        break;
      case "password":
        setPassword(value);
        if (minMaxLength(value, 7)) {
          setPasswordInputLoginClass("input-error");
          setIsLoginButtonDisabled(true);
          setPasswordErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">
                Password must be at least 7 characters
              </div>
            </>
          );
        } else {
          setPasswordInputLoginClass("input-success");
          setIsLoginButtonDisabled(false);
          setPasswordErrorMessage("");
        }
        break;
      default:
        break;
    }
  };

  const submit = (event) => {
    event.preventDefault();

    //setting login button elements for loading
    setLoginStatus(
      <>
        <div className>Logging In</div>
        <LoginLoading className="login-loading" />
      </>
    );

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/login`,
      data: { username: userName, password: password },
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleFailure(err);
      });

    const handleSuccess = (res) => {
      localStorage.setItem("token", res.data.token);
      window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/home");
    };

    const handleFailure = (err) => {
      console.log(err);
      //setting login button elements for errors
      setLoginStatus(
        <>
          <div>Login</div>
          <LoginArrow />
        </>
      );
      //setting input error classes
      setPasswordInputLoginClass("input-error");
      setEmailInputLoginClass("input-error");
      //setting error message
      setErrorMessages(
        <>
          <Warning className="warning-icon" />
          <div className="error-message-text-main">
            Username or Password is incorrect. Please try again.
          </div>
        </>
      );
    };
  };
  return (
    <form id="login-form" onSubmit={submit}>
      {/* Google Login */}
      <GoogleLoginButton />
      <div className="or-fold">
        <hr />
        <p>or</p>
        <hr />
      </div>

      <div className="input-styles">
        <div className="error-message">{userNameErrorMessage}</div>

        <input
          className={emailInputLoginClass}
          name="email"
          type="text"
          placeholder="Username"
          required
          autoComplete="off"
          onChange={loginFormValidation}
        />
        <div className="error-message">{passwordErrorMessage}</div>
        <input
          className={passwordInputLoginClass}
          name="password"
          type="password"
          placeholder="Password"
          required
          autoComplete="off"
          onChange={loginFormValidation}
        />
      </div>

      <div className="login-btn-password">
        <div className="login-button">
          <button disabled={isLoginButtonDisabled} type="submit">
            {loginStatus}
          </button>
        </div>
      </div>
      <p>
        <span>
          Don't have an account?{" "}
          <Link to="/signup" className="signup-redirect">
            Sign up
          </Link>
        </span>
      </p>
      <div className="forgot-password">
        <Link to="/password-recovery">Forgot Password?</Link>
      </div>
    </form>
  );
};

export default LoginForm;
