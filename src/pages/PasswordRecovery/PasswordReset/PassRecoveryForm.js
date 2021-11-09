import { useState } from "react";
import { useParams } from "react-router-dom";
import "./PassRecoveryFormStyles.scss";

import axios from "axios";
import env from "react-dotenv";

const PassRecoveryForm = () => {
  let { userTokenId } = useParams();
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const submit = (event) => {
    event.preventDefault();

    // const userToken = { userTokenId };
    const handleSuccess = (res) => {
      localStorage.setItem("token", res.data.token);
      //removing local storage check for if use accidentally navigates to password reset
      localStorage.removeItem("PR_Auth_Token");
    };

    const handleFailure = (err) => {
      console.log(err);
      //setEmailErrorMessage("Email not found!");
    };

    const baseURL = env.BACKEND_URL;

    axios({
      method: "post",
      url: `${baseURL}/forgot-password/sendLink`,
      data: { password },
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
        <h1>Token:{userTokenId}</h1>
        <form onSubmit={submit}>
          <label htmlFor="new-pass">Enter new password:</label>
          <input
            name="password"
            type="password"
            required
            autoComplete="off"
            placeholder="Enter new password"
            // onChange={handleChange}
          />
          <input
            name="confirmpassword"
            type="password"
            required
            autoComplete="off"
            placeholder="Confirm New Password"
            // onChange={handleChange}
          />
          <button>Submit</button>
        </form>
        <ul className="pass-recovery-container-desktop"></ul>
      </div>
    </section>
  );
};

export default PassRecoveryForm;
