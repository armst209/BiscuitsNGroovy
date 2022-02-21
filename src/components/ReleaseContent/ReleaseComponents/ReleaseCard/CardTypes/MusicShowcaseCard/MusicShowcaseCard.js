//react imports
import { useState } from "react";

//component imports
import ReleaseImage from "../../../ReleaseImage/ReleaseImage";
import ReleasePreviewModal from "../../../ReleasePreview/ReleasePreviewModal";

const MusicShowcaseCard = ({ release }) => {
  const [showReleasePreview, setShowReleasePreview] = useState(false);

  const { name, art_url } = release;

  // const showReleasePreviewModalHandler = () => setShowReleasePreview(true);
  const hideReleasePreviewModalHandler = () => setShowReleasePreview(false);

  return (
    <figure>
      <div
        data-testid="available-release-card"
        className="release-card"
        onClick={() =>
          window.location.replace(
            `${process.env.REACT_APP_FRONTEND_URL}/release/${release.id}`
          )
        }
      >
        <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
      </div>
      {showReleasePreview && (
        <ReleasePreviewModal
          release={release}
          hideReleasePreviewModalHandler={hideReleasePreviewModalHandler}
        />
      )}
    </figure>
  );
};

export default MusicShowcaseCard;
