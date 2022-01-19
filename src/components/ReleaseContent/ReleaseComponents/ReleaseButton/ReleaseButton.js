//styles
import "./ReleaseButtonStyles.scss";

//component imports
import StripeCheckoutProcesses from "../../../../pages/Payment/StripeCheckoutProcesses";
import SignUpTpPurchaseButton from "./SignUpToPurchaseButton/SignUpTpPurchaseButton";

/**
 * TODO:figure out ALL conditions for button logic, maybe add a switch statement
 * ! needs logic for purchase boolean - music showcase
 * !ENDPOINT: release/:id/ 
 * ! FOR MUSIC SHOWCASE & HAS PURCHASE BOOLEAN
 * *assume: not expired (live)
  // *-if not logged in -> sign in to buy
  // *-if logged in & purchased -> no buy button
  // *-if logged in & not purchased -> buy button
  // *-else -> 404
  
 */
const ReleaseButton = ({ release, hideButtonHandler }) => {
  //TOKEN
  const token = localStorage.getItem("token");
  //Purchased boolean
  const isPurchased = release.purchased;

  return (
    <>
      {token ? (
        isPurchased ? (
          //no button is displayed
          hideButtonHandler()
        ) : (
          //displays buy now button - redirects to stripe checkout
          <StripeCheckoutProcesses release={release} />
        )
      ) : (
        //sign up to purchase button is displayed
        <SignUpTpPurchaseButton />
      )}
    </>
  );
};

export default ReleaseButton;
