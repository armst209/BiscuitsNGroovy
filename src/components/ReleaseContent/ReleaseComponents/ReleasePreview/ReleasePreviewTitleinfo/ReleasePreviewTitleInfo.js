import { useState } from "react";

import Button from "../../../../WrapperComponents/Button/Button";
import ReleaseButton from "../../ReleaseButton/ReleaseButton";
import ReleaseImage from "../../ReleaseImage/ReleaseImage";
import styles from "./ReleasePreviewTitleInfo.module.scss";

const ReleasePreviewTitleInfo = ({ release }) => {
  const { name, title, art_url, price } = release;
  const [showButton, setShowButton] = useState(true);

  const hideButtonHandler = () => setShowButton(false);

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

      <div className={styles["button-container"]}>
        {showButton && (
          <Button
            width={"200px"}
            display={"flex"}
            className="_button"
            noDisplay={showButton}
          >
            <ReleaseButton
              release={release}
              hideButtonHandler={hideButtonHandler}
            />
          </Button>
        )}
      </div>
    </section>
  );
};

export default ReleasePreviewTitleInfo;
