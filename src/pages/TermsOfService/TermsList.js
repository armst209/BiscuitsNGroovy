import { Link } from "react-router-dom";
import "./TermsListStyles.scss";
import open_book from "../../assets/images/open-book.svg";

function TermsList(props) {
  return (
    <section>
      <div className="term-link-wrapper">
        <div className="term-link-container">
          <div className="terms-image">
            <img src={open_book} alt="book icon" />
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
