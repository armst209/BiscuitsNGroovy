import { useState } from "react";
import "./LoginFormStyles.scss";
import "../../../customHooks/Validation/useValidationStyles.scss";
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import { ReactComponent as Warning } from "../../../assets/images/exclamation.svg";
import { ReactComponent as ValidationSuccess } from "../../../assets/images/check.svg";
import axios from "axios";

import useValidation from "../../../customHooks/Validation/useValidation";
const LoginForm = () => {
  //useValidation hook
  const {
    userName,
    password,
    userNameErrorMessage,
    passwordErrorMessage,
    userNameInputLoginClass,
    passwordInputLoginClass,
    showUserNameValidationCheck,
    showPasswordValidationCheck,
    passwordInputType,
    isHidden,
    errorMessages,
    setErrorMessages,
    inputValidation,
    setShowUserNameValidationCheck,
    setShowPasswordValidationCheck,
    setUserNameInputLoginClass,
    setPasswordInputLoginClass,
    changeInputType,
  } = useValidation("event");
  //=========STATE HOOKS=========

  const [loginStatus, setLoginStatus] = useState(
    <>
      <span>Sign In</span>
    </>
  );
  //=========STATE HOOKS=========

  const submit = (event) => {
    event.preventDefault();

    //setting login button elements for loading
    setLoginStatus(
      <div className="signing-in-status">
        <div>Signing In</div>
        <RecordSpinner className="signin-loading-icon rotate" />
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
            value={userName}
            name="username"
            type="text"
            placeholder="Enter username"
            autoComplete="username"
            onChange={inputValidation}
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
          <h5 className="show-password" onClick={changeInputType}>
            {isHidden} Password
          </h5>
          <input
            className={passwordInputLoginClass}
            id="password"
            value={password}
            name="login-password"
            type={passwordInputType}
            placeholder="Enter password"
            autoComplete="current-password"
            onChange={inputValidation}
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
          <button className="signin-button-link" type="submit">
            {loginStatus}
          </button>
        </div>
      </div>
      <div className="error-message-main">{errorMessages}</div>
    </form>
  );
};

export default LoginForm;
