//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";

//styles
import styles from "./ImageLoader.module.scss";

/**
 * !Doesnt need react portal, specifically for individual images, must be relative to element
 */
const ImageLoader = () => {
  return (
    <div id={styles["image-loader"]}>
      <RecordSpinner className={`rotate ${styles["image-loading-svg"]}`} />
    </div>

  );
};

export default ImageLoader;
