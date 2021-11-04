import { useState } from "react";
import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import AvailableReleaseHover from "./Hover/AvailableReleaseHover";
import AvailableReleaseModal from "./Modal/AvailableReleaseModal";

const AvailableRelease = ({ release }) => {
  const [showAvaliableReleaseModal, setShowAvailableReleaseModal] =
    useState(false);
  return (
    <figure className="hover-img">
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
