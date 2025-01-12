import PropTypes from "prop-types";
import styles from "./ReleaseImage.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

//loader
import ImageLoader from "../../../Loading/Image/ImageLoader";

const ReleaseImage = ({ releaseImageSrc, releaseAlt }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div className={styles["release-image-container"]}>
      {!isImageLoaded && <ImageLoader />}
      <LazyLoadImage
        id={styles["release-image"]}
        src={releaseImageSrc}
        alt={releaseAlt}
        effect="blur"
        afterLoad={() => setIsImageLoaded(true)}
      />
    </div>
  );
};

ReleaseImage.propTypes = {
  releaseImageSrc: PropTypes.string,
  releaseAlt: PropTypes.string,
};

export default ReleaseImage;
