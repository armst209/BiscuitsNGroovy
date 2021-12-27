import PropTypes from "prop-types";
import "./ReleaseImageStyles.scss";

const ReleaseImage = ({ releaseImageSrc, releaseAlt }) => {
  return (
    <>
      <img
        className="release-card-image"
        src={releaseImageSrc}
        alt={releaseAlt}
      />
    </>
  );
};

ReleaseImage.propTypes = {
  releaseImageSrc: PropTypes.string,
  releaseAlt: PropTypes.string,
};

export default ReleaseImage;
