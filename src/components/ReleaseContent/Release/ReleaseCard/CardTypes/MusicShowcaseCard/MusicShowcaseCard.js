import { useState } from "react";

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

        <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
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
