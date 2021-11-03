import { useState } from "react";
import LazyLoad from "react-lazyload";
import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import ReleasePreview from "../../ReleasePreview/ReleasePreview";

const MusicShowcaseCard = ({ release }) => {
  const [showReleasePreview, setShowReleasePreview] = useState(false);
  const { name, art_url } = release;
  return (
    <>
      <div
        className="release-card"
        onClick={() => setShowReleasePreview(!showReleasePreview)}
      >
        {/* loading should be for image -CHANGE!! - add lazy loading or spinner*/}
        <LazyLoad once>
          <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
        </LazyLoad>
      </div>
      {showReleasePreview && (
        <ReleasePreview
          release={release}
          setShowReleasePreview={setShowReleasePreview}
          showReleasePreview={showReleasePreview}
        />
      )}
    </>
  );
};

export default MusicShowcaseCard;
