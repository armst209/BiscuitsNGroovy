import React from "react";
import { Link } from "react-router-dom";
import "./NFTBreakdownStyles.scss";
import record_favorite from "../../assets/images/vinyl.svg";

function NFTBreakdown() {
  return (
    <section id="nft-breakdown">
      <h1>LIMITED-EDITION DIGITAL ALBUM COVER NFT</h1>
      <div className="nft-breakdown-wrapper">
        <div className="info-boxes">
          <img src={record_favorite} alt="record icon" />
          <p>
            Limited Edition -album art exclusive to the BnG drop, unavailable
            anywhere else
          </p>
        </div>
        <div className="info-boxes">
          Digital - your art stays in your BnG collection, so it's easy to
          access & share
        </div>
        <div className="info-boxes">
          Album Cover - beautiful art designed specifically to accompany a
          record. We put it front and center, where it belongs
        </div>
        <div className="info-boxes">
          NFT(non-fungible token) - a digital collectible whose ownership is
          recorded on the blockchain - aka a permanent, democratized database.
          Our NFTs are simple, trusted, secure, and non-polluting. Learn more{" "}
          <Link>here</Link>
        </div>
      </div>
    </section>
  );
}

export default NFTBreakdown;
