import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpStyles.scss";
import { motion } from "framer-motion";
import logo from "../../assets/images/bng_test.svg";
import LinkFlowButton from "./LinkFlowButton";
import SignUpModal from "./SignUpPopUp/SignUpPopUp";
import question_mark from "../../assets/images/help_question_yellow.svg";

import SignUpForm from "./SignUpForm/SignUpForm";

//variants for framer motion
const signUpModalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
//props passed as an object
const SignUp = (props) => {
  const [flowLoader, setFlowLoader] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [changeStyles, setChangeStyles] = useState("signup-modal");

  return (
    <motion.section
      id="signup"
      variants={signUpModalBackground}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h2>Sign up to start "enter message"</h2>
      <SignUpModal
        changeStyles={changeStyles}
        setChangeStyles={setChangeStyles}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        className="signup-wrapper"
      >
        <div className="signup-contents">
          <SignUpForm />
          <p className="already-account">
            Have an account?
            <Link className="login-redirect" to="/login">
              <span> Login</span>
            </Link>
          </p>
          {/* component houses flow button and create account button - submit function and error messages passed to create account button with props */}
          {/* <LinkFlowButton
              submit={submit}
              showSignUpPopup={props.showSignUpPopup}
              signUpPopup={props.signUpPopup}
              flowBtnLoader={setFlowLoader}
            /> */}

          {flowLoader}
          {/* Error message list - holds all error responses that are set in handleChange switch statement */}
          <ul className="error-message-container-desktop"></ul>
        </div>

        <motion.div
          className="help-button"
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <img src={question_mark} alt="question mark" width="50px" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SignUp;
