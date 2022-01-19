//svg imports
import { ReactComponent as QuestionIcon } from "../../../../../assets/images/help_question_yellow.svg";

//react imports
import { memo, useState } from "react";

//styles
import styles from "./CollectionReleaseList.module.scss";

//component imports
import AvailableRelease from "../../ReleaseTypes/AvailableRelease/AvailableRelease";
import ExpiredRelease from "../../ReleaseTypes/ExpiredRelease/ExpiredRelease";
import ExpiredInfoModal from "../../ReleaseTypes/ExpiredRelease/Modals/ExpiredInfoModal/ExpiredInfoModal";
import NoLiveReleases from "./NoReleases/NoLiveReleases";

const CollectionReleaseList = memo(
  ({ releaseData, noReleaseDataComponent }) => {
    const [showExpiredInfoModal, setShowExpiredInfoModal] = useState(false);

    //filters expired releases
    const filteredReleasedReleases = releaseData.filter((release) => {
      return release.isExpired;
    });

    //filters live releases
    const filteredLiveReleases = releaseData.filter((release) => {
      return !release.isExpired;
    });

    //handlers
    const showExpiredInfoModalHandler = () => {
      setShowExpiredInfoModal(true);
    };
    const closeExpiredInfoModalHandler = () => {
      setShowExpiredInfoModal(false);
    };

    return (
      <>
        {releaseData.length === 0 ? (
          noReleaseDataComponent
        ) : (
          <section id={styles["collection-release-list"]}>
            <h1 className={styles["h1-title"]}>
              <div>Live</div>
            </h1>
            <div
              className={
                styles["collection-release-list-live-releases-container"]
              }
            >
              <div className={styles["release-grid"]}>
                {filteredLiveReleases.length === 0 ? (
                  <NoLiveReleases />
                ) : (
                  filteredLiveReleases.map((release) => {
                    return (
                      <AvailableRelease key={release.id} release={release} />
                    );
                  })
                )}
              </div>
            </div>
            <h1 className={styles["h1-title"]}>
              <div>Released</div>
            </h1>
            <div
              className={
                styles["collection-release-list-released-releases-container"]
              }
            >
              <div className={styles["release-grid"]}>
                <div
                  onClick={() => showExpiredInfoModalHandler()}
                  className={styles["cant-play-releases-container"]}
                >
                  <QuestionIcon />
                  <p>Why can't I play my releases?</p>
                </div>
                {filteredReleasedReleases.map((release) => {
                  return <ExpiredRelease key={release.id} release={release} />;
                })}
              </div>

              {showExpiredInfoModal && (
                <ExpiredInfoModal
                  closeExpiredInfoModal={closeExpiredInfoModalHandler}
                />
              )}
            </div>
          </section>
        )}
      </>
    );
  }
);

export default CollectionReleaseList;
