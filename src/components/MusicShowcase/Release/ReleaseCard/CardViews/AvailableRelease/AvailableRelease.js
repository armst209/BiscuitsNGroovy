import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import AvailableReleaseHover from "./HoverState/AvailableReleaseHover";

const AvailableRelease = ({ release }) => {
  return (
    <figure className="hover-img" key={release.id}>
      <ReleaseImage
        releaseImageSrc={release.art_url}
        releaseAlt={release.name}
      />
      <figcaption>
        {/* Hover state for release */}
        <AvailableReleaseHover
          //   closeButton={props.popUpPassed}
          //   setAlbumInfo={setAlbumInfo}
          //   albumInfo={albumInfo}
          release={release}
          //   toggle={closeAlbumInfo}
          //   showReleasePopUp={props.popUpPassed}
        />
      </figcaption>
    </figure>
  );
};

export default AvailableRelease;
