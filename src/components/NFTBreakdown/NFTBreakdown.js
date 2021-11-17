import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./NFTBreakdownStyles.scss";
import record_favorite from "../../assets/images/vinyl_yellow.svg";
import record_header_icon from "../../assets/images/compact-disc-yellow.svg";

function NFTBreakdown() {
  return (
    <section id="nft-breakdown">
      <div className="kyc-title">
        <img
          className="record-header-icon"
          src={record_header_icon}
          alt="record "
        />
        <h1>KNOW YOUR COLLECTION</h1>
      </div>

      <div className="kyc-subtitle">
        Every purchase includes a limited-edition digital album cover NFT.
        That’s a mouthful, so we’ve broken down what it means.
      </div>
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
            <span>Digital -</span> album covers stay in your collection
            permanently, even after the music is no longer streaming on BnG. Log
            in to easily access & share your collection
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
            <span>NFT (non-fungible token) - </span>a digital collectible whose
            ownership is recorded on the blockchain - aka a permanent,
            democratized database. Our NFTs are simple, secure, and
            non-polluting. Learn more{" "}
            <HashLink to="/faq#nft-scroll-purchase">here</HashLink>
          </p>
        </div>
      </div>
    </section>
  );
}

export default NFTBreakdown;