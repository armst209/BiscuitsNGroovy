import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm/SignUpForm";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";
import SignUpPopUp from "./SignUpPopUp/SignUpPopUp";
import LinkFlowButton from "./LinkFlowButton";

//styles
import styles from "./SignUp.module.scss";
//flow imports
import { config } from "@onflow/fcl";

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
    <section id={styles.signup}>
      <FixedNavigationSpacer />
      <h2>Sign up to start your collection</h2>
      <div className={styles["error-message-main"]}>{errorMessages}</div>
      <div className={styles["signup-wrapper"]}>
        <div className={styles["signup-contents"]}>
          {/* switches between blocto signup and signup form */}

          <SignUpForm
            setErrorMessages={setErrorMessages}
            setShowFlowButtonLoader={setShowFlowButtonLoader}
          />

          <p className={styles["already-account"]}>
            Have an account?
            <Link className={styles["login-redirect"]} to="/signin">
              <span>Sign In</span>
            </Link>
          </p>
        </div>
      </div>
      {showFlowButtonLoader && <FlowLoader />}
      {showSignUpInfo && <SignUpPopUp setShowSignUpInfo={setShowSignUpInfo} />}
    </section>
  );
};

export default SignUp;
