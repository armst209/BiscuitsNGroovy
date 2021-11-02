import { React, useState } from "react";
// import { Link } from "react-router-dom";
// import { initAccount, accountIsInitialized } from "../../utils/flow";
// import * as fcl from "@onflow/fcl";
// import link_icon from "../../assets/images/link.svg";
// import "./SignUpStyles.scss";
// import "./LinkFlowButtonStyles.scss";
// import ComponentLoading from "../Loading/ComponentLoading";
// import write from "../../assets/images/write.svg";
function LinkFlowButton(props) {
  // const [isInitialized, setIsInitialized] = useState(false);
  // async function updateInitializedComponent() {
  //   if (isInitialized === true) {
  //     return;
  //   }
  //   props.flowBtnLoader(
  //     <div className="flow-loader">
  //       <ComponentLoading />
  //     </div>
  //   );
  //   await initAccount();
  //   accountIsInitialized().then((firstAccountState) => {
  //     props.flowBtnLoader("");
  //     setIsInitialized(firstAccountState);
  //   });
  // }
  // async function logOutOfFlow() {
  //   fcl.unauthenticate();
  //   accountIsInitialized().then((firstAccountState) => {
  //     setIsInitialized(firstAccountState);
  //   });
  // }
  // //add !
  // if (!isInitialized) {
  //   return (
  //     <>
  //       <button
  //         className="flow-button "
  //         onClick={updateInitializedComponent}
  //         type="submit"
  //       >
  //         Continue
  //         <img src={link_icon} alt="link icon" />
  //       </button>
  //     </>
  //   );
  // } else {
  //   return (
  //     <div className="create-account-section">
  //       <p>
  //         By signing up you agree to our{" "}
  //         <Link
  //           onClick={() => props.showSignUpPopup(!props.signUpPopup)}
  //           to="/privacy-terms-of-use/terms-of-service/"
  //         >
  //           Terms of Service
  //         </Link>
  //       </p>
  //       <button
  //         className="flow-button"
  //         type="submit"
  //         onClick={props.submit}
  //         disabled={Object.entries(props.formErrors || {}).length > 0}
  //       >
  //         Create Account
  //         <img className="signup-icon" src={write} alt="signup icon" />
  //       </button>
  //       <div className="link-diff-account">
  //         <div onClick={logOutOfFlow}>Or Link Different Flow Account</div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default LinkFlowButton;
