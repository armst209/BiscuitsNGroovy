import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import env from "react-dotenv";
import "./LoginFormStyles.scss";
import { ReactComponent as LoginArrow } from "../../../assets/images/login.svg";
import { ReactComponent as LoginLoading } from "../../../assets/images/pulse_loader_black.svg";
import { ReactComponent as Warning } from "../../../assets/images/exclamation.svg";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [loginStatus, setLoginStatus] = useState(
    <>
      <div>Login</div>
      <LoginArrow />
    </>
  );
  const submit = (event) => {
    event.preventDefault();

    setLoginStatus(
      <>
        <div>Logging In</div>
        <LoginLoading />
      </>
    );

    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/login`,
      data: { username: username, password: password },
      loading: false,
    })
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleFailure(err);
      });

    const handleSuccess = (res) => {
      localStorage.setItem("token", res.data.token);
      window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/home");
    };

    const handleFailure = (err) => {
      console.log(err);
      setLoginStatus(
        <>
          <div>Login</div>
          <LoginArrow />
        </>
      );
      setInputClass("input-error");
      setMessage(
        <div className="error-message">
          <Warning className="warning-icon" /> Username or Password is
          incorrect. Please try again.
        </div>
      );
    };
  };
  return (
    <form id="login-form" onSubmit={submit}>
      <div className="input-styles">
        <input
          className={inputClass}
          type="text"
          placeholder="Username"
          required
          autoComplete="off"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
          className={inputClass}
          type="password"
          placeholder="Password"
          required
          autoComplete="off"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="login-btn-password">
        <div className="login-button">
          <button type="submit">{loginStatus}</button>
        </div>
      </div>
      <p>
        <span>
          Don't have an account?{" "}
          <Link to="/signup" className="signup-redirect">
            Sign up
          </Link>
        </span>
      </p>
      <div className="forgot-password">
        <Link to="/password-recovery">Forgot Password?</Link>
      </div>
      {message}
    </form>
  );
};

export default LoginForm;
