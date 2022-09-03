//svg imports
import { Link } from "react-router-dom";
import { ReactComponent as PlayButtonIcon } from "../../../../../../common/assets/images/play-button.svg";
//styles
import styles from "./AvailableReleaseHover.module.scss";

//Google Analytics imports
// import ReactGA from "react-ga";



const AvailableReleaseHover = ({ release }) => {
  const { id, name, title } = release;
  return (
    <Link
      eventLabel={`${name}-Biscuit`}
      to={`/biscuit/${id}/${name.replaceAll(" ", "")}/${title.replaceAll(" ", "")}/`}
      id={styles["available-release-hover"]}>
      <div className={styles["available-release-hover-wrapper"]}>
        <button>
          <PlayButtonIcon />
          <div className={styles["available-release-hover-title"]}>{release.title}</div>
        </button>
      </div>
    </Link>
  );
};

export default AvailableReleaseHover;
