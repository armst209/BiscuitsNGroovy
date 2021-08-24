import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./SignUpPopUpStyles.scss";

const signUpModalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 1, transition: { delay: 0.2 } },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
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
            // variants={modal}
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            exit="hidden"
          >
            <h1>SHOW SOMETHING</h1>

            <motion.button
              onClick={() => {
                // setChangeStyles("signup-model-minimized");
                setShowModal(!showModal);
              }}
            >
              Minimize
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SignUpPopUp;
