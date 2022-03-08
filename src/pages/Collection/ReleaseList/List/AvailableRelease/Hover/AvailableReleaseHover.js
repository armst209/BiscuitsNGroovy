import { Link } from "react-router-dom";
import { ReactComponent as PlayButtonIcon } from "../../../../../../assets/images/play-button.svg";
//styles
import styles from "./AvailableReleaseHover.module.scss";

function AvailableReleaseHover({ release }) {
  return (
    <Link to={`/${release.id}/${release.name}/${release.title}/`} id={styles["available-release-hover"]}>
      <div className={styles["available-release-hover-wrapper"]}>
        <button>
          <PlayButtonIcon />
          <div className={styles["available-release-hover-title"]}>
            {release.title}
          </div>
        </button>
      </div>
    </Link>
  );
}

export default AvailableReleaseHover;
