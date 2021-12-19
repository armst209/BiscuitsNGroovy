import "./ReleasePreviewStyles.scss";
import { ReactComponent as RecordIcon } from "../../../../../assets/images/vinyl_yellow.svg";
import ReleaseImage from "../ReleaseImage/ReleaseImage";
import ReleaseTracklist from "../ReleaseTracklist/ReleaseTracklist";
import ReleaseButton from "../ReleaseButton/ReleaseButton";

function ReleasePreview({
  release,
  setShowReleasePreview,
  showReleasePreview,
}) {
  const { name, title, description, art_url, price } = release;

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
              <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
              <h1 className="release-price">${price}</h1>
              <h2>
                {name} - {title}
              </h2>
              <div className="release-card-description">{description}</div>
              <div className="button-container">
                <ReleaseButton release={release} />
              </div>
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
