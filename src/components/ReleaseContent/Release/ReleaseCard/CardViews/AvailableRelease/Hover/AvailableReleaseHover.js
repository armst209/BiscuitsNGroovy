import "./AvailableReleaseHoverStyles.scss";
import AlbumPopup from "./Modal/AvailableReleaseModal";
import { ReactComponent as PlayButton } from "../../../../../../../assets/images/play-button.svg";

function AvailableReleaseHover({ release }) {
  return (
    <div id="album-hover">
      <div className="album-hover-wrapper">
        <button
          onClick={() => {
            // props.showReleasePopUp(
            //   <div>
            //     <AlbumPopup
            //       // closeAlbumPopup={props.closeButton}
            //       // albumInformation={props.albumInfo}
            //       release={release}
            //     />
            //   </div>
            // );
          }}
        >
          <PlayButton />
          <div className="release-hover-name">{release.title}</div>
        </button>
      </div>
    </div>
  );
}

export default AvailableReleaseHover;
