//styles
import styles from "../ReleaseHover.module.scss";

//react imports
import { useState } from "react";

//component imports
import AvailableReleaseHover from "./Hover/AvailableReleaseHover";
import AvailableReleaseModal from "./Modal/AvailableReleaseModal";
import ReleaseImage from "../../ReleaseImage/ReleaseImage";

const AvailableRelease = ({ release }) => {
  const [showAvaliableReleaseModal, setShowAvailableReleaseModal] =
    useState(false);
  return (
    <figure className={styles["hover-img"]}>
      <ReleaseImage
        releaseImageSrc={release.art_url}
        releaseAlt={release.name}
      />

      <figcaption
        onClick={() => setShowAvailableReleaseModal(!showAvaliableReleaseModal)}
      >
        {/* Hover state*/}
        <AvailableReleaseHover release={release} />
      </figcaption>
      {/* Modal */}
      {showAvaliableReleaseModal && (
        <AvailableReleaseModal
          release={release}
          showAvaliableReleaseModal={showAvaliableReleaseModal}
          setShowAvailableReleaseModal={setShowAvailableReleaseModal}
        />
      )}
    </figure>
  );
};

export default AvailableRelease;
