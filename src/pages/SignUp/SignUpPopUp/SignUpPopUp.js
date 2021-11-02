import { motion, AnimatePresence } from "framer-motion";
import next_arrow from "../../../assets/images/next-arrow-yellow.svg";

import "./SignUpPopUpStyles.scss";

const signUpModalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

function SignUpPopUp({
  showModal,
  setShowModal,
  changeStyles,
  setChangeStyles,
}) {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          id={changeStyles}
          variants={signUpModalBackground}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="signup-popup-wrapper"
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            exit="hidden"
          >
            <div className="signup-popup-header">
              <h1>Create your account</h1>
            </div>

            <div className="signup-popup-content">
              <ul>
                <li>
                  When you create an account with us, you’ll also be prompted to
                  create a Blocto account. They’ll be linked together so you
                  don’t need to remember a separate login.
                </li>
                <li>
                  Blocto is a trusted, user-friendly wallet for crypto assets
                  (like NFTs). Learn more{" "}
                  <a
                    className="blocto-link"
                    href="https://blocto.portto.io/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                </li>
              </ul>
              <ol>
                <li>
                  Enter your email and choose a username & password. account.
                  Click <strong>Continue</strong>
                </li>

                <li>
                  Enter your email again in the Blocto popup. This will create
                  and link a Blocto account with your BnG account so you can
                  easily access your NFTs. Click <strong>Register</strong>
                </li>
                <li>
                  Enter the verification code from your email. Next, click
                  <strong> Confirm</strong> to link your new Blocto account, and
                  finally click <strong>Approve</strong>
                </li>
                <li>
                  Now you’ll be back at the BnG sign up. Double check your info,
                  then click <strong>Create Account</strong>
                </li>
              </ol>{" "}
            </div>

            <div className="button-container">
              <motion.button
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                Continue <img src={next_arrow} alt="next arrow" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SignUpPopUp;
