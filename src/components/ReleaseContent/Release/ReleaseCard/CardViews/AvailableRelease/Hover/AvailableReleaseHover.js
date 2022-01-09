import { Link } from "react-router-dom";

//styles
import styles from "./AvailableReleaseHover.module.scss";
import { ReactComponent as PlayButtonIcon } from "../../../../../../../assets/images/play-button.svg";

function AvailableReleaseHover({ release }) {
  return (
    <div id={styles["available-release-hover"]}>
      <div className={styles["available-release-hover-wrapper"]}>
        <button>
          {/* Link to unique url/biscuit */}
          <Link to={`/biscuit/artist/${Number(release.id)}`}>
            <PlayButtonIcon />
          </Link>

          <div className={styles["available-release-hover-title"]}>
            {release.title}
          </div>
        </button>
      </div>
    </div>
  );
}

export default AvailableReleaseHover;
