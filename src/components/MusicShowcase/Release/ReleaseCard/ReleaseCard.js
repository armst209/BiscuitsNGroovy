import { useState } from "react";
import "./ReleaseCardStyles.scss";
import ReleasePreview from "../ReleasePreview/ReleasePreview";
import ReleaseImage from "./ReleaseImage/ReleaseImage";

const ReleaseCard = ({ release }) => {
  const [showReleasePreview, setShowReleasePreview] = useState(false);
  const { name, art_url } = release;

  return (
    <>
      <div
        className="release-card"
        onClick={() => setShowReleasePreview(!showReleasePreview)}
      >
        {/* loading should be for image -CHANGE!! */}
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

export default ReleaseCard;
