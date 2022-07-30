//react imports
import { useState } from "react";

//flow imports
import { initAccount, accountIsInitialized } from "../../common/utils/flow";
import * as fcl from "@onflow/fcl";

//styles
import styles from "./LinkFlowButton.module.scss";

//svg imports
import { ReactComponent as RecordSpinner } from "../../common/assets/images/compact-disc-yellow.svg";

function LinkFlowButton({ setShowFlowButtonLoader, isLoading, submit }) {
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
        <button onClick={submit} type="submit">
          {isLoading ? (
            <div className={styles["signup-status"]}>
              <div>Signing Up</div>
              <RecordSpinner className={`${styles["signup-loading-icon"]} rotate`} />
            </div>
          ) : (
            "Create Account"
          )}
        </button>

        <div className={styles["link-diff-account"]}>
          <div onClick={logOutOfFlow}>Or Link Different Flow Account</div>
        </div>
      </>
    );
  }
}

export default LinkFlowButton;
