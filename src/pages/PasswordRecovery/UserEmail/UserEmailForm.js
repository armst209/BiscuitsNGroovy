import { useState } from "react";
import "../../../App.css";
import { emailValidation } from "../../../modules/FormValidation";
import axios from "axios";

const UserEmailForm = ({
  setEmailErrorMessage,
  setSuccessMessage,
  setShowEmailLoader,
  showPassRecoveryModal,
  setShowPassRecoveryModal,
}) => {
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [emailInputLoginClass, setEmailInputLoginClass] = useState("");
  const [isSendEmailButtonDisabled, setIsSendEmailButtonDisabled] =
    useState(true);

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
      <input
        className={emailInputLoginClass}
        type="email"
        required
        autoComplete="off"
        placeholder="Ex: your@email.com"
        onKeyUp={(event) => {
          setRecoveryEmail(event.target.value);
          if (!emailValidation(event.target.value)) {
            setEmailInputLoginClass("input-error");
            setEmailErrorMessage("Please enter a valid email");
            setIsSendEmailButtonDisabled(true);
          } else {
            setIsSendEmailButtonDisabled(false);
            setEmailErrorMessage("");
            setEmailInputLoginClass("input-success");
          }
        }}
      />
      <div className="user-email-button-container">
        <button disabled={isSendEmailButtonDisabled} type="submit">
          Send Email
        </button>
      </div>
    </form>
  );
};

export default UserEmailForm;
