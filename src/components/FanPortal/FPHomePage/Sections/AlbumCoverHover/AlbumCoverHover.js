import { React, useState } from "react";
import "./AlbumCoverHoverStyle.scss";
import AlbumPopup from "../AlbumPopUp/AlbumPopup";
import play_button from "../../../../../assets/images/play-button.svg";

function AlbumCoverHover(props) {
  console.log(props.expiredPopupCounter);
  const [popupClassName, setPopupClassName] = useState("");
  return (
    <div id="album-hover">
      <div className="album-hover-wrapper">
        <button
          onClick={() => {
            if (props.expiredPopupCounter > 0) {
              setPopupClassName("no-popup-show");
            }
            props.setExpiredPopupCounter(props.expiredPopupCounter + 1);
            props.showReleasePopUp(
              <div>
                <AlbumPopup
                  className={popupClassName}
                  closeAlbumPopup={props.closeButton}
                  albumInformation={props.albumInfo}
                  release={props.release}
                />
              </div>
            );
          }}
        >
          <img src={play_button} alt="play button" />
          <div className="release-hover-name">{props.release.title}</div>
        </button>
      </div>
    </div>
  );
}

export default AlbumCoverHover;
