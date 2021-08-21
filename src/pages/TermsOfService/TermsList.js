import React from "react";
import { Link } from "react-router-dom";
import "./TermsListStyles.scss";
import open_book from "../../assets/images/open-book.svg";

function TermsList() {
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
                <Link to="/privacy-terms-of-use/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-terms-of-use/terms-of-service/">
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-terms-of-use/music-purchase-terms">
                  Music Purchase Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy-terms-of-use/nft-terms">NFT Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsList;
