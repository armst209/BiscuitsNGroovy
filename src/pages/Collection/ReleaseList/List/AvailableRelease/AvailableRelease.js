//styles
import styles from "../../../../../common/components/ReleaseContent/ReleaseComponents/ReleaseTypes/ReleaseHover.module.scss";

//component imports
import AvailableReleaseHover from "./Hover/AvailableReleaseHover";
import ReleaseImage from "../../../../../common/components/ReleaseContent/ReleaseComponents/ReleaseImage/ReleaseImage";

const AvailableRelease = ({ release }) => {
  return (
    <figure className={styles["hover-img"]}>
      <ReleaseImage releaseImageSrc={release.art_url} releaseAlt={release.name} />
      <figcaption>
        <AvailableReleaseHover release={release} />
      </figcaption>
    </figure>
  );
};

export default AvailableRelease;
