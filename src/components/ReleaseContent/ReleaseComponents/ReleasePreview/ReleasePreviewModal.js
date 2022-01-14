//styles
import styles from "./ReleasePreviewModal.module.scss";
//react imports
import ReactDOM from "react-dom";
//svg imports
import { ReactComponent as RecordIcon } from "../../../../assets/images/vinyl_yellow.svg";

//component imports
import ReleaseTracklist from "../ReleaseTracklist/ReleaseTracklist";
import ReleasePreviewTitleInfo from "./ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";

const ReleasePreviewModalOverlay = ({
  release,
  setShowReleasePreview,
  showReleasePreview,
}) => {
  return (
    <section id={styles["release-preview-backdrop"]}>
      ;
      <div className={styles["release-preview-modal"]}>
        <div
          onClick={() => setShowReleasePreview(!showReleasePreview)}
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
                <RecordIcon className={styles["record-svg"]} />
              </div>

              <div className={styles["release-information"]}>
                <div className={styles["release-tracklist"]}>
                  <ReleaseTracklist release={release} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReleasePreviewModal = ({
  release,
  setShowReleasePreview,
  showReleasePreview,
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ReleasePreviewModalOverlay
          release={release}
          setShowReleasePreview={setShowReleasePreview}
          showReleasePreview={showReleasePreview}
        />,
        document.getElementById("modal-overlay-root")
      )}
    </>
  );
};

export default ReleasePreviewModal;