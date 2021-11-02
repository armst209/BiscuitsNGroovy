import { useState } from "react";
import "./ReleaseCardStyles.scss";
import ReleasePreview from "../ReleasePreview/ReleasePreview";
import ComponentLoading from "../../../Loading/ComponentLoading";
import ReleaseImage from "./ReleaseImage/ReleaseImage";

const ReleaseCard = ({ release }) => {
  const [showReleasePreview, setShowReleasePreview] = useState(false);
  const { name, art_url } = release;

  return (
    <>
      <div
        className="release-card-item"
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
          //props passed in for signup pop up, if user is not logged in and tries to purchase a release
          // signUpPopup={props.signUpPopup}
          // showSignUpPopup={props.showSignUpPopup}
        />
      )}
    </>
  );
};

export default ReleaseCard;
