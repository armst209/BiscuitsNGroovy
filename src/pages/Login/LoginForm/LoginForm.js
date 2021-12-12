import { useState } from "react";
import axios from "axios";

import "./LoginFormStyles.scss";
import { ReactComponent as SignInArrow } from "../../../assets/images/login.svg";
import { ReactComponent as LoginLoading } from "../../../assets/images/pulse_loader_black.svg";
import { ReactComponent as Warning } from "../../../assets/images/exclamation.svg";
import { ReactComponent as ValidationSuccess } from "../../../assets/images/check.svg";
import { ReactComponent as ValidationError } from "../../../assets/images/error.svg";

import GoogleLogin from "react-google-login";
import GoogleLoginButton from "../GoogleLogin/GoogleLoginButton";
import { minMaxLength } from "../../../modules/FormValidation";
import "../../../components/FormValidation/FormValidationStyles.scss";

const LoginForm = ({ setErrorMessages }) => {
  //=========STATE HOOKS=========
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("Username");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("Password");
  const [userNameInputLoginClass, setUserNameInputLoginClass] = useState("");
  const [passwordInputLoginClass, setPasswordInputLoginClass] = useState("");
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [isHidden, setIsHidden] = useState("Show");
  const [showUserNameValidationCheck, setShowUserNameValidationCheck] =
    useState(false);
  const [showPasswordValidationCheck, setShowPasswordValidationCheck] =
    useState(false);

  const [loginStatus, setLoginStatus] = useState(
    <>
      <span>Sign In</span>
    </>
  );

  //=========STATE HOOKS=========

  //validation for button submit
  const emptyInputOnSubmit = () => {
    if (userName.length === 0 && password.length === 0) {
      setUserNameInputLoginClass("input-error");
      setShowUserNameValidationCheck(false);
      setPasswordInputLoginClass("input-error");
      setShowPasswordValidationCheck(false);
      setUserNameErrorMessage(
        <>
          <Warning className="warning-icon" />
          <div className="label-error-text">Please fill out this field</div>
        </>
      );
      setPasswordErrorMessage(
        <>
          <Warning className="warning-icon" />
          <div className="label-error-text">Please fill out this field</div>
        </>
      );
    } else if (userName.length === 0) {
      setUserNameInputLoginClass("input-error");
      setShowUserNameValidationCheck(false);
      setUserNameErrorMessage(
        <>
          <Warning className="warning-icon" />
          <div className="label-error-text">Please fill out this field</div>
        </>
      );
    } else if (password.length === 0) {
      setPasswordInputLoginClass("input-error");
      setShowPasswordValidationCheck(false);
      setPasswordErrorMessage(
        <>
          <Warning className="warning-icon" />
          <div className="label-error-text">Please fill out this field</div>
        </>
      );
    }
  };
  //function for form validation
  const loginFormValidation = (event) => {
    //destrcutring name & value from event.target
    let { name, value } = event.target;

    //switch execution based on "name" attribute on input elements
    switch (name) {
      case "username":
        setUserName(value);
        if (minMaxLength(value, 0)) {
          setUserNameInputLoginClass("input-error");
          setShowUserNameValidationCheck(false);
          setUserNameErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="label-error-text">Please fill out this field</div>
            </>
          );
        } else {
          setUserNameInputLoginClass("input-success");
          setShowUserNameValidationCheck(true);
          setUserNameErrorMessage("Username");
        }

        break;
      case "password":
        setPassword(value);
        if (minMaxLength(value, 0)) {
          setPasswordInputLoginClass("input-error");
          setShowPasswordValidationCheck(false);
          setPasswordErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="label-error-text">Please fill out this field</div>
            </>
          );
        } else {
          setPasswordInputLoginClass("input-success");
          setShowPasswordValidationCheck(true);
          setPasswordErrorMessage("Password");
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
      <div className="signing-in-status">
        <div>Signing In</div>
        <LoginLoading className="signin-loading-icon" />
      </div>
    );

    //AXIOS POST METHOD
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

    //ON SUCCESS
    const handleSuccess = (res) => {
      localStorage.setItem("token", res.data.token);
      window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/home");
    };

    //ON FAILURE
    const handleFailure = (err) => {
      console.log(err);
      //setting login button elements for errors
      setLoginStatus(
        <>
          <span>Sign In</span>
          {/* <SignInArrow /> */}
        </>
      );

      //setting input error classes & icons
      setShowUserNameValidationCheck(false);
      setUserNameInputLoginClass("input-error");
      setShowPasswordValidationCheck(false);
      setPasswordInputLoginClass("input-error");

      //setting error message
      setErrorMessages(
        <>
          <div className="main-error-messages">
            <Warning className="warning-icon" />
            <div className="error-message-text-main">
              Username or Password is incorrect. Please try again.
            </div>
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

      <fieldset className="input-styles">
        <label
          id="username-label"
          htmlFor="username"
          className="label-error-message email-label"
        >
          {userNameErrorMessage}
        </label>
        <div className="username-input-container">
          <input
            className={userNameInputLoginClass}
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            autoComplete="username"
            onBlur={loginFormValidation}
            required
          />
          {/* check icon */}
          {showUserNameValidationCheck && (
            <ValidationSuccess className="valid-check-icon username-check" />
          )}
        </div>

        <label
          id="password-label"
          className="label-error-message password-label"
          htmlFor="password"
        >
          {passwordErrorMessage}
        </label>
        <div className="password-input-container">
          <h5
            className="show-password"
            onClick={() => {
              if (passwordInputType === "password") {
                setPasswordInputType("text");
                setIsHidden("Hide");
              } else {
                setPasswordInputType("password");
                setIsHidden("Show");
              }
            }}
          >
            {isHidden} Password
          </h5>
          <input
            className={passwordInputLoginClass}
            id="password"
            name="password"
            type={passwordInputType}
            placeholder="Enter password"
            autoComplete="current-password"
            onBlur={loginFormValidation}
            required
          />
          {/* check icon */}
          {showPasswordValidationCheck && (
            <ValidationSuccess className="valid-check-icon password-check" />
          )}
        </div>
      </fieldset>

      <div className="login-btn-password">
        <div className="signin-button-container">
          <button
            className="signin-button-link"
            onClick={emptyInputOnSubmit}
            type="submit"
          >
            {loginStatus}
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
