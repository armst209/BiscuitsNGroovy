import { React, useState } from "react";
import "./NFTHoverStyles.scss";
import ExpiredPopup from "../ExpiredPopup/ExpiredPopup";
import NFTPopup from "../../PopUp/NFT/TestNFTPopup";

function NFTHover(props) {
  const [popupClassName, setPopupClassName] = useState("expired-popup");
  const [popupCounter, setPopupCounter] = useState(0);

  return (
    <section id="nft-hover">
      <div className="nft-hover-wrapper">
        <button
          onClick={() => {
            props.setShowNFTPopUp(
              <NFTPopup
                release={props.release}
                setShowNFTPopUp={props.setShowNFTPopUp}
              />
            );

            if (popupCounter === 1) {
              setPopupClassName("no-show-popup");
            } else {
              props.setShowEndDatePopUp(
                <ExpiredPopup
                  popupClassName={popupClassName}
                  releaseInformation={props.release.name}
                  setShowEndDatePopUp={props.setShowEndDatePopUp}
                />
              );
            }
            setPopupCounter(popupCounter + 1);
          }}
        >
          <div className="nft-hover-name">View NFT</div>
        </button>
      </div>
    </section>
  );
}

export default NFTHover;
