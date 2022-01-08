import { useState } from "react";

import { initAccount, accountIsInitialized } from "../../utils/flow";
import * as fcl from "@onflow/fcl";
import "./LinkFlowButtonStyles.scss";
import SignUpForm from "./SignUpForm/SignUpForm";

function LinkFlowButton({
  formSubmitFunction,
  setShowFlowButtonLoader,
  setErrorMessages,
}) {
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
      <button onClick={updateInitializedComponent} type="submit">
        Proceed to Blocto
      </button>
    );
  } else {
    return (
      <>
        <SignUpForm setErrorMessages={setErrorMessages} />
        <div className="link-diff-account">
          <div onClick={logOutOfFlow}>Or Link Different Flow Account</div>
        </div>
      </>
    );
  }
}

export default LinkFlowButton;
