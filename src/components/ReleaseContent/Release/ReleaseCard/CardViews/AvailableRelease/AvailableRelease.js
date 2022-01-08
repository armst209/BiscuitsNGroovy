import { useState, lazy, Suspense } from "react";
import ComponentLoading from "../../../../../Loading/Component/ComponentLoading";
// import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import AvailableReleaseHover from "./Hover/AvailableReleaseHover";
import AvailableReleaseModal from "./Modal/AvailableReleaseModal";
const ReleaseImage = lazy(() => import("../../ReleaseImage/ReleaseImage"));
const AvailableRelease = ({ release }) => {
  const [showAvaliableReleaseModal, setShowAvailableReleaseModal] =
    useState(false);
  return (
    <figure className="hover-img">
      <Suspense fallback={<ComponentLoading />}>
        <ReleaseImage
          releaseImageSrc={release.art_url}
          releaseAlt={release.name}
        />
      </Suspense>

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
