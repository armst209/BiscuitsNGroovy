import PropTypes from "prop-types";

const ReleaseImage = ({ releaseImageSrc, releaseAlt }) => {
  return (
    <>
      <img className="release-image" src={releaseImageSrc} alt={releaseAlt} />
    </>
  );
};

ReleaseImage.propTypes = {
  releaseImageSrc: PropTypes.string,
  releaseAlt: PropTypes.string,
};

export default ReleaseImage;
