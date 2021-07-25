import React from "react";
import { Link } from "react-router-dom";
import "./NFTBreakdownStyles.scss";
import record_favorite from "../../assets/images/vinyl_yellow.svg";
import spotlight_yellow_left from "../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../assets/images/spotlight_outline_right_yellow.svg";

function NFTBreakdown() {
  return (
    <section id="nft-breakdown">
      <img
        className="spotlight-top-left"
        src={spotlight_yellow_left}
        alt="spotlight icon"
      />
      <img
        className="spotlight-top-right"
        src={spotlight_yellow_right}
        alt="spotlight icon"
      />
      <h1>LIMITED-EDITION DIGITAL ALBUM COVER NFT</h1>
      <div className="nft-breakdown-wrapper">
        <div className="info-boxes">
          <img src={record_favorite} alt="record icon" />
          <p>
            <span>Limited-Edition - </span>album art exclusive to the BnG drop,
            unavailable anywhere else
          </p>
        </div>
        <div className="info-boxes">
          <img src={record_favorite} alt="record icon" />
          <p>
            <span>Digital -</span> your art stays in your BnG collection, so
            it's easy to access & share
          </p>
        </div>
        <div className="info-boxes">
          <img src={record_favorite} alt="record icon" />
          <p>
            <span>Album Cover - </span>beautiful art designed specifically to
            accompany a record. We put it front and center, where it belongs
          </p>
        </div>
        <div className="info-boxes">
          <img src={record_favorite} alt="record icon" />
          <p>
            <span>NFT(non-fungible token) - </span>a digital collectible whose
            ownership is recorded on the blockchain - aka a permanent,
            democratized database. Our NFTs are simple, trusted, secure, and
            non-polluting. Learn more <Link to="/faq#NFTsExplained">here</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default NFTBreakdown;
