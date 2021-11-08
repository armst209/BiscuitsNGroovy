import { useState } from "react";
import "./SignUpFormStyles.scss";
import axios from "axios";
import env from "react-dotenv";
//Importing Flow Configuration
import { config } from "@onflow/fcl";
import * as fcl from "@onflow/fcl";

// //configure flow environment
config()
  .put("accessNode.api", env.REACT_APP_ACCESS_NODE) // Configure FCL's Access Node
  .put("challenge.handshake", env.REACT_APP_WALLET_DISCOVERY) // Configure FCL's Wallet Discovery mechanism
  .put("0xProfile", env.REACT_APP_CONTRACT_PROFILE); // Will let us use `0xProfile` in our Cadence

const handleSignUp = (res) => {
  //fires after blocto account is set up
  localStorage.setItem("token", res.data.token);
  window.location.replace(env.FRONTEND_URL + "/home");
};

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageModal, setErrorMessageModal] = useState(false);
  const [inputErrorClass, setInputErrorClass] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const submit = async function (event) {
    event.preventDefault();

    //if flow account is not linked throw error
    // let currUser = await fcl.currentUser().snapshot();
    // if (currUser.addr === null) {
    //   console.log("Error");
    //   return;
    // }

    // let flow_address = currUser.addr;

    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/registration`,
      data: {
        email,
        username,
        password,
        // flow_address,
      },
    })
      .then((res) => {
        handleSignUp(res);
      })
      .catch((error) => {
        if (error.response) {
          let errorType = error.response.status;
          console.log(error.response);
          switch (errorType) {
            case 422:
              setErrorMessage(error.response.data);
              break;

            case 500:
              setErrorMessage("Server Error");
              break;
            default:
              console.log("undefined error");
              break;
          }
        }
      });
  };

  return (
    <form onSubmit={submit}>
      <input
        className={inputErrorClass}
        placeholder="Email"
        type="email"
        name="email"
        noValidate
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className={inputErrorClass}
        placeholder="Username"
        type="text"
        name="username"
        noValidate
        autoComplete="off"
        required
        onKeyUp={(e) => {
          if (e.target.value === "") {
          } else {
            setUserName(e.target.value);
          }
        }}
      />

      <input
        className={inputErrorClass}
        placeholder="Password"
        type="password"
        name="password"
        noValidate
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        className={inputErrorClass}
        placeholder="Confirm Password"
        type="password"
        name="confirmpassword"
        noValidate
        autoComplete="off"
        required
        onKeyUp={(e) => {
          if (e.target.value !== password) {
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
      <button disabled={buttonDisabled} type="submit">
        Submit
      </button>
      {errorMessageModal && (
        <div className="error-messages">{errorMessage}</div>
      )}
    </form>
  );
};

export default SignUpForm;
