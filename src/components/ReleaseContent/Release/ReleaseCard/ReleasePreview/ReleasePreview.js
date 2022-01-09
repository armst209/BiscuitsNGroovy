//styles
import styles from "./ReleasePreview.module.scss";

import { ReactComponent as RecordIcon } from "../../../../../assets/images/vinyl_yellow.svg";
import ReleaseTracklist from "../ReleaseTracklist/ReleaseTracklist";
import ReleasePreviewTitleInfo from "./ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";

const ReleasePreview = ({
  release,
  setShowReleasePreview,
  showReleasePreview,
}) => {
  return (
    <section id={styles["release-preview"]}>
      <div className={styles["release-preview-wrapper"]}>
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

export default ReleasePreview;
