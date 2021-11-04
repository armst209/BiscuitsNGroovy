import "./AvailableReleaseHoverStyles.scss";
import { ReactComponent as PlayButton } from "../../../../../../../assets/images/play-button.svg";

function AvailableReleaseHover({ release }) {
  return (
    <div id="available-release-hover">
      <div className="available-release-hover-wrapper">
        <button onClick={() => {}}>
          <PlayButton />
          <div className="available-release-hover-title">{release.title}</div>
        </button>
      </div>
    </div>
  );
}

export default AvailableReleaseHover;
