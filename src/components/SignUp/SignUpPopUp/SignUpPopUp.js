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
    transition: { delay: 0.5 },
  },
  minimized: {
    color: "red",
  },
};
function SignUpPopUp({
  showModal,
  setShowModal,
  changeStyles,
  setChangeStyles,
}) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          id={changeStyles}
          variants={signUpModalBackground}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div variants={modal} exit="hidden">
            <h1>SHOW SOMETHING</h1>
          </motion.div>
          <button
            onClick={() => {
              // setChangeStyles("signup-model-minimized");
              setShowModal(!showModal);
            }}
          >
            Minimize
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SignUpPopUp;
