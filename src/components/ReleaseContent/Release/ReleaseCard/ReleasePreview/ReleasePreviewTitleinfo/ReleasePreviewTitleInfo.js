import ReleaseButton from "../../ReleaseButton/ReleaseButton";
import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import styles from "./ReleasePreviewTitleInfo.module.scss";

const ReleasePreviewTitleInfo = ({ release }) => {
  const { name, title, description, art_url, price } = release;
  return (
    <>
      <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
      <h1 className={styles["release-preview-title-info-price"]}>${price}</h1>
      <h2>
        {name} - {title}
      </h2>
      <div className={styles["release-preview-title-info-description"]}>
        {description}
      </div>
      <div className="button-container">
        <ReleaseButton release={release} />
      </div>
    </>
  );
};

export default ReleasePreviewTitleInfo;
