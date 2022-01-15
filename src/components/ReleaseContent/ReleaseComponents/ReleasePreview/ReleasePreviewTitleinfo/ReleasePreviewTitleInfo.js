import Button from "../../../../WrapperComponents/Button/Button";
import ReleaseButton from "../../ReleaseButton/ReleaseButton";
import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import styles from "./ReleasePreviewTitleInfo.module.scss";

const ReleasePreviewTitleInfo = ({ release }) => {
  const { name, title, description, art_url, price } = release;

  return (
    <section id={styles["release-preview-title-info"]}>
      <div className={styles["release-image-container"]}>
        <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
      </div>

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
        <Button className="_button">
          <ReleaseButton release={release} />
        </Button>
      </div>
    </section>
  );
};

export default ReleasePreviewTitleInfo;
