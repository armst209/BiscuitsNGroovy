import { useState } from "react";
import { useParams } from "react-router-dom";
import "./PasswordResetFormStyles.scss";

import axios from "axios";

const PasswordResetForm = ({
  passwordResetSuccessModal,
  setPasswordResetSuccessModal,
}) => {
  let { userResetToken } = useParams();
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageModal, setErrorMessageModal] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  console.log(userResetToken);
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

      if (error.response) {
        let errorType = error.response.status;
        console.log(error.response);
        switch (errorType) {
          case 422:
            setErrorMessage(error.response.data);
            break;
          case 500:
            setErrorMessage(error.response.data);
            break;
          default:
            setErrorMessage(error.response.data);
            break;
        }
      }
    };

    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/forgot-password`,
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
          <label htmlFor="new-pass">Enter new password:</label>
          <input
            name="password"
            type="password"
            required
            autoComplete="off"
            placeholder="Enter new password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input
            name="confirmpassword"
            type="password"
            required
            autoComplete="off"
            placeholder="Confirm New Password"
            onKeyUp={(event) => {
              if (event.target.value !== password) {
                setErrorMessageModal(true);
                setErrorMessage("Passwords do not match");
                setButtonDisabled(true);
              } else {
                setErrorMessageModal(false);
                setErrorMessage("");
                setButtonDisabled(false);
              }
            }}
          />
          <button disabled={buttonDisabled}>Submit</button>
        </form>
        <ul className="pass-recovery-container-desktop"></ul>
      </div>
      {errorMessageModal && (
        <div className="error-messages">{errorMessage}</div>
      )}
    </section>
  );
};

export default PasswordResetForm;