import styles from "./BiscuitTitleInformation.module.scss";
import ReleaseImage from "../../../ReleaseComponents/ReleaseImage/ReleaseImage";
import Button from "../../../../WrapperComponents/Button/Button";
import { ReactComponent as RecordIcon } from "../../../../../assets/images/vinyl_yellow.svg";

const BiscuitTitleInformation = ({
  release,
  showBiscuitInsertHandler,
  showHideBiscuitDescriptionHandler,
}) => {
  const { name, title, art_url } = release;
  return (
    <section id={styles["release-preview-title-info"]}>
      <div className={styles["release-image-container"]}>
        <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
      </div>
      <h2>
        {name} - {title}
      </h2>
      <div>
        <div className={styles["release-preview-svg-divider"]}>
          <Button
            width="200px"
            className="_button"
            onClickFunction={showBiscuitInsertHandler}
          >
            View Insert
          </Button>
          <br />
          <Button
            width="200px"
            className="_button"
            onClickFunction={showHideBiscuitDescriptionHandler}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <p>Learn more</p>
              <RecordIcon />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BiscuitTitleInformation;
