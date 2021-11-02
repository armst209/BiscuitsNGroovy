import { ReactComponent as TokenMusicIcon } from "../../../../../assets/images/love-song2.svg";
import StripeCheckoutProcesses from "../../../../../pages/Payment/StripeCheckoutProcesses";

const ReleaseButton = ({ release }) => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <div className="button-container">
        {token ? (
          <StripeCheckoutProcesses release={release} />
        ) : (
          <button
            className="no-token-btn"
            // onClick={() => props.showSignUpPopup(!props.signUpPopup)}
          >
            BUY NOW
            <TokenMusicIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default ReleaseButton;
