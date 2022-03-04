//react imports
import { useState, useContext } from "react";
import { MusicPlayerDisplayContext } from "../../../../utils/context/MusicPlayerDisplayProvider";


//styles
import styles from "./BiscuitContainer.module.scss";

//svg imports

//component imports
import BiscuitDescription from "../BiscuitDescription/BiscuitDescription";
import MusicPlayerContainer from "../../MusicPlayer/MusicPlayerContainer";
import BiscuitTitleInformation from "../BiscuitAlbumInformation/BiscuitTitleInformation/BiscuitTitleInformation";



const BiscuitContainer = ({
  release,
  toggleInsertModal,
  showMusicPlayerContainer,
}) => {
  const [showBiscuitDescription, setShowBiscuitDescription] = useState(false);

  const showHideBiscuitDescriptionHandler = () =>
    setShowBiscuitDescription(!showBiscuitDescription);

   const isMusicPlayerShowing = useContext(MusicPlayerDisplayContext)
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
                  toggleInsertModal={toggleInsertModal}
                  showHideBiscuitDescriptionHandler={
                    showHideBiscuitDescriptionHandler
                  }
                />
              </div>
              <div className={styles["release-content-right"]}>
                <div className={styles["release-information"]}>
                  <div className={styles["release-tracklist"]}>
                    {isMusicPlayerShowing && (
                      <MusicPlayerContainer release={release} />
                    )}
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
