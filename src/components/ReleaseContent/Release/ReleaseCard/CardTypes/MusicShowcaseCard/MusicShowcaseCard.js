import { useState } from "react";
import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import ReleasePreviewModal from "../../ReleasePreview/ReleasePreviewModal";

const MusicShowcaseCard = ({ release }) => {
  const [showReleasePreview, setShowReleasePreview] = useState(false);
  const { name, art_url } = release;

  return (
    <>
      <div
        className="release-card"
        onClick={() => setShowReleasePreview(!showReleasePreview)}
      >
        <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
      </div>
      {showReleasePreview && (
        <ReleasePreviewModal
          release={release}
          setShowReleasePreview={setShowReleasePreview}
          showReleasePreview={showReleasePreview}
        />
      )}
    </>
  );
};

export default MusicShowcaseCard;
