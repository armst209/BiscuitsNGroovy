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

  return (
    release && (
      <section id={styles["release"]}>
        {/* <BiscuitAlbumInformation /> */}
        <div className={styles["release-wrapper"]}>
          <div className={styles["release-container"]}>
            <div className={styles["release-content"]}>
              <div className={styles["release-content-left"]}>
                <ReleasePreviewTitleInfo release={release} />
              </div>
              <div className={styles["release-content-right"]}>
                <div className={styles["release-record-image"]}>
                  <RecordIcon className="release-record-svg" />
                </div>

                <div className={styles["release-information"]}>
                  <div className={styles["release-tracklist"]}>
                    <ReleaseTracklist songs={release.songs} />
                  </div>
                </div>
                <div className={styles["release-description"]}>
                  {release.description}
                </div>
                {/* <button
                  className="_button"
                  onClick={() => showBiscuitInsertHandler()}
                >
                  View Insert
                </button> */}
                {/* {showBiscuitInsert && (
                  <div className={styles["release-insert-wrapper"]}>
                    <div
                      className={styles["close-biscuit-insert"]}
                      onClick={() => closeBiscuitInsertHandler()}
                    >
                      X
                    </div>
                    <BiscuitInsert />
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles["release-back-collection-link"]}>
          <Link to="/collection">
            <BackButton />
            Back To Collection
          </Link>
        </div> */}
      </section>
    )
  );
};

export default ReleaseContainer;
