import React, { useState } from "react";
import "./PassRecoveryFormStyles.scss";
import {
  minMaxLength,
  validEmail,
  passwordStrength,
} from "../../components/SignUp/SignUpValidation";
import axios from "axios";
import env from "react-dotenv";

function PassRecoveryForm() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState({});

  //password validation for both password inputs
  function validateConfirmPassword(password, confirmpassword, formErrors) {
    formErrors = formErrors || {};
    if (password !== confirmpassword) {
      formErrors.confirmpassword =
        "Confirmed password is not matching with password";
      return false;
    } else {
      delete formErrors.confirmpassword;
      return true;
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "password":
        setPassword(value);
        //setUser({ ...user, password: value });
        if (minMaxLength(value, 7)) {
          formErrors[name] = "Password should have minimum 7 characters";
        } else if (passwordStrength(value)) {
          formErrors[name] =
            "Password is not strong enough. Include an upper case letter, a number or a special character to make it strong";
        } else {
          delete formErrors[name];
          setUser({
            ...user,
            password: value,
          });
          if (user.confirmpassword) {
            validateConfirmPassword(value, user.confirmpassword, formErrors);
          }
        }
        break;

      case "confirmpassword":
        setConfirmPassword(value);
        //setUser({ ...user, confirmpassword: value });
        let valid = validateConfirmPassword(password, value, formErrors);
        if (valid) {
          setConfirmPassword(value);
          //setUser({ ...user, confirmpassword: value });
        }
        break;
      default:
        break;
    }
  }
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
      <div className="pass-recovery-title">
        <h1>PASSWORD RECOVERY</h1>
      </div>

      <div className="pass-recovery-wrapper">
        <form onSubmit={submit}>
          <label htmlFor="new-pass">Enter new password:</label>
          <input
            className={
              formErrors && formErrors.password
                ? "form-control error"
                : "form-control"
            }
            name="password"
            type="password"
            required
            autoComplete="off"
            placeholder="Enter new password"
            onChange={handleChange}
          />
          <input
            className={
              formErrors && formErrors.confirmpassword
                ? "form-control error"
                : "form-control"
            }
            name="confirmpassword"
            type="password"
            required
            autoComplete="off"
            placeholder="Confirm New Password"
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
        <ul className="pass-recovery-container-desktop">
          {Object.entries(formErrors || {}).map(([prop, value]) => {
            return (
              <li className="error-message" key={prop}>
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default PassRecoveryForm;
