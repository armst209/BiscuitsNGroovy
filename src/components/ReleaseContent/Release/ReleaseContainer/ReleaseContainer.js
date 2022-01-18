//component imports
import ReleaseTracklist from "../../../../components/ReleaseContent/ReleaseComponents/ReleaseTracklist/ReleaseTracklist";
import ReleasePreviewTitleInfo from "../../../../components/ReleaseContent/ReleaseComponents/ReleasePreview/ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";

//svg imports
import { ReactComponent as BackButton } from "../../../../assets/images/arrow-back-yellow.svg";
import { ReactComponent as RecordIcon } from "../../../../assets/images/vinyl_yellow.svg";

//styles
import styles from "./ReleaseContainer.module.scss";

//react imports
import { useState } from "react";
import { Link } from "react-router-dom";

const ReleaseContainer = ({ release }) => {
  //selecting first release in release object
  release = release[0];
  //hooks
  const [showBiscuitInsert, setShowBiscuitInsert] = useState(false);

  //state handlers
  const showBiscuitInsertHandler = () => {
    setShowBiscuitInsert(true);
  };
  const closeBiscuitInsertHandler = () => {
    setShowBiscuitInsert(false);
  };

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
                  <div className={styles["release-preview-description"]}>
                    <div
                      className={styles["release-preview-description-close"]}
                      onClick={() => showHideBiscuitDescriptionHandler()}
                    >
                      X
                    </div>
                    {release.description}
                  </div>
                )}
                <ReleasePreviewTitleInfo release={release} />
              </div>
              <div className={styles["release-content-right"]}>
                <div className={styles["release-information"]}>
                  <div className={styles["release-tracklist"]}>
                    <ReleaseTracklist songs={release.songs} />
                  </div>
                </div>
                <div className={styles["release-preview-svg-divider"]}></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/#MusicShowcase_music-showcase__21JXl">
            Back to showcase <BackButton />
          </Link>
        </div>
      </section>
    )
  );
};

export default ReleaseContainer;
