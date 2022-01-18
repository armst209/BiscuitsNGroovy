//styles
import styles from "./ReleasePreviewModal.module.scss";

//react imports
import ReactDOM from "react-dom";

//svg imports
import { ReactComponent as RecordHeartIcon } from "../../../../assets/images/vinyl_yellow.svg";
import { ReactComponent as RecordIcon } from "../../../../assets/images/compact-disc-yellow.svg";

//component imports
import ReleaseTracklist from "../ReleaseTracklist/ReleaseTracklist";
import ReleasePreviewTitleInfo from "./ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";

const ReleasePreviewModalOverlay = ({
  release,
  hideReleasePreviewModalHandler,
}) => {
  return (
    <section id={styles["release-preview-backdrop"]}>
      <div className={styles["release-preview-modal"]}>
        <div
          onClick={() => hideReleasePreviewModalHandler()}
          className={styles["close-release-info"]}
        >
          X
        </div>
        <div className={styles["release-preview-container"]}>
          <div className={styles["release-preview-content"]}>
            <div className={styles["release-content-left"]}>
              <ReleasePreviewTitleInfo release={release} />
            </div>
            <div className={styles["release-content-right"]}>
              <div className={styles["record-image"]}>
                <RecordHeartIcon className={styles["record-svg"]} />
              </div>

              <div className={styles["release-information"]}>
                <div className={styles["release-tracklist"]}>
                  <ReleaseTracklist songs={release.songs} />
                </div>
              </div>
              <div className={styles["release-preview-svg-divider"]}>
                <RecordIcon />
              </div>

              <div className={styles["release-preview-description"]}>
                {release.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReleasePreviewModal = ({ release, hideReleasePreviewModalHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ReleasePreviewModalOverlay
          release={release}
          hideReleasePreviewModalHandler={hideReleasePreviewModalHandler}
        />,
        document.getElementById("modal-overlay-root")
      )}
    </>
  );
};

export default ReleasePreviewModal;
