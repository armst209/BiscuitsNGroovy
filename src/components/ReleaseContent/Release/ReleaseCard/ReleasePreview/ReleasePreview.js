import "./ReleasePreviewStyles.scss";
import { ReactComponent as RecordIcon } from "../../../../../assets/images/vinyl_yellow.svg";
import ReleaseTracklist from "../ReleaseTracklist/ReleaseTracklist";
import ReleasePreviewTitleInfo from "./ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";

function ReleasePreview({
  release,
  setShowReleasePreview,
  showReleasePreview,
}) {
  return (
    <section id="release-preview">
      <div className="release-preview-wrapper">
        <div
          onClick={() => setShowReleasePreview(!showReleasePreview)}
          className="close-release-info"
        >
          X
        </div>
        <div className="release-preview-container">
          <div className="release-preview-content">
            <div className="release-content-left">
              <ReleasePreviewTitleInfo release={release} />
            </div>
            <div className="release-content-right">
              <div className="record-image">
                <RecordIcon className="record-svg" />
              </div>

              <div className="release-information">
                <div className="release-tracklist">
                  <ReleaseTracklist release={release} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReleasePreview;
