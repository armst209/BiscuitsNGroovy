import React, { useState } from "react";
import "./SignUpNonPopUpStyles.scss";
import { minMaxLength, validEmail } from "../../common/components/SignUp/SignUpValidation";
import axios from "axios";
import { motion } from "framer-motion";
import LinkFlowButton from "../../common/components/SignUp/LinkFlowButton";
import * as fcl from "@onflow/fcl";
import SignUpModal from "../SignUp/SignUpPopUp/SignUpPopUp";
import question_mark from "../../assets/images/help_question_yellow.svg";
import logo from "../../assets/images/bng_test.svg";

//Importing Flow Configuration
import { config } from "@onflow/fcl";
import env from "react-dotenv";

//variants for framer motion
const signUpModalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
//props passed as an object
const SignUpNonPopUp = (props) => {
  const [email, setEmail] = useState("");
  const [name] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [flowLoader, setFlowLoader] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [changeStyles, setChangeStyles] = useState("signup-modal");
  const [user, setUser] = useState({});
  const [formErrors] = useState({});
  const [emailConflict, setEmailConflict] = useState("");

  //password validation for both password inputs
  function validateConfirmPassword(password, confirmpassword, formErrors) {
    formErrors = formErrors || {};
    if (password !== confirmpassword) {
      formErrors.confirmpassword = "Confirmed password is not matching with password";
      return false;
    } else {
      delete formErrors.confirmpassword;
      return true;
    }
  }

  const registeredUsers = [];
  function userExists(email) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (registeredUsers.findIndex((u) => u === email) !== -1) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        //setUser({ ...user, email: value });
        if (!value || validEmail(value)) {
          formErrors[name] = `Email address is invalid`;
        } else {
          userExists(value).then((result) => {
            if (result) {
              formErrors[name] = "The email is already registered. Please use a different email.";
            } else {
              delete formErrors[name];
            }
          });
        }

        break;

      case "username":
        setUserName(value);
        //setUser({ ...user, username: value });
        if (minMaxLength(value, 5)) {
          formErrors[name] = `Username should have minimum 5 characters`;
        } else {
          delete formErrors[name];
        }

        break;
      case "password":
        setPassword(value);
        //setUser({ ...user, password: value });
        if (minMaxLength(value, 5)) {
          formErrors[name] = "Password should have minimum 5 characters";
          // } else if (passwordStrength(value)) {
          //   formErrors[name] =
          //     "Password is not strong enough. Include an upper case letter, a number or a special character to make it strong";
          // } else {
          delete formErrors[name];
          setUser({
            ...user,
            password: value,
          });
          if (user.confirmpassword) {
            validateConfirmPassword(value, user.confirmpassword, formErrors);
          }
        }
        break;

      case "confirmpassword":
        setConfirmPassword(value);
        //setUser({ ...user, confirmpassword: value });
        let valid = validateConfirmPassword(password, value, formErrors);
        if (valid) {
          setConfirmPassword(value);
          //setUser({ ...user, confirmpassword: value });
        }
        break;
      default:
        break;
    }
  }
  const handleSignUp = (res) => {
    localStorage.setItem("token", res.data.token);

    window.location.replace(import.meta.env.VITE_FRONTEND_URL + "/home");
  };

  const submit = async function (event) {
    event.preventDefault();

    //if flow account is not linked throw error
    let currUser = await fcl.currentUser().snapshot();
    if (currUser.addr === null) {
      console.log("Error");
      return;
    }

    let flow_address = currUser.addr;

    const baseURL = import.meta.env.VITE_BACKEND_URL;

    axios({
      method: "post",
      url: `${baseURL}/registration`,
      data: {
        email,
        name,
        username,
        password,
        flow_address,
      },
    })
      .then((res) => {
        setEmailConflict("");
        handleSignUp(res);
      })
      .catch((err) => {
        console.log(err);
        setEmailConflict("Email has already been taken");
      });
  };

  return (
    <section
      id="signup-no-popup"
      // variants={signUpModalBackground}
      // initial="hidden"
      // animate="visible"
      // exit="hidden"
    >
      <SignUpModal
        changeStyles={changeStyles}
        setChangeStyles={setChangeStyles}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div
        // initial={{ y: -250 }}
        // animate={{ y: 0 }}
        // exit={{ y: "-100vh" }}
        className="signup-wrapper-no-popup">
        <div className="signup-container-no-popup">
          <div className="signup-contents-no-popup">
            <motion.div
              className="help-button-no-popup"
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setShowModal(!showModal);
              }}>
              <img src={question_mark} alt="question mark" width="50px" />
            </motion.div>
            <div className="logo-no-popup">
              <img src={logo} alt="logo" />
            </div>
            <h2>SIGN UP</h2>

            <p className="already-account-no-popup">
              Already have an account?
              <span
                onClick={() => {
                  props.showSignUpPopup(!props.signUpPopup);
                  props.showLoginPopup(!props.loginPopup);
                }}>
                <span className="login-redirect-no-popup"> Login</span>
              </span>
            </p>
            <form noValidate>
              <input
                className={formErrors && formErrors.email ? "form-control error" : "form-control"}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                autoComplete="off"
                onChange={handleChange}
                required
              />

              <input
                className={
                  formErrors && formErrors.username ? "form-control error" : "form-control"
                }
                placeholder="Username"
                type="text"
                name="username"
                noValidate
                autoComplete="off"
                onChange={handleChange}
                required
              />

              <input
                className={
                  formErrors && formErrors.password ? "form-control error" : "form-control"
                }
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                autoComplete="off"
                onChange={handleChange}
                required
              />

              <input
                className={
                  formErrors && formErrors.confirmpassword ? "form-control error" : "form-control"
                }
                placeholder="Confirm Password"
                type="password"
                name="confirmpassword"
                noValidate
                autoComplete="off"
                required
                onChange={handleChange}
              />
            </form>
            {/* component houses flow button and create account button - submit function and error messages passed to create account button with props */}
            <LinkFlowButton
              submit={submit}
              formErrors={formErrors}
              showSignUpPopup={props.showSignUpPopup}
              signUpPopup={props.signUpPopup}
              flowBtnLoader={setFlowLoader}
            />

            {flowLoader}
            {/* Error message list - holds all error responses that are set in handleChange switch statement */}
            <ul className="error-message-container-desktop-no-popup">
              {Object.entries(formErrors || {}).map(([prop, value]) => {
                return (
                  <li className="error-message-no-popup" key={prop}>
                    {value}
                  </li>
                );
              })}
            </ul>
            <div>{emailConflict}</div>
          </div>
        </div>
      </div>

      {/* Error message list - holds all error responses that are set in handleChange switch statement */}
      <ul className="error-message-container-mobile-no-popup">
        {Object.entries(formErrors || {}).map(([prop, value]) => {
          return (
            <li className="error-message-no-popup" key={prop}>
              {value}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SignUpNonPopUp;
