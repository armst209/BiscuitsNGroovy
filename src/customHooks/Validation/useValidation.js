//react imports
import { useState } from "react";

//validator npm
import validator from "validator";

//svg imports
import { ReactComponent as Warning } from "../../assets/images/exclamation.svg";

const useValidation = () => {
  //input states
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //error messages
  const [errorMessages, setErrorMessages] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("Email");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("Username");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("Password");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("Confirm Password");

  //input styles
  const [userNameInputLoginClass, setUserNameInputLoginClass] = useState("");
  const [passwordInputLoginClass, setPasswordInputLoginClass] = useState("");
  const [emailInputLoginClass, setEmailInputLoginClass] = useState("");
  const [confirmPasswordInputLoginClass, setConfirmPasswordInputLoginClass] =
    useState("");

  //icon success checks
  const [showUserNameValidationCheck, setShowUserNameValidationCheck] =
    useState(false);
  const [showPasswordValidationCheck, setShowPasswordValidationCheck] =
    useState(false);
  const [
    showConfirmPasswordValidationCheck,
    setShowConfirmPasswordValidationCheck,
  ] = useState(false);
  const [showEmailValidationCheck, setShowEmailValidationCheck] =
    useState(false);

  const [
    showNewsletterArtistEmailValidationCheck,
    setShowNewsletterArtistEmailValidationCheck,
  ] = useState(false);

  //show & hide password input
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [isHidden, setIsHidden] = useState("Show");

  //for form input validations
  const inputValidation = (event) => {
    let { name, value } = event.target;

    switch (name) {
      //EMAIL CASES
      case "email":
      case "signup-email":
      case "MERGE0":
        setEmail(value);
        if (validator.isEmail(value)) {
          setEmailInputLoginClass("input-success");
          setShowEmailValidationCheck(true);
          setEmailErrorMessage("Email");
        } else if (!validator.isLength(value, { min: 1, max: undefined })) {
          setEmailInputLoginClass("input-error");
          setShowEmailValidationCheck(false);
          setEmailErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">
                Please fill out this field
              </div>
            </>
          );
        } else {
          setEmailInputLoginClass("input-error");
          setShowEmailValidationCheck(false);
          setEmailErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">Invalid Email</div>
            </>
          );
        }
        break;
      //USERNAME CASE
      case "username":
        setUserName(value);
        if (validator.isLength(value, { min: 1, max: undefined })) {
          setUserNameInputLoginClass("input-success");
          setShowUserNameValidationCheck(true);
          setUserNameErrorMessage("Username");
          setErrorMessages("");
        } else {
          setUserNameInputLoginClass("input-error");
          setShowUserNameValidationCheck(false);
          setUserNameErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="label-error-text">Please fill out this field</div>
            </>
          );
        }

        break;
      //PASSWORD CASE
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
          setShowPasswordValidationCheck(false);
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
            <ul className="password-strength-errors">
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
          setShowPasswordValidationCheck(true);
          setPasswordErrorMessage("Password");
          setErrorMessages("");
        }
        break;
      //LOGIN PASSWORD CASE
      case "login-password":
        setPassword(value);
        if (validator.isLength(value, { min: 1, max: undefined })) {
          setPasswordInputLoginClass("input-success");
          setShowPasswordValidationCheck(true);
          setPasswordErrorMessage("Password");
          setErrorMessages("");
        } else {
          setShowPasswordValidationCheck(false);
          setPasswordInputLoginClass("input-error");
          setPasswordErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="label-error-text">Please fill out this field</div>
            </>
          );
        }
        break;
      /**
       * *CONFIRM PASSWORD CASE
       * TODO: fix password word comparison values
       */
      case "confirm-password":
        setConfirmPassword(value);
        console.log(confirmPassword);
        console.log(password);
        if (password.trim() === confirmPassword.trim()) {
          setConfirmPasswordErrorMessage("Confirm Password");
          setShowConfirmPasswordValidationCheck(true);
          setConfirmPasswordInputLoginClass("input-success");
        } else {
          setShowConfirmPasswordValidationCheck(false);
          setConfirmPasswordErrorMessage(
            <>
              <Warning className="warning-icon" />
              <div className="error-message-text">Passwords do not match</div>
            </>
          );
          setConfirmPasswordInputLoginClass("input-error");
        }
        break;

      /**
       * *TERMS CHECKBOX CASE
       */

      case "terms-check":
        if (value !== "on") {
          alert("please check box");
        }

        break;

      /**
       * TODO: change default error message
       */
      default:
        setErrorMessages("ERROR");
        break;
    }
  };

  //show & hide password - change input type
  const changeInputType = () => {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
      setIsHidden("Hide");
    } else {
      setPasswordInputType("password");
      setIsHidden("Show");
    }
  };

  return {
    email,
    setEmail,
    userName,
    setUserName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errorMessages,
    setErrorMessages,
    emailErrorMessage,
    userNameErrorMessage,
    passwordErrorMessage,
    confirmPasswordErrorMessage,
    userNameInputLoginClass,
    setUserNameInputLoginClass,
    passwordInputLoginClass,
    setPasswordInputLoginClass,
    emailInputLoginClass,
    setEmailInputLoginClass,
    confirmPasswordInputLoginClass,
    showEmailValidationCheck,
    setShowEmailValidationCheck,
    showUserNameValidationCheck,
    setShowUserNameValidationCheck,
    showPasswordValidationCheck,
    setShowPasswordValidationCheck,
    showConfirmPasswordValidationCheck,
    setShowConfirmPasswordValidationCheck,
    showNewsletterArtistEmailValidationCheck,
    setShowNewsletterArtistEmailValidationCheck,
    inputValidation,
    changeInputType,
    passwordInputType,
    isHidden,
  };
};

export default useValidation;
