import React, { Component, useState } from "react";
//import { minMaxLength, validEmail, passwordStrength } from "./SignUpValidation";
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
  // const [errorMessageContainer, setErrorMessageContainer] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  const [flowLoader, setFlowLoader] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [passwordClass, setPasswordClass] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [changeStyles, setChangeStyles] = useState("signup-modal");
  // const [user, setUser] = useState({});
  // const [formErrors, setFormErrors] = useState({});

  //password validation for both password inputs
  // function validateConfirmPassword(password, confirmpassword, formErrors) {
  //   formErrors = formErrors || {};
  //   if (password !== confirmpassword) {
  //     formErrors.confirmpassword =
  //       "Confirmed password is not matching with password";
  //     return false;
  //   } else {
  //     delete formErrors.confirmpassword;
  //     return true;
  //   }
  // }

  // const registeredUsers = ["armst209@gmail.com"];
  // function userExists(email) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       if (registeredUsers.findIndex((u) => u === email) !== -1) {
  //         resolve(true);
  //       } else {
  //         resolve(false);
  //       }
  //     });
  //   });
  // }

  // function handleChange(e) {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case "email":
  //       setUser({ ...user, email: value });
  //       if (!value || validEmail(value)) {
  //         formErrors[name] = `Email address is invalid`;
  //       } else {
  //         userExists(value).then((result) => {
  //           if (result) {
  //             formErrors[name] =
  //               "The email is already registered. Please use a different email.";
  //           } else {
  //             delete formErrors[name];
  //           }
  //         });
  //       }

  //       break;

  //     case "username":
  //       setUser({ ...user, username: value });
  //       if (minMaxLength(value, 7)) {
  //         formErrors[name] = `Username should have minimum 7 characters`;
  //       } else {
  //         delete formErrors[name];
  //       }
  //       break;
  //     case "password":
  //       setUser({ ...user, password: value });
  //       if (minMaxLength(value, 6)) {
  //         formErrors[name] = "Password should have minimum 6 characters";
  //       } else if (passwordStrength(value)) {
  //         formErrors[name] =
  //           "Password is not strong enough. Include an upper case letter, a number or a special character to make it strong";
  //       } else {
  //         delete formErrors[name];
  //         setUser({
  //           ...user,
  //           password: value,
  //         });
  //         if (user.confirmpassword) {
  //           validateConfirmPassword(value, user.confirmpassword, formErrors);
  //         }
  //       }
  //       break;

  //     case "confirmpassword":
  //       setUser({ ...user, confirmpassword: value });
  //       let valid = validateConfirmPassword(user.password, value, formErrors);
  //       if (valid) {
  //         setUser({ ...user, confirmpassword: value });
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // }
  const handleSignUp = (res) => {
    localStorage.setItem("token", res.data.token);

    window.location.replace(env.FRONTEND_URL + "/home");
    console.log("successful sign up");
  };

  const submit = async function (event) {
    console.log("hit");
    console.log(username);
    event.preventDefault();
    //Form Validation

    //throws error if passwords aren't the same
    // if (reEnterPassword != password) {
    //   setPasswordClass("input-error-signup");
    //   setErrorMessageContainer(!errorMessageContainer);
    //   setErrorMessage("Passwords must match");
    //   return;
    // }
    // if (reEnterPassword === password) {
    //   setPasswordClass("");
    //   setErrorMessageContainer(false);
    // }

    //if flow account is not linked throw error
    let currUser = await fcl.currentUser().snapshot();
    if (currUser.addr === null) {
      console.log("Error");
      return;
    }

    let flow_address = currUser.addr;
    //event.preventDefault();
    const baseURL = env.BACKEND_URL;
    console.log(baseURL);

    axios({
      method: "post",
      url: `${baseURL}/registration`,
      data: {
        email: email,
        name: name,
        username: username,
        password: password,
        flow_address,
      },
    })
      .then((res) => {
        console.log("hit in promise");
        handleSignUp(res);
      })
      .catch((err) => {
        console.log(err);
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
            {/* <form noValidate>
              <input
                className={
                  formErrors && formErrors.email
                    ? "form-control error"
                    : "form-control"
                }
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={handleChange}
              />

              <input
                className={
                  formErrors && formErrors.username
                    ? "form-control error"
                    : "form-control"
                }
                placeholder="Username"
                type="text"
                name="username"
                noValidate
                onChange={handleChange}
              />

              <input
                className={
                  formErrors && formErrors.password
                    ? "form-control error"
                    : "form-control"
                }
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={handleChange}
              />

              <input
                className={
                  formErrors && formErrors.confirmpassword
                    ? "form-control error"
                    : "form-control"
                }
                placeholder="Password"
                type="password"
                name="confirmpassword"
                noValidate
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={Object.entries(formErrors || {}).length > 0}
              >
                Create Account
              </button>
            </form> */}
            {/* <ul>
              {Object.entries(formErrors || {}).map(([prop, value]) => {
                return (
                  <li className="error-message" key={prop}>
                    {value}
                  </li>
                );
              })}
            </ul> */}
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
              {/* <input
                className={`${inputClass} ${passwordClass}`}
                type="Password"
                placeholder="Re-Enter Password"
                maxlength="15"
                required
                autoComplete="off"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                onChange={(event) => setReEnterPassword(event.target.value)}
              /> */}
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
      {/* {errorMessageContainer && (
        <div className="error-message">{errorMessage}</div>
      )} */}
    </motion.section>
  );
};

export default SignUp;
