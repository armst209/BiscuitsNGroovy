import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpPopUp from "../SignUpPopUp/SignUpPopUp";
import FlowLoader from "../../../components/Loading/Forms/FlowLoader";
import axios from "axios";
import useValidation from "../../../customHooks/Validation/useValidation";
import LinkFlowButton from "../LinkFlowButton";
import env from "react-dotenv";

//styles
import styles from "../SignUp.module.scss";

//Importing Flow Configuration
import { config } from "@onflow/fcl";
import * as fcl from "@onflow/fcl";

//configure flow environment
//points to env.js not global prod and dev envs
config()
  .put("accessNode.api", env.REACT_APP_ACCESS_NODE) // Configure FCL's Access Node
  .put("challenge.handshake", env.REACT_APP_WALLET_DISCOVERY) // Configure FCL's Wallet Discovery mechanism
  .put("0xProfile", env.REACT_APP_CONTRACT_PROFILE); // Will let us use `0xProfile` in our Cadence

const NewSignUp = () => {
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
    inputValidation,
  } = useValidation();
  const [showSignUpInfo, setShowSignUpInfo] = useState(true);
  const [showFlowButtonLoader, setShowFlowButtonLoader] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  //function sets token and redirects to homepage
  const handleSignUp = (res) => {
    //fires after blocto account is set up
    localStorage.setItem("token", res.data.token);
    window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/");
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
        console.log(error);
        // if (error.response) {
        //   let errorType = error.response.status;
        //   console.log(error.response);
        //   switch (errorType) {
        //     case 422:
        //       setErrorMessages(error.response.data);
        //       break;
        //     case 500:
        //       setErrorMessages("Server Error");
        //       break;
        //     default:
        //       console.log("undefined error");
        //       setErrorMessages(error);
        //       break;
        //   }
        // }
      });
  };
  return (
    <section id={styles.signup}>
      <h2>Sign up to start your collection</h2>
      <div className={styles["error-message-main"]}>{errorMessages}</div>
      <div className={styles["signup-wrapper"]}>
        <div className={styles["signup-contents"]}>
          {/* switches between blocto signup and signup form */}

          <form>
            <div className="input-styles">
              <label
                className="label-error-message email-label"
                htmlFor="email"
              >
                {emailErrorMessage}
              </label>
              <input
                className={emailInputLoginClass}
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                onBlur={inputValidation}
                required
              />
              {/* {showEmailValidationCheck && (
          <ValidationSuccess className="valid-check-icon email-check" />
        )} */}

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
                onBlur={inputValidation}
                required
              />
              {/* check icon */}
              {/* {showUserNameValidationCheck && (
          <ValidationSuccess className="valid-check-icon username-check" />
        )} */}

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
                onChange={inputValidation}
                required
              />
              {/* check icon */}
              {/* {showPasswordValidationCheck && (
          <ValidationSuccess className="valid-check-icon password-check" />
        )} */}

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
                  // onBlur={signupFormValidation}
                  required
                />
              </div>
            </div>
          </form>
          <LinkFlowButton
            submit={submit}
            setShowFlowButtonLoader={setShowFlowButtonLoader}
            setErrorMessages={setErrorMessages}
          />

          <p className={styles["already-account"]}>
            Have an account?
            <Link className={styles["login-redirect"]} to="/signin">
              <span>Sign In</span>
            </Link>
          </p>
        </div>
      </div>
      {showFlowButtonLoader && <FlowLoader />}
      {showSignUpInfo && <SignUpPopUp setShowSignUpInfo={setShowSignUpInfo} />}
    </section>
  );
};

export default NewSignUp;
