import { Link } from "react-router-dom";
import "./ReleaseButtonStyles.scss";
import { ReactComponent as TokenMusicIcon } from "../../../../../assets/images/love-song2.svg";
import StripeCheckoutProcesses from "../../../../../pages/Payment/StripeCheckoutProcesses";

const ReleaseButton = ({ release }) => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <div className="release-button-container">
        {token ? (
          //redirects to stripe checkout
          <StripeCheckoutProcesses release={release} />
        ) : (
          //redirects to signup page
          <Link to="/signup">
            <button className="no-token-btn">
              Buy Now
              <TokenMusicIcon />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReleaseButton;
