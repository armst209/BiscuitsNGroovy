import React from "react";
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
              <h1>Create your BnG account in a few easy steps!</h1>
            </div>

            <div className="signup-popup-content">
              <ul>
                <li>
                  We integrate with Blocto to seamlessly store your NFT album
                  art. When you create an account with us, you’ll also be
                  prompted to create a Blocto account. They’ll be linked
                  together so you don’t need to remember a separate login.
                </li>
                <li>
                  Blocto is a trusted, user-friendly wallet for crypto assets
                  (like NFTs). It’s designed to be so intuitive, you won’t even
                  realize you’re interacting with the blockchain. Learn more
                  here
                </li>
              </ul>
              <ol>
                <li>
                  Enter your email and choose a username & password for your BnG
                  account. Click <strong>Continue</strong>
                </li>
                <li>
                  A popup will appear asking you to choose a provider. Select{" "}
                  <strong>Blocto</strong>
                </li>
                <li>
                  Enter your email again in the strong Blocto popup. If you’re
                  new to Blocto, this will create and link a Blocto account with
                  your BnG account so you can easily access any NFTs you buy
                  from us. Click <strong>Register</strong>
                </li>
                <li>
                  Enter the verification code from your email. Next, click
                  Confirm to link your new Blocto account, and finally click{" "}
                  <strong>Approve</strong>
                </li>
                <li>
                  Now that your Blocto account is ready, you’ll be taken back to
                  the BnG sign up window. Double check your information, then
                  click <strong>Create Account</strong>
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
