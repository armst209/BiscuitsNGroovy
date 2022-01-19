//react imports
import { useState } from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./BiscuitContainer.module.scss";

//svg imports

//component imports
import BiscuitAlbumInformation from "../BiscuitAlbumInformation/BiscuitAlbumInformation";
import ReleasePreviewTitleInfo from "../../ReleaseComponents/ReleasePreview/ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";
import ReleaseTracklist from "../../ReleaseComponents/ReleaseTracklist/ReleaseTracklist";
import BiscuitDescription from "../BiscuitDescription/BiscuitDescription";
import BiscuitInsert from "../BiscuitInsert/BiscuitInsert";

//music player import
import MusicPlayerContainer from "../../MusicPlayer/MusicPlayerContainer";
import BiscuitTitleInformation from "../BiscuitAlbumInformation/BiscuitTitleInformation/BiscuitTitleInformation";
import ReleaseTracklistPlayer from "../../ReleaseComponents/ReleaseTracklist/ReleaseTracklistPlayer";
import Button from "../../../WrapperComponents/Button/Button";

const BiscuitContainer = ({
  release,
  showHideBiscuitInsertHandler,
  showHideMusicPlayerContainerHandler,
  showMusicPlayerContainer,
}) => {
  const [showBiscuitDescription, setShowBiscuitDescription] = useState(false);

  const showHideBiscuitDescriptionHandler = () =>
    setShowBiscuitDescription(!showBiscuitDescription);

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
                  showHideMusicPlayerContainerHandler={
                    showHideMusicPlayerContainerHandler
                  }
                  showHideBiscuitInsertHandler={showHideBiscuitInsertHandler}
                  showHideBiscuitDescriptionHandler={
                    showHideBiscuitDescriptionHandler
                  }
                />
              </div>
              <div className={styles["release-content-right"]}>
                <div className={styles["release-information"]}>
                  <div className={styles["release-tracklist"]}>
                    {showMusicPlayerContainer && (
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
