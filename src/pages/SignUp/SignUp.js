//react imports
import { useState } from "react";
import { Link } from "react-router-dom";

//component imports
import SignUpForm from "./SignUpForm/SignUpForm";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";
import SignUpPopUp from "./SignUpPopUp/SignUpPopUp";
import FlowLoader from "../../components/Loading/Forms/FlowLoader";

//styles
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const [showSignUpInfo, setShowSignUpInfo] = useState(true);
  const [showFlowButtonLoader, setShowFlowButtonLoader] = useState(false);

  return (
    <section id={styles.signup}>
      <FixedNavigationSpacer />
      <h2>Sign up to start your collection</h2>
      <div className={styles["signup-wrapper"]}>
        <div className={styles["signup-contents"]}>
          <SignUpForm setShowFlowButtonLoader={setShowFlowButtonLoader} />
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
