import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
//styles
import styles from "./ImageLoader.module.scss";

const ImageLoader = () => {
  return (
    <div id={styles["image-loader"]}>
      <RecordSpinner className={`rotate ${styles["image-loading-svg"]}`} />
    </div>
  );
};

export default ImageLoader;
