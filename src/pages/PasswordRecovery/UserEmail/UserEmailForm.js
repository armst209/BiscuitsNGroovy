import { useState } from "react";
import useValidation from "common/hooks/Validation/useValidation";
import "common/hooks/Validation/useValidationStyles.scss";
import axios from "axios";
import { ReactComponent as ValidationSuccess } from "common/assets/images/check.svg";
import { ReactComponent as Warning } from "common/assets/images/exclamation.svg";
const UserEmailForm = ({ setShowEmailLoader, showPassRecoveryModal, setShowPassRecoveryModal }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    email,
    emailInputLoginClass,
    emailErrorMessage,
    errorMessages,
    showEmailValidationCheck,
    setEmailInputLoginClass,
    setErrorMessages,
    inputValidation,
  } = useValidation();

  const submit = (event) => {
    event.preventDefault();
    setShowEmailLoader(true);

    const handleSuccess = (res) => {
      //storage item for users who accidently navigation to password reset page
      localStorage.setItem("PR_Auth_Token", res.data.token);

      setShowEmailLoader(false);
      setSuccessMessage(<div>Link Sent!</div>);
      setTimeout(() => {
        setShowPassRecoveryModal(!showPassRecoveryModal);
      }, 1000);
    };

    const handleFailure = (err) => {
      console.log(err);
      setShowEmailLoader(false);
      setEmailInputLoginClass("input-error");
      setErrorMessages(
        <>
          <div className="main-error-messages">
            <Warning className="warning-icon" />
            <div className="error-message-text-main">Email not found!</div>
          </div>
        </>,
      );
    };

    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/forgot-password/sendLink`,
      data: { email },
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
      <div>{errorMessages}</div>
      <div className="user-email-success-message">{successMessage}</div>
      <fieldset className="input-styles">
        <label
          id="email-label"
          htmlFor="user-email-input"
          className="label-error-message user-email-label">
          {emailErrorMessage}
        </label>
        <input
          className={emailInputLoginClass}
          type="email"
          id="user-email-input"
          name="email"
          required
          autoComplete="off"
          placeholder="Ex: your@email.com"
          onChange={inputValidation}
        />
        {showEmailValidationCheck && <ValidationSuccess className="valid-check-icon email-check" />}
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
