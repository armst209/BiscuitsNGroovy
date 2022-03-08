//react imports

import { Link } from "react-router-dom";

//styles
import "./TermsListStyles.scss";

//svg imports
import { ReactComponent as OpenBook } from "../../assets/images/open-book.svg";

const TermsList = () => {
  return (
    <section>
      <div className="term-link-wrapper">
        <div className="term-link-container">
          <div className="terms-image">
            <OpenBook />
          </div>
          <div className="list-container">
            <ul>
              <li>
                <Link to={`/privacy-policy`}>Privacy Policy</Link>
              </li>
              <li>
                <Link to="/subscriber-terms-of-service">Terms Of Service</Link>
              </li>
              <li>
                <Link to="/music-purchase-terms">Music Purchase Terms</Link>
              </li>
              <li>
                <Link to="/nft-terms">NFT Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsList;
