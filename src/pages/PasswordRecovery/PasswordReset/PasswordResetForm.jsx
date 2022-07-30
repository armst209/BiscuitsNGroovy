import { useParams } from "react-router-dom";
import "./PasswordResetFormStyles.scss";
import { ReactComponent as Warning } from "common/assets/images/exclamation.svg";
import useValidation from "common/hooks/Validation/useValidation";

import axios from "axios";

const PasswordResetForm = ({ passwordResetSuccessModal, setPasswordResetSuccessModal }) => {
  const {
    password,
    passwordErrorMessage,
    passwordInputLoginClass,
    confirmPasswordInputLoginClass,
    confirmPasswordErrorMessage,
    errorMessages,
    setErrorMessages,
    inputValidation,
  } = useValidation();
  let { userResetToken } = useParams();
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [errorMessageModal, setErrorMessageModal] = useState(false);

  const submit = (event) => {
    event.preventDefault();

    const handleSuccess = (res) => {
      //removing local storage check for if use accidentally navigates to password reset
      localStorage.removeItem("PR_Auth_Token");
      setPasswordResetSuccessModal(!passwordResetSuccessModal);
      //window.location.replace("/");
    };

    const handleFailure = (error) => {
      console.log(error);

      if (error) {
        setErrorMessages(
          <div className="main-error-messages">
            <Warning className="warning-icon" />
            <div className="error-message-text-main">
              Please fill out form with correct information
            </div>
          </div>,
        );
        // let errorType = error.response.status;
        // console.log(error.response);
        // switch (errorType) {
        //   case 422:
        //     setErrorMessages(error.response.data);
        //     break;
        //   case 500:
        //     setErrorMessages(error.response.data);
        //     break;
        //   default:
        //     setErrorMessages(error.response.data);
        //     break;
        // }
      }
    };

    axios({
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_URL}/forgot-password`,
      headers: {
        "x-access-token": userResetToken,
      },
      data: { new_password: password },
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleFailure(err);
      });
  };

  return (
    <section id="pass-recovery">
      <div className="pass-recovery-wrapper">
        <form onSubmit={submit}>
          <fieldset className="input-styles">
            <label className="label-error-message reset-password-label" htmlFor="reset-password">
              {passwordErrorMessage}
            </label>
            <input
              className={passwordInputLoginClass}
              id="reset-password"
              name="password"
              type="password"
              required
              autoComplete="off"
              placeholder="Enter new password"
              onBlur={inputValidation}
            />
            <label
              className="label-error-message reset-password-confirm-label"
              htmlFor="reset-password-confirm">
              {confirmPasswordErrorMessage}
            </label>
            <input
              className={confirmPasswordInputLoginClass}
              id="reset-password-confirm"
              name="confirm-password"
              type="password"
              required
              autoComplete="off"
              placeholder="Confirm New Password"
              onChange={inputValidation}
            />
            <button>Reset Password</button>
          </fieldset>
          <div className="error-message-main">{errorMessages}</div>
        </form>

        <ul className="pass-recovery-container-desktop"></ul>
      </div>
    </section>
  );
};

export default PasswordResetForm;
