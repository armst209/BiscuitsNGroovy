import React, { useState } from "react";
import NotHomeNavigation from "../../components/Navbars/NotHomeNavigation/NotHomeNavigation";
import axios from "axios";
import env from "react-dotenv";

function PassRecoveryForm({
  loginPopup,
  showLoginPopup,
  showSignUpPopup,
  signUpPopup,
}) {
  const [password, setNewPassword] = useState("");
  const submit = async function (event) {
    event.preventDefault();

    const handleSuccess = (res) => {
      localStorage.setItem("token", res.data.token);
      //setEmailErrorMessage("Link sent!");
    };

    const handleFailure = (err) => {
      console.log(err);
      //setEmailErrorMessage("Email not found!");
    };

    const baseURL = env.BACKEND_URL;

    axios({
      method: "post",
      url: `${baseURL}/forgot-password/sendLink`,
      data: { password: password },
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleFailure(err);
      });
  };
  return (
    <section>
      {/* <NotHomeNavigation
        loginPopup={loginPopup}
        signUpPopup={signUpPopup}
        showLoginPopup={showLoginPopup}
        showSignUpPopup={showSignUpPopup}
      /> */}
      <h1>PasswordRecovery</h1>
      <div style={{ paddingTop: "15rem" }}>
        <form onSubmit={submit}>
          <label htmlFor="new-pass">Enter new password:</label>
          <input
            name="new-pass"
            type="password"
            required
            autoComplete="off"
            placeholder="Enter new password"
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default PassRecoveryForm;
