//styles
import styles from "../ReleaseHover.module.scss";

//react imports
import { useState } from "react";

//component imports
import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import ExpiredReleaseHover from "./Hover/ExpiredReleaseHover";
import NFTViewModal from "./Modals/NFTModal/NFTViewModal";
// import InsertViewModal from "./Modals/InsertModal/InsertViewModal";
import BiscuitInsert from "../../../Biscuit/BiscuitInsert/BiscuitInsert";

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
    <figure id="expired-release" className={styles["hover-img"]}>
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
        <BiscuitInsert release={release} showHideBiscuitInsertHandler={closeInsertViewModalHandler}/>
        //! Need to determine if we need an insert view modal. Depending on what future biscuit or inserts would include.
        // <InsertViewModal
        //   release={release}
        //   closeInsertView={closeInsertViewModalHandler}
        // />
      )}
    </figure>
  );
};
export default ExpiredRelease;
