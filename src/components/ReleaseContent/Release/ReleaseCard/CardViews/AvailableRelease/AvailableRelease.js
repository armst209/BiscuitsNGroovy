import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import AvailableReleaseHover from "./Hover/AvailableReleaseHover";

const AvailableRelease = ({ release }) => {
  return (
    <figure className="hover-img" key={release.id}>
      <ReleaseImage
        releaseImageSrc={release.art_url}
        releaseAlt={release.name}
      />
      <figcaption>
        {/* Hover state for release */}
        <AvailableReleaseHover release={release} />
      </figcaption>
    </figure>
  );
};

export default AvailableRelease;
