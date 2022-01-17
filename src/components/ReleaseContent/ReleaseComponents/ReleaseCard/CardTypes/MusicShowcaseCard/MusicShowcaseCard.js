//react imports
import { useState } from "react";

//component imports
import ReleaseImage from "../../../ReleaseImage/ReleaseImage";
import ReleasePreviewModal from "../../../ReleasePreview/ReleasePreviewModal";

const MusicShowcaseCard = ({ release }) => {
  const [showReleasePreview, setShowReleasePreview] = useState(false);

  const { name, art_url } = release;

  const showReleasePreviewModalHandler = () => setShowReleasePreview(true);
  const hideReleasePreviewModalHandler = () => setShowReleasePreview(false);

  return (
    <>
      <div
        className="release-card"
        onClick={() => showReleasePreviewModalHandler()}
      >
        <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
      </div>
      {showReleasePreview && (
        <ReleasePreviewModal
          release={release}
          hideReleasePreviewModalHandler={hideReleasePreviewModalHandler}
        />
      )}
    </>
  );
};

export default MusicShowcaseCard;
