import { useState } from "react";
import "../../../components/FormValidation/FormValidationStyles.scss";
import "../../../App.css";
import { emailValidation } from "../../../modules/FormValidation";
import axios from "axios";
import { ReactComponent as ValidationSuccess } from "../../../assets/images/check.svg";

const UserEmailForm = ({
  setSuccessMessage,
  setShowEmailLoader,
  showPassRecoveryModal,
  setShowPassRecoveryModal,
}) => {
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [emailInputLoginClass, setEmailInputLoginClass] = useState("");
  const [showEmailValidationCheck, setShowEmailValidationCheck] =
    useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("Email");

  //function for form validation
  const passwordRecoveryEmailValidation = (event) => {
    //destrcutring name & value from event.target
    let { name, value } = event.target;

    //switch execution based on "name" attribute on input elements
    switch (name) {
      case "user-email":
        console.log("hit");
        setRecoveryEmail(value);
        if (!emailValidation(value)) {
          setShowEmailValidationCheck(false);
          setEmailInputLoginClass("input-error");
          setEmailErrorMessage("please enter valid email");
        } else {
          setEmailInputLoginClass("input-success");
          setShowEmailValidationCheck(true);
        }
        break;
      default:
        break;
    }
  };

  const submit = (event) => {
    event.preventDefault();
    setShowEmailLoader(true);

    const handleSuccess = (res) => {
      //storage item for users who accidently navigation to password reset page
      localStorage.setItem("PR_Auth_Token", res.data.token);

      setShowEmailLoader(false);
      setSuccessMessage("Link sent!");
      setTimeout(() => {
        setShowPassRecoveryModal(!showPassRecoveryModal);
      }, 1000);
    };

    const handleFailure = (err) => {
      console.log(err);
      setShowEmailLoader(false);
      setEmailErrorMessage("Email not found!");
    };

    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/forgot-password/sendLink`,
      data: { email: recoveryEmail },
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleFailure(err);
      });
  };

  return (
    <form onSubmit={submit}>
      <fieldset className="input-styles">
        <label
          id="email-label"
          htmlFor="user-email"
          className="label-error-message email-label"
        >
          {emailErrorMessage}
        </label>
        <input
          className={emailInputLoginClass}
          type="email"
          id="user-email"
          name="user-email"
          required
          autoComplete="off"
          placeholder="Ex: your@email.com"
          onChange={passwordRecoveryEmailValidation}
        />
        {showEmailValidationCheck && (
          <ValidationSuccess className="valid-check-icon email-check" />
        )}
      </fieldset>

      <div className="user-email-button-container" align="center">
        <button className="user-email-button-link" type="submit">
          <span>Send Email</span>
        </button>
      </div>
    </form>
  );
};

export default UserEmailForm;
