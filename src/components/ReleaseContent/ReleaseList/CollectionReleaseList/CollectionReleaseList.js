// import "../../../MusicShowcase/MusicShowcaseStyles.scss";
import { ReactComponent as QuestionIcon } from "../../../../assets/images/help_question_yellow.svg";
import { memo, useState } from "react";
//styles
import styles from "./CollectionReleaseList.module.scss";
import AvailableRelease from "../../Release/ReleaseCard/CardViews/AvailableRelease/AvailableRelease";
import ExpiredRelease from "../../Release/ReleaseCard/CardViews/ExpiredRelease/ExpiredRelease";
import ExpiredInfoModal from "../../Release/ReleaseCard/CardViews/ExpiredRelease/Modals/ExpiredInfoModal/ExpiredInfoModal";

const CollectionReleaseList = memo(
  ({ releaseData, noReleaseDataComponent }) => {
    const [showExpiredInfoModal, setShowExpiredInfoModal] = useState(false);
    const filteredReleasedReleases = releaseData.filter((release) => {
      return release.isExpired;
    });
    const filteredLiveReleases = releaseData.filter((release) => {
      return !release.isExpired;
    });

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
                {filteredLiveReleases.map((release) => {
                  return (
                    <AvailableRelease key={release.id} release={release} />
                  );
                })}
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
