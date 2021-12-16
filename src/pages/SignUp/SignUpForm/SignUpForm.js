import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpFormStyles.scss";
import axios from "axios";
import env from "react-dotenv";
import validator from "validator";

import { ReactComponent as Warning } from "../../../assets/images/exclamation.svg";
//Importing Flow Configuration
import { config } from "@onflow/fcl";
import * as fcl from "@onflow/fcl";
import LinkFlowButton from "../LinkFlowButton";

//configure flow environment
config()
  .put("accessNode.api", env.REACT_APP_ACCESS_NODE) // Configure FCL's Access Node
  .put("challenge.handshake", env.REACT_APP_WALLET_DISCOVERY) // Configure FCL's Wallet Discovery mechanism
  .put("0xProfile", env.REACT_APP_CONTRACT_PROFILE); // Will let us use `0xProfile` in our Cadence

const SignUpForm = ({ setErrorMessages, setShowFlowButtonLoader }) => {
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
        if (validator.isEmail(value)) {
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
        if (validator.isLength(value, { min: 7, max: 20 })) {
          setUserNameInputLoginClass("input-success");
          setUserNameErrorMessage("Username");
        } else {
          setUserNameInputLoginClass("input-error");
          setUserNameErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">
                Username must be at least 7 characters
              </div>
            </>
          );
        }

        break;
      case "password":
        setPassword(value);
        if (
          !validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            returnScore: false,
            pointsPerUnique: 1,
            pointsPerRepeat: 0.5,
            pointsForContainingLower: 10,
            pointsForContainingUpper: 10,
            pointsForContainingNumber: 10,
            pointsForContainingSymbol: 10,
          })
        ) {
          setPasswordInputLoginClass("input-error");
          setPasswordErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">
                Password is not strong enough
              </div>
            </>
          );
          setErrorMessages(
            <ul>
              <li>
                <Warning className="warning-icon" />
                <div className="error-message-text">
                  Password must be a minimum of 8 characters
                </div>
              </li>
              <li>
                <Warning className="warning-icon" />
                <div className="error-message-text">
                  Password must have at least 1 uppercase letter
                </div>
              </li>
              <li>
                <Warning className="warning-icon" />
                <div className="error-message-text">
                  Password must have at least 1 lowercase letter
                </div>
              </li>
              <li>
                <Warning className="warning-icon" />
                <div className="error-message-text">
                  Password must have at least 1 number
                </div>
              </li>
              <li>
                <Warning className="warning-icon" />
                <div className="error-message-text">
                  Password must have at least 1 symbol i.e $,#,%,&,*
                </div>
              </li>
            </ul>
          );
        } else {
          setPasswordInputLoginClass("input-success");
          setPasswordErrorMessage("Password");
          setErrorMessages("");
        }
        break;
      case "confirm-password":
        setConfirmPassword(value);
        if (password === confirmPassword && confirmPassword.length !== 0) {
          setConfirmPasswordErrorMessage("Confirm Password");
          setConfirmPasswordInputLoginClass("input-success");
        } else {
          setConfirmPasswordErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">Passwords do not match</div>
            </>
          );
          setConfirmPasswordInputLoginClass("input-error");
        }
        break;
      case "terms-check":
        if (value !== "on") {
          alert("please check box");
        }

        break;
      default:
        break;
    }
  };

  //function sets token and redirects to homepage
  const handleSignUp = (res) => {
    //fires after blocto account is set up
    localStorage.setItem("token", res.data.token);
    window.location.replace(env.FRONTEND_URL + "/");
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
    <>
      <form>
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
            onBlur={signupFormValidation}
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
            onBlur={signupFormValidation}
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
            autoComplete="off"
            onBlur={signupFormValidation}
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
            onBlur={signupFormValidation}
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
              autoComplete="off"
              onBlur={signupFormValidation}
              required
            />
          </div>
        </fieldset>
      </form>
      <LinkFlowButton
        submit={submit}
        setShowFlowButtonLoader={setShowFlowButtonLoader}
      />
    </>
  );
};

export default SignUpForm;
