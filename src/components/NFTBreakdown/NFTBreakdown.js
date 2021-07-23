import React from "react";
import { Link } from "react-router-dom";
import "./NFTBreakdownStyles.scss";

function NFTBreakdown() {
  return (
    <section id="nft-breakdown">
      <h1>Limited-Edition Digital Album Cover NFT</h1>
      <ul>
        <li>
          Limited Edition - album art exclusive to the BnG drop, unavailable
          anywhere else
        </li>
        <li>
          Digital - your art stays in your BnG collection, so it's easy to
          access & share
        </li>
        <li>
          Album Cover - beautiful art designed specifically to accompany a
          record. We put it front and center, where it belongs
        </li>
        <li>
          NFT(non-fungible token) - a digital collectible whose ownership is
          recorded on the blockchain - aka a permanent, democratized database.
          Our NFTs are simple, trusted, secure, and non-polluting. Learn more{" "}
          <Link>here</Link>
        </li>
      </ul>
    </section>
  );
}

export default NFTBreakdown;
