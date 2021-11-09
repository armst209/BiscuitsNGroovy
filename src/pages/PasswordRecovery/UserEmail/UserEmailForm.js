import { useState } from "react";
import axios from "axios";

const UserEmailForm = ({
  setEmailErrorMessage,
  setSuccessMessage,
  setShowEmailLoader,
}) => {
  const [recoveryEmail, setRecoveryEmail] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setShowEmailLoader(true);

    const handleSuccess = (res) => {
      //storage item for users who accidently navigation to password reset page
      localStorage.setItem("PR_Auth_Token", res.data.token);

      setShowEmailLoader(false);
      setSuccessMessage("Link sent!");
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
        type="email"
        required
        autoComplete="off"
        placeholder="Ex: your@email.com"
        onKeyUp={(event) => {
          setRecoveryEmail(event.target.value);
          recoveryEmail === "" || recoveryEmail === null
            ? setEmailErrorMessage("Please enter a valid email")
            : setEmailErrorMessage("");
        }}
      />
      <div className="user-email-button-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserEmailForm;
