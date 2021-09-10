import { React, useState } from "react";
import { initAccount, accountIsInitialized } from "../../utils/flow";
import * as fcl from "@onflow/fcl";
import link_icon from "../../assets/images/link.svg";
import "./SignUpStyles.scss";
import "./LinkFlowButtonStyles.scss";
import ComponentLoading from "../Loading/ComponentLoading";
import write from "../../assets/images/write.svg";
function LinkFlowButton(props) {
  const [isInitialized, setIsInitialized] = useState(false);
  async function updateInitializedComponent() {
    if (isInitialized === true) {
      return;
    }
    props.flowBtnLoader(
      <div className="flow-loader">
        <ComponentLoading />
      </div>
    );
    await initAccount();
    accountIsInitialized().then((firstAccountState) => {
      console.log("stop spinner");
      props.flowBtnLoader("");

      console.log(firstAccountState);
      setIsInitialized(firstAccountState);
    });
  }

  async function logOutOfFlow() {
    fcl.unauthenticate();
    accountIsInitialized().then((firstAccountState) => {
      console.log(firstAccountState);
      setIsInitialized(firstAccountState);
    });
  }
  //add !
  if (!isInitialized) {
    return (
      <>
        <button
          className="flow-button flow"
          onClick={updateInitializedComponent}
        >
          Continue
          {/* <img src={link_icon} alt="link icon" /> */}
        </button>
      </>
    );
  } else {
    return (
      <div className="create-account-section">
        <button
          className="flow"
          type="submit"
          onClick={props.submit}
          disabled={Object.entries(props.formErrors || {}).length > 0}
        >
          Create Account <img src={write} alt="signup icon" />
        </button>
        <p>By signing up you agree to our Terms of Service</p>
        <div className="link-diff-account">
          <div onClick={logOutOfFlow}>Or Link Different Flow Account</div>
        </div>
      </div>
    );
  }
}

export default LinkFlowButton;
