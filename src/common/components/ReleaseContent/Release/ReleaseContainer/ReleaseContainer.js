//component imports
import ReleaseTracklist from "../../ReleaseComponents/ReleaseTracklist/ReleaseTracklist";
import ReleasePreviewTitleInfo from "../../ReleaseComponents/ReleasePreview/ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";

//svg imports
import { ReactComponent as BackButton } from "../../../../assets/images/arrow-back-yellow.svg";

//styles
import styles from "./ReleaseContainer.module.scss";

//react imports
import { useState } from "react";

//hash link import
import { NavHashLink } from "react-router-hash-link";

const ReleaseContainer = ({ release }) => {
  //selecting first release in release object
  release = release[0];

  const [showBiscuitDescription, setShowBiscuitDescription] = useState(false);

  const showHideBiscuitDescriptionHandler = () =>
    setShowBiscuitDescription(!showBiscuitDescription);

  return (
    release && (
      <section id={styles.release}>
        <div className={styles["release-content-wrapper"]}>
          <div className={styles["release-back-link"]}>
            <NavHashLink smooth to="/#music-showcase-return">
              <BackButton /> <div>Back to Showcase</div>
            </NavHashLink>
          </div>
          <div className={styles["release-preview-container"]}>
            <div className={styles["release-preview-content"]}>
              <div className={styles["release-content-left"]}>
                {showBiscuitDescription && (
                  <div className={styles["release-preview-description"]}>
                    <div
                      className={styles["release-preview-description-close"]}
                      onClick={() => showHideBiscuitDescriptionHandler()}>
                      X
                    </div>
                    {release.description}
                  </div>
                )}
                <ReleasePreviewTitleInfo
                  release={release}
                  showHideBiscuitDescriptionHandler={showHideBiscuitDescriptionHandler}
                />
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
      </section>
    )
  );
};

export default ReleaseContainer;
