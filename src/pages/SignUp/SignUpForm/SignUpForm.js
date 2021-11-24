import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpFormStyles.scss";
import axios from "axios";
import env from "react-dotenv";
import {
  emailValidation,
  minMaxLength,
  validateConfirmPassword,
} from "../../../modules/FormValidation.js";
import { ReactComponent as Warning } from "../../../assets/images/exclamation.svg";
//Importing Flow Configuration
import { config } from "@onflow/fcl";
import * as fcl from "@onflow/fcl";
import LinkFlowButton from "../LinkFlowButton";
import FlowLoader from "../../../components/Loading/Forms/FlowLoader";

//configure flow environment
config()
  .put("accessNode.api", env.REACT_APP_ACCESS_NODE) // Configure FCL's Access Node
  .put("challenge.handshake", env.REACT_APP_WALLET_DISCOVERY) // Configure FCL's Wallet Discovery mechanism
  .put("0xProfile", env.REACT_APP_CONTRACT_PROFILE); // Will let us use `0xProfile` in our Cadence

const handleSignUp = (res) => {
  //fires after blocto account is set up
  localStorage.setItem("token", res.data.token);
  window.location.replace(env.FRONTEND_URL + "/home");
};

const SignUpForm = ({ setErrorMessages }) => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("Email");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("Username");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("Password");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("Confirm Password");
  const [emailInputLoginClass, setEmailInputLoginClass] = useState("");
  const [passwordInputLoginClass, setPasswordInputLoginClass] = useState("");
  const [userNameInputLoginClass, setUserNameInputLoginClass] = useState("");
  const [confirmPasswordInputLoginClass, setConfirmPasswordInputLoginClass] =
    useState("");

  const signupFormValidation = (event) => {
    let { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        if (emailValidation(value)) {
          setEmailInputLoginClass("input-success");
          setEmailErrorMessage("Email");
        } else {
          setEmailInputLoginClass("input-error");
          setEmailErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">Invalid Email</div>
            </>
          );
        }
        break;
      case "username":
        setUserName(value);
        if (minMaxLength(value, 7)) {
          setUserNameInputLoginClass("input-error");
          setUserNameErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">
                Username must be at least 7 characters
              </div>
            </>
          );
        } else {
          setUserNameInputLoginClass("input-success");
          setUserNameErrorMessage("Username");
        }

        break;
      case "password":
        setPassword(value);
        if (minMaxLength(value, 7)) {
          setPasswordInputLoginClass("input-error");
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
          setPasswordErrorMessage("Password");
        }
        break;
      case "confirm-password":
        setConfirmPassword(value);
        if (!validateConfirmPassword(password, value)) {
          setConfirmPasswordErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">Passwords do not match</div>
            </>
          );
          setConfirmPasswordInputLoginClass("input-error");
        } else {
          setConfirmPasswordErrorMessage("Confirm Password");
          setConfirmPasswordInputLoginClass("input-success");
        }
        break;
      default:
        break;
    }
  };
  const submit = async function (event) {
    event.preventDefault();

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
        username,
        password,
        flow_address,
      },
    })
      .then((res) => {
        handleSignUp(res);
      })
      .catch((error) => {
        if (error.response) {
          let errorType = error.response.status;
          console.log(error.response);
          switch (errorType) {
            case 422:
              setErrorMessages(error.response.data);
              break;

            case 500:
              setErrorMessages("Server Error");
              break;
            default:
              console.log("undefined error");
              break;
          }
        }
      });
  };

  return (
    <form onSubmit={submit}>
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
          onKeyUp={signupFormValidation}
          required
        />
        <label
          className="label-error-message username-label"
          htmlFor="username"
        >
          {userNameErrorMessage}
        </label>
        <input
          className={userNameInputLoginClass}
          id="username"
          type="text"
          name="username"
          autoComplete="username"
          minLength="7"
          onChange={signupFormValidation}
          required
        />

        <label
          className="label-error-message password-signup-label"
          htmlFor="password"
        >
          {passwordErrorMessage}
        </label>
        <input
          className={passwordInputLoginClass}
          id="password"
          type="password"
          name="password"
          autoComplete="new-password"
          minLength="7"
          onKeyUp={signupFormValidation}
          required
        />
        <label
          className="label-error-message confirm-password-label"
          htmlFor="confirm-passowrd"
        >
          {confirmPasswordErrorMessage}
        </label>
        <input
          className={confirmPasswordInputLoginClass}
          id="confirm-password"
          type="password"
          name="confirm-password"
          autoComplete="off"
          minLength="7"
          onKeyUp={signupFormValidation}
          required
        />
        <div className="signup-checkbox-container">
          <label
            className="label-error-message terms-check-label"
            htmlFor="terms-check"
          >
            I have read and agree to the
            <Link to="/privacy-terms-of-use">Terms & Privacy</Link>
          </label>
          <input
            className="signup-checkbox"
            name="terms-check"
            id="terms-check"
            type="checkbox"
            minLength="7"
            autoComplete="off"
            onKeyUp={signupFormValidation}
            required
          />
        </div>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
