import { React } from "react";
import "./AlbumCoverHoverStyle.scss";
import AlbumPopup from "../AlbumPopUp/AlbumPopup";

function AlbumCoverHover(props) {
  return (
    <div id="album-hover">
      <div className="album-hover-wrapper">
        <div>{props.release.name}</div>
        <button
          onClick={() =>
            props.showReleasePopUp(
              <div>
                <AlbumPopup
                  closeAlbumPopup={props.closeButton}
                  albumInformation={props.albumInfo}
                  release={props.release}
                />
              </div>
            )
          }
        >
          view release
        </button>
      </div>
    </div>
  );
}

export default AlbumCoverHover;
