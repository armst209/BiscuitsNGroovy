import { useState } from "react";
import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import NFTHover from "./Hover/NFTHover";
import ExpiredModal from "./Modals/ExpiredModal/ExpiredModal";
import NFTExpiredModal from "./Modals/NFTModal/NFTExpiredModal";

const ExpiredRelease = ({ release }) => {
  const [showNFTExpiredModal, setShowNFTExpiredModal] = useState(false);
  const [showExpiredModal, setShowExpiredModal] = useState(false);

  const handleExpiredModalsAndCounter = () => {
    //opening expired modal
    setShowNFTExpiredModal(true);
    //checking to see if user has clicked on hover state once, if so it wont show the expired modal again
    localStorage.getItem(`expired${release.id}ModalCounter"`) === "1"
      ? setShowExpiredModal(false)
      : setShowExpiredModal(true);
    //setting string variable to 1 so that it persists in local storage and expired modal won't show even if user redirects
    localStorage.setItem(`expired${release.id}ModalCounter"`, "1");
  };

  return (
    <figure className="hover-img">
      <ReleaseImage
        releaseImageSrc={release.art_url}
        releaseAlt={release.name}
      />
      {/* Hover state */}
      <figcaption onClick={() => handleExpiredModalsAndCounter()}>
        <NFTHover />
      </figcaption>
      {/* Modals */}
      {showNFTExpiredModal && (
        <NFTExpiredModal
          release={release}
          setShowNFTExpiredModal={setShowNFTExpiredModal}
          showNFTExpiredModal={showNFTExpiredModal}
        />
      )}
      {showExpiredModal && (
        <ExpiredModal
          release={release}
          setShowExpiredModal={setShowExpiredModal}
          showExpiredModal={showNFTExpiredModal}
        />
      )}
    </figure>
  );
};
export default ExpiredRelease;
