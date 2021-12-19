import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpStyles.scss";
import SignUpForm from "./SignUpForm/SignUpForm";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";
import SignUpPopUp from "./SignUpPopUp/SignUpPopUp";

//flow imports
import { config } from "@onflow/fcl";
import Loading from "../../components/Loading/Loading";
import FlowLoader from "../../components/Loading/Forms/FlowLoader";

//configure flow environment
config()
  .put("accessNode.api", process.env.REACT_APP_ACCESS_NODE) // Configure FCL's Access Node
  .put("challenge.handshake", process.env.REACT_APP_WALLET_DISCOVERY) // Configure FCL's Wallet Discovery mechanism
  .put("0xProfile", process.env.REACT_APP_CONTRACT_PROFILE); // Will let us use `0xProfile` in our Cadence

const SignUp = () => {
  const [showSignUpInfo, setShowSignUpInfo] = useState(true);
  const [showFlowButtonLoader, setShowFlowButtonLoader] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  return (
    <section id="signup">
      <FixedNavigationSpacer />
      <h2>Sign up to start "enter message"</h2>
      <div className="error-message-main">{errorMessages}</div>
      <div className="signup-wrapper">
        <div className="signup-contents">
          <SignUpForm
            setShowFlowButtonLoader={setShowFlowButtonLoader}
            setErrorMessages={setErrorMessages}
          />

          <p className="already-account">
            Have an account?
            <Link className="login-redirect" to="/signin">
              <span> Sign In</span>
            </Link>
          </p>
        </div>
        {/* <div className="signup-info-contents"> Things that need to be said</div> */}
      </div>

      {showFlowButtonLoader && <FlowLoader />}
      {showSignUpInfo && <SignUpPopUp setShowSignUpInfo={setShowSignUpInfo} />}
    </section>
  );
};

export default SignUp;
