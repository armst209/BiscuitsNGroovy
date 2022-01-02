import ReleaseImage from "../../components/ReleaseContent/Release/ReleaseCard/ReleaseImage/ReleaseImage";
import ReleaseButton from "../../components/ReleaseContent/Release/ReleaseCard/ReleaseButton/ReleaseButton";
import ReleaseTracklist from "../../components/ReleaseContent/Release/ReleaseCard/ReleaseTracklist/ReleaseTracklist";
import { ReactComponent as RecordIcon } from "../../assets/images/vinyl_yellow.svg";

const UniqueArtistReleaseInfo = ({ release }) => {
  return (
    <section id="unique-artist-preview">
      <div className="unique-artist-preview-wrapper">
        <div className="unique-artist-preview-container">
          <div className="unique-artist-preview-content">
            <div className="unique-artist-content-left">
              <ReleaseImage
                releaseImageSrc={release.art_url}
                releaseAlt={release.name}
              />
              <h1 className="unique-artist-price">${release.price}</h1>
              <h2>
                {release.name} - {release.title}
              </h2>
              <div className="unique-artistcard-description">
                {release.description}
              </div>
              <div className="button-container">
                <ReleaseButton release={release} />
              </div>
            </div>
            <div className="unique-artist-content-right">
              <div className="record-image">
                <RecordIcon className="record-svg" />
              </div>

              <div className="unique-artist-information">
                <div className="unique-artist-tracklist">
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

export default UniqueArtistReleaseInfo;
