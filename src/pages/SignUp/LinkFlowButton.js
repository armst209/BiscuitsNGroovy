import { React, useState } from "react";
import { Link } from "react-router-dom";
import { initAccount, accountIsInitialized } from "../../utils/flow";
import * as fcl from "@onflow/fcl";
import link_icon from "../../assets/images/link.svg";

import "./LinkFlowButtonStyles.scss";
import write from "../../assets/images/write.svg";
import SignUpForm from "./SignUpForm/SignUpForm";
function LinkFlowButton({ setShowFlowButtonLoader, setErrorMessages }) {
  const [isInitialized, setIsInitialized] = useState(false);
  async function updateInitializedComponent() {
    if (isInitialized === true) {
      return;
    }
    //flow loader
    setShowFlowButtonLoader(true);
    await initAccount();
    accountIsInitialized().then((firstAccountState) => {
      //flow loader
      setShowFlowButtonLoader(false);
      setIsInitialized(firstAccountState);
    });
  }
  async function logOutOfFlow() {
    fcl.unauthenticate();
    accountIsInitialized().then((firstAccountState) => {
      setIsInitialized(firstAccountState);
    });
  }
  //add !
  if (!isInitialized) {
    return (
      <>
        <button
          className="flow-button"
          onClick={updateInitializedComponent}
          type="submit"
        >
          Proceed to Blocto Account
        </button>
      </>
    );
  } else {
    return <SignUpForm setErrorMessages={setErrorMessages} />;
  }
}

export default LinkFlowButton;
