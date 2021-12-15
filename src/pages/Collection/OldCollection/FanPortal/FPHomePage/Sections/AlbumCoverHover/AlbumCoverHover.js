import { React } from "react";
import "./AlbumCoverHoverStyle.scss";
import AlbumPopup from "../AlbumPopUp/AlbumPopup";
import { ReactComponent as PlayButton } from "../../../../../../../assets/images/play-button.svg";

function AlbumCoverHover(props) {
  return (
    <div id="album-hover">
      <div className="album-hover-wrapper">
        <button
          onClick={() => {
            props.showReleasePopUp(
              <div>
                <AlbumPopup
                  closeAlbumPopup={props.closeButton}
                  albumInformation={props.albumInfo}
                  release={props.release}
                />
              </div>
            );
          }}
        >
          <PlayButton />
          <div className="release-hover-name">{props.release.title}</div>
        </button>
      </div>
    </div>
  );
}

export default AlbumCoverHover;
