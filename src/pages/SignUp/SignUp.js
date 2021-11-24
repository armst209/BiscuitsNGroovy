import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpStyles.scss";
import FlowLoader from "../../components/Loading/Forms/FlowLoader";
import LinkFlowButton from "./LinkFlowButton";
//flow imports
import { config } from "@onflow/fcl";

//configure flow environment
config()
  .put("accessNode.api", process.env.REACT_APP_ACCESS_NODE) // Configure FCL's Access Node
  .put("challenge.handshake", process.env.REACT_APP_WALLET_DISCOVERY) // Configure FCL's Wallet Discovery mechanism
  .put("0xProfile", process.env.REACT_APP_CONTRACT_PROFILE); // Will let us use `0xProfile` in our Cadence

const SignUp = () => {
  const [showFlowButtonLoader, setShowFlowButtonLoader] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  return (
    <section id="signup">
      <h2>Sign up to start "enter message"</h2>

      <div className="signup-wrapper">
        <div className="signup-contents">
          <LinkFlowButton
            setShowFlowButtonLoader={setShowFlowButtonLoader}
            setErrorMessages={setErrorMessages}
          />
          <p className="already-account">
            Have an account?
            <Link className="login-redirect" to="/login">
              <span> Sign In</span>
            </Link>
          </p>
        </div>
        <div className="signup-info-contents"> Things that need to be said</div>
      </div>
      <div className="error-message-main">{errorMessages}</div>
      {showFlowButtonLoader && <FlowLoader />}
    </section>
  );
};

export default SignUp;
