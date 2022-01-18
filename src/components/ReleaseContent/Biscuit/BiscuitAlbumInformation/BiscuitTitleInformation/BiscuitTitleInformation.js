import styles from "./BiscuitTitleInformation.module.scss";
import ReleaseImage from "../../../ReleaseComponents/ReleaseImage/ReleaseImage";

const BiscuitTitleInformation = ({ release }) => {
  const { name, title, art_url, price } = release;
  return (
    <section id={styles["release-preview-title-info"]}>
      <div className={styles["release-image-container"]}>
        <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
      </div>
      <h2>
        {name} - {title}
      </h2>
    </section>
  );
};

export default BiscuitTitleInformation;
