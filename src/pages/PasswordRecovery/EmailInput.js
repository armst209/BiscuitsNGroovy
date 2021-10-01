import React, { useState } from "react";
import "./EmailInputStyles.scss";
// import axios from "axios";
// import env from "react-dotenv";

function EmailInput() {
  // const [emailErrorMessage, setEmailErrorMessage] = useState("");
  // const [email, setRecoveryEmail] = useState("");

  // const submit = async function (event) {
  //   event.preventDefault();

  //   const handleSuccess = (res) => {
  //     localStorage.setItem("token", res.data.token);
  //     setEmailErrorMessage("Link sent!");
  //   };

  //   const handleFailure = (err) => {
  //     console.log(err);
  //     setEmailErrorMessage("Email not found!");
  //   };

  //   const baseURL = env.BACKEND_URL;

  //   axios({
  //     method: "post",
  //     url: `${baseURL}/forgot-password/sendLink`,
  //     data: { email: email },
  //   })
  //     .then((res) => {
  //       handleSuccess(res);
  //     })
  //     .catch((err) => {
  //       handleFailure(err);
  //     });
  // };

  return (
    <div className="email-input-wrapper">
      {/* onSubmit={submit} */}
      <form>
        <input
          type="email"
          required
          autoComplete="off"
          placeholder="Enter your email"
          autoComplete="off"
          // onChange={(event) => setRecoveryEmail(event.target.value)}
        />
        <button type="submit">Submit</button>
        {/* <div>{emailErrorMessage}</div> */}
      </form>
    </div>
  );
}

export default EmailInput;
