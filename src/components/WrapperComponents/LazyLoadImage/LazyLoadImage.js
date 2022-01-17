import { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageLoader from "../../Loading/Image/ImageLoader";

const LazyLoadImage = ({ src, alt, className }) => {
  console.log(src);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <>
      {!isImageLoaded && <ImageLoader />}
      <LazyLoadImage
        className={className}
        // id={styles["release-image"]}
        src={src}
        alt={alt}
        effect="blur"
        afterLoad={() => setIsImageLoaded(true)}
      />
    </>
  );
};

export default LazyLoadImage;
