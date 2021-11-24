import "./LoginStyles.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";
import LoginForm from "./LoginForm/LoginForm";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState("");
  return (
    <>
      <FixedNavigationSpacer />
      <section id="login-page">
        <div className="login-title">
          <h1>
            <RecordVinyl width="50px" />
            <div>Sign In</div>
          </h1>
        </div>
        <h2>Sign in with Biscuits n Groovy</h2>
        <div className="login-content">
          <div className="error-message-main">{errorMessages}</div>
          <LoginForm setErrorMessages={setErrorMessages} />
          <p className="have-account">
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
        </div>
      </section>
    </>
  );
};

export default Login;
