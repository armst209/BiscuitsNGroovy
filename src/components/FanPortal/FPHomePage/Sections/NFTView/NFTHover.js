import React from "react";
import "./NFTHoverStyles.scss";
import ExpiredPopup from "../ExpiredPopup/ExpiredPopup";
import NFTPopup from "./NFTPopup";

function NFTHover(props) {
  return (
    <section id="nft-hover">
      <div className="nft-hover-wrapper">
        <button
          onClick={() => {
            props.setShowEndDatePopUp(
              <ExpiredPopup
                releaseInformation={props.release.name}
                setShowEndDatePopUp={props.setShowEndDatePopUp}
              />
            );
            props.setShowNFTPopUp(
              <NFTPopup
                release={props.release}
                setShowNFTPopUp={props.setShowNFTPopUp}
              />
            );
          }}
        >
          <div className="nft-hover-name">View NFT</div>
        </button>
      </div>
    </section>
  );
}

export default NFTHover;
