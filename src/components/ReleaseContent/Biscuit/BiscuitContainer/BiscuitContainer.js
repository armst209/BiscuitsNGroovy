//react imports
import { useState } from "react";

//styles
import styles from "./BiscuitContainer.module.scss";


//component imports
import BiscuitDescription from "../BiscuitDescription/BiscuitDescription";
import MusicPlayerContainer from "../../MusicPlayer/MusicPlayerContainer";
import BiscuitTitleInformation from "../BiscuitAlbumInformation/BiscuitTitleInformation/BiscuitTitleInformation";

const BiscuitContainer = ({
  release,
  toggleInsertModal,
  pauseMusicHandler,
  forwardedRef

}) => {

  const [showBiscuitDescription, setShowBiscuitDescription] = useState(false);
  const showHideBiscuitDescriptionHandler = () => setShowBiscuitDescription(prevState => !prevState);


  return (
    release && (
      <section id={styles.biscuit}>
        <div className={styles["release-preview-modal"]}>
          <div className={styles["release-preview-container"]}>
            <div className={styles["release-preview-content"]}>
              <div className={styles["release-content-left"]}>
                {showBiscuitDescription && (
                  <BiscuitDescription
                    release={release}
                    showHideBiscuitDescriptionHandler={
                      showHideBiscuitDescriptionHandler
                    }
                  />
                )}
                <BiscuitTitleInformation
                  release={release}
                  pauseMusicHandler={pauseMusicHandler}
                  toggleInsertModal={toggleInsertModal}
                  showHideBiscuitDescriptionHandler={
                    showHideBiscuitDescriptionHandler
                  }
                />
              </div>
              <div className={styles["release-content-right"]}>
                <div className={styles["release-information"]}>
                  <div className={styles["release-tracklist"]}>
                    <MusicPlayerContainer release={release} forwardedRef={forwardedRef} />
                  </div>
                </div>
                <div className={styles["release-preview-svg-divider"]}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};
export default BiscuitContainer;
