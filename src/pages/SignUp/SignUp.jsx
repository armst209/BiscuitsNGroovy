//react imports
import { useState } from "react";
import { Link } from "react-router-dom";

//component imports
import SignUpForm from "./SignUpForm/SignUpForm";
import SignUpPopUp from "./SignUpPopUp/SignUpPopUp";
import FlowLoader from "../../common/components/Loading/Forms/FlowLoader";
import Loading from "../../common/components/Loading/Loading";

//svg imports
import { ReactComponent as QuestionIcon } from "../../common/assets/images/help_question_yellow.svg";

//styles
import styles from "./SignUp.module.scss";

//seo imports
import SEOHelmet from "../../common/utils/SEO/SEOHelmet";

/**
 * TODO: For future signup implementation, add progress bar - use progress HTML element
 *
 */

const SignUp = () => {
  const [showSignUpInfo, setShowSignUpInfo] = useState(true);
  const [showFlowButtonLoader, setShowFlowButtonLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showSignUpLoaderHandler = () => {
    setIsLoading(true);
  };
  const hideSignUpLoaderHandler = () => {
    setIsLoading(false);
  };

  return (
    <section id={`${styles.signup}`}>
      <SEOHelmet title="Sign Up" content="Sign up to start your collection" />
      <h2>Sign up to start your collection</h2>
      <div className={styles["signup-wrapper"]}>
        <div className={styles["signup-contents"]}>
          <QuestionIcon
            className={styles["question-icon"]}
            onClick={() => {
              setShowSignUpInfo(true);
            }}
          />
          <SignUpForm
            setShowFlowButtonLoader={setShowFlowButtonLoader}
            hideSignUpLoaderHandler={hideSignUpLoaderHandler}
            showSignUpLoaderHandler={showSignUpLoaderHandler}
          />
          <p className={styles["already-account"]}>
            Have an account?
            <Link className={styles["login-redirect"]} to="/signin">
              <span>Sign In</span>
            </Link>
          </p>
        </div>
      </div>
      {isLoading && <Loading />}
      {showFlowButtonLoader && <FlowLoader />}
      {showSignUpInfo && <SignUpPopUp setShowSignUpInfo={setShowSignUpInfo} />}
    </section>
  );
};

export default SignUp;
