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
                <Link to="/terms-of-service/subscriber">Subscriber</Link>
              </li>
              <li>
                <Link to="/terms-of-service/music-purchase-terms">
                  Music Purchase
                </Link>
              </li>
              <li>
                <Link to="">Non-Fungible Tokens (NFTs)</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsList;
