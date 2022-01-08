//styles
import styles from "../ReleaseHover.module.scss";
import { useState } from "react";
import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import ExpiredReleaseHover from "./Hover/ExpiredReleaseHover";
import NFTViewModal from "./Modals/NFTModal/NFTViewModal";
import InsertViewModal from "./Modals/InsertModal/InsertViewModal";

const ExpiredRelease = ({ release }) => {
  const [showNFTModal, setShowNFTModal] = useState(false);
  const [showInsertModal, setShowInsertModal] = useState(false);

  const showNFTViewModalHandler = () => {
    setShowNFTModal(true);
  };
  const closeNFTViewModalHandler = () => {
    setShowNFTModal(false);
  };

  const showInsertViewModalHandler = () => {
    setShowInsertModal(true);
  };
  const closeInsertViewModalHandler = () => {
    setShowInsertModal(false);
  };

  // const handleExpiredModalsAndCounter = () => {
  //   //opening expired modal
  //   setShowNFTExpiredModal(true);
  //   //checking to see if user has clicked on hover state once, if so it wont show the expired modal again
  //   localStorage.getItem(`expired${release.id}ModalCounter"`) === "1"
  //     ? setShowExpiredModal(false)
  //     : setShowExpiredModal(true);
  //   //setting string variable to 1 so that it persists in local storage and expired modal won't show even if user redirects
  //   localStorage.setItem(`expired${release.id}ModalCounter"`, "1");
  // };

  return (
    <figure className={styles["hover-img"]}>
      <ReleaseImage
        releaseImageSrc={release.art_url}
        releaseAlt={release.name}
      />
      {/* Hover state */}
      <figcaption>
        <ExpiredReleaseHover
          showNFTView={showNFTViewModalHandler}
          showInsertView={showInsertViewModalHandler}
        />
      </figcaption>
      {/* Modals */}
      {showNFTModal && (
        <NFTViewModal
          release={release}
          closeNFTView={closeNFTViewModalHandler}
        />
      )}
      {showInsertModal && (
        <InsertViewModal
          release={release}
          closeInsertView={closeInsertViewModalHandler}
        />
      )}
    </figure>
  );
};
export default ExpiredRelease;
