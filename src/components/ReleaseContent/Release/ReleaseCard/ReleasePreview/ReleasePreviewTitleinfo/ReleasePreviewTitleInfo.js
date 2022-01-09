import ReleaseButton from "../../ReleaseButton/ReleaseButton";
import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import styles from "./ReleasePreviewTitleInfo.module.scss";

const ReleasePreviewTitleInfo = ({ release }) => {
  const { name, title, description, art_url, price } = release;

  return (
    <section id={styles["release-preview-title-info"]}>
      <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
      <div className={styles["release-preview-title-info-price"]}>
        <div>${price}</div>
      </div>

      <h2>
        {name} - {title}
      </h2>
      <div className={styles["release-preview-title-info-description"]}>
        {description}
      </div>
      <div className={styles["button-container"]}>
        <ReleaseButton release={release} />
      </div>
    </section>
  );
};

export default ReleasePreviewTitleInfo;
