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

  return (
    <figure className={styles["hover-img"]}>
      <ReleaseImage
        releaseImageSrc={release.art_url}
        releaseAlt={release.name}
      />
      {/* Hover state */}
      <figcaption>
        <ExpiredReleaseHover
          release={release}
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
