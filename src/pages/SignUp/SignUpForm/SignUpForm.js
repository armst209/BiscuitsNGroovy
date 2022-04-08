//react imports
import { Link } from "react-router-dom";
import { useState } from "react";
import useValidation from "common/hooks/Validation/useValidation";

//styles
import "common/hooks/Validation/useValidationStyles.scss";
import "./SignUpFormStyles.scss";
import styles from "../SignUp.module.scss";

//component imports
import LinkFlowButton from "../LinkFlowButton";

//svg imports
import { ReactComponent as ValidationSuccess } from "common/assets/images/check.svg";

//other imports
import axios from "axios";

//Importing Flow Configuration
import { config } from "@onflow/fcl";
import * as fcl from "@onflow/fcl";

//configure flow environment
//points to env.js not global prod and dev envs
config()
  .put("accessNode.api", process.env.REACT_APP_ACCESS_NODE) // Configure FCL's Access Node
  .put("challenge.handshake", process.env.REACT_APP_WALLET_DISCOVERY) // Configure FCL's Wallet Discovery mechanism
  .put("0xProfile", process.env.REACT_APP_CONTRACT_PROFILE); // Will let us use `0xProfile` in our Cadence

const SignUpForm = ({
  setShowFlowButtonLoader,
  hideSignUpLoaderHandler,
  showSignUpLoaderHandler,
}) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  //state handlers
  const showSignUpButtonLoaderHandler = () => {
    setIsButtonLoading(true);
  };
  const hideSignUpButtonLoaderHandler = () => {
    setIsButtonLoading(false);
  };

  const {
    email,
    userName: username,
    password,
    emailErrorMessage,
    passwordErrorMessage,
    userNameErrorMessage,
    emailInputLoginClass,
    passwordInputLoginClass,
    userNameInputLoginClass,
    showUserNameValidationCheck,
    showEmailValidationCheck,
    showPasswordValidationCheck,
    errorMessages,
    setShowEmailValidationCheck,
    setShowUserNameValidationCheck,
    setEmailInputLoginClass,
    setUserNameInputLoginClass,
    setErrorMessages,
    inputValidation,
  } = useValidation();

  //function sets token and redirects to homepage
  const handleSuccess = (res) => {
    //fires after blocto account is set up
    localStorage.setItem("auth_token", res.data.token); //sets user token
    hideSignUpButtonLoaderHandler(); //stops button loader
    hideSignUpLoaderHandler(); //stops page loader
    window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/"); //redirects to home page
  };

  const handleError = (error) => {
    hideSignUpButtonLoaderHandler();
    hideSignUpLoaderHandler();
    switch (Number(error.response.status)) {
      case 409:
        setErrorMessages(error.response.data);
        setShowEmailValidationCheck(false);
        setShowUserNameValidationCheck(false);
        setEmailInputLoginClass("input-error");
        setUserNameInputLoginClass("input-error");
        break;
      case 422:
        setErrorMessages(error.response.data);
        // setEmailErrorMessage("Email or Username has already been taken")
        setShowEmailValidationCheck(false);
        setShowUserNameValidationCheck(false);
        setEmailInputLoginClass("input-error");
        setUserNameInputLoginClass("input-error");
        break;
      default:
        setErrorMessages(error.response.data);
        break;
    }

    setErrorMessages(error.response.data);
  };

  const submit = async function (event) {
    event.preventDefault();
    showSignUpLoaderHandler();
    showSignUpButtonLoaderHandler();

    // if flow account is not linked throw error
    let currUser = await fcl.currentUser().snapshot();
    if (currUser.addr === null) {
      console.log("Error");
      return;
    }

    let flow_address = currUser.addr;

    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/registration`,
      data: {
        email,
        name: "",
        username,
        password,
        flow_address,
      },
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((error) => {
        handleError(error);
      });
  };

  return (
    <>
      <form>
        <div className={styles["error-message-main"]}>{errorMessages}</div>
        <fieldset className="input-styles">
          <label className="label-error-message email-label" htmlFor="email">
            {emailErrorMessage}
          </label>
          <input
            className={emailInputLoginClass}
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            onChange={inputValidation}
            required
          />
          {showEmailValidationCheck && (
            <ValidationSuccess className="valid-check-icon email-check" />
          )}

          <label className="label-error-message username-label" htmlFor="username">
            {userNameErrorMessage}
          </label>
          <input
            className={userNameInputLoginClass}
            id="username"
            type="text"
            name="username"
            autoComplete="username"
            onChange={inputValidation}
            required
          />
          {/* check icon */}
          {showUserNameValidationCheck && (
            <ValidationSuccess className="valid-check-icon username-signup-check" />
          )}

          <label className="label-error-message password-signup-label" htmlFor="password">
            {passwordErrorMessage}
          </label>
          <input
            className={passwordInputLoginClass}
            id="password"
            type="password"
            name="password"
            autoComplete="off"
            onChange={inputValidation}
            required
          />
          {/* check icon */}
          {showPasswordValidationCheck && (
            <ValidationSuccess className="valid-check-icon password-signup-check" />
          )}

          <div className="signup-checkbox-container">
            <label className="label-error-message terms-check-label" htmlFor="terms-check">
              I have read and agree to the
              <Link to="/privacy-terms-of-use">Terms & Privacy</Link>
            </label>
            <input
              className="signup-checkbox"
              name="terms-check"
              id="terms-check"
              type="checkbox"
              autoComplete="off"
              required
            />
          </div>
        </fieldset>
      </form>
      {/* Link Blocto Account/Create Account button */}
      <LinkFlowButton
        submit={submit}
        setShowFlowButtonLoader={setShowFlowButtonLoader}
        setErrorMessages={setErrorMessages}
        isButton={isButtonLoading}
      />
    </>
  );
};

export default SignUpForm;
