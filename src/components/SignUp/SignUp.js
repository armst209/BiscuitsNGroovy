import React, { useState } from "react";
import "./SignUpStyles.scss";
import axios from "axios";
import { motion } from "framer-motion";
import logo from "../../assets/images/bng_test.svg";
import LinkFlowButton from "./LinkFlowButton";
import * as fcl from "@onflow/fcl";
import env from "react-dotenv";
import SignUpModal from "./SignUpPopUp/SignUpPopUp";
import question_mark from "../../assets/images/help_question_yellow.svg";

//variants for framer motion
const signUpModalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
//props passed as an object
const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [errorMessageContainer, setErrorMessageContainer] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [flowLoader, setFlowLoader] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [passwordClass, setPasswordClass] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [changeStyles, setChangeStyles] = useState("signup-modal");

  const handleSignUp = (res) => {
    localStorage.setItem("token", res.data.token);
    console.log("successful sign up");
    window.location.replace(env.FRONTEND_URL + "/artists");
  };

  const submit = async function (event) {
    //Form Validation

    //throws error if passwords aren't the same
    if (reEnterPassword != password) {
      setPasswordClass("input-error-signup");
      setErrorMessageContainer(!errorMessageContainer);
      setErrorMessage("Passwords must match");
      return;
    }
    // if (reEnterPassword === password) {
    //   setPasswordClass("");
    //   setErrorMessageContainer(false);
    // }

    //if flow account is not linked throw error
    let currUser = await fcl.currentUser().snapshot();
    if (currUser.addr === null) {
      setInputClass("input-error-signup");
      setErrorMessageContainer(!errorMessageContainer);
      setErrorMessage(
        "You must link your Biscuits n Groovy account with a Flow wallet."
      );
      return;
    }

    let flow_address = currUser.addr;
    event.preventDefault();
    const baseURL = env.BACKEND_URL;

    axios({
      method: "post",
      url: `${baseURL}/registration`,
      data: { email, name, username, password },
    })
      .then((res) => {
        handleSignUp(res);
        console.log("hit");
      })
      .catch((err) => {
        console.log(err);

        setInputClass("input-error-signup");
        setErrorMessageContainer(!errorMessageContainer);
        setErrorMessage(
          "Username or Password has already been taken. Please input different information"
        );
      });
  };

  return (
    <motion.section
      id="signup"
      variants={signUpModalBackground}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <SignUpModal
        changeStyles={changeStyles}
        setChangeStyles={setChangeStyles}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        className="signup-wrapper"
      >
        <div className="signup-container">
          <div className="signup-contents">
            <div className="close-btn-signup">
              <div onClick={() => props.showSignUpPopup(!props.signUpPopup)}>
                X
              </div>
            </div>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h2>SIGN UP</h2>
            <p className="already-account">
              Already have an account?
              <span
                onClick={() => {
                  props.showSignUpPopup(!props.signUpPopup);
                  props.showLoginPopup(!props.loginPopup);
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
                placeholder="Username"
                maxlength="15"
                required
                autoComplete="off"
                onChange={(event) => setUserName(event.target.value)}
              />
              <input
                className={`${inputClass} ${passwordClass}`}
                type="Password"
                placeholder="Password"
                maxlength="15"
                required
                autoComplete="off"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                onChange={(event) => setPassword(event.target.value)}
              />
              <input
                className={`${inputClass} ${passwordClass}`}
                type="Password"
                placeholder="Re-Enter Password"
                maxlength="15"
                required
                autoComplete="off"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                onChange={(event) => setReEnterPassword(event.target.value)}
              />
            </form>
            <LinkFlowButton submit={submit} flowBtnLoader={setFlowLoader} />

            {flowLoader}
          </div>
        </div>

        <motion.div
          className="help-button"
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <img src={question_mark} alt="question mark" width="50px" />
        </motion.div>
      </motion.div>
      {errorMessageContainer && (
        <div className="error-message">{errorMessage}</div>
      )}
    </motion.section>
  );
};

export default SignUp;
