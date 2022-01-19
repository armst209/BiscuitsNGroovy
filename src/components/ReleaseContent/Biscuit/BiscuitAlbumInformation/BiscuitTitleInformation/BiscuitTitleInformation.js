import styles from "./BiscuitTitleInformation.module.scss";
import ReleaseImage from "../../../ReleaseComponents/ReleaseImage/ReleaseImage";
import Button from "../../../../WrapperComponents/Button/Button";
import { ReactComponent as RecordIcon } from "../../../../../assets/images/vinyl_yellow.svg";

const BiscuitTitleInformation = ({
  release,
  showHideBiscuitInsertHandler,
  showHideBiscuitDescriptionHandler,
  showHideMusicPlayerContainerHandler,
}) => {
  const { name, title, art_url } = release;
  return (
    <section id={styles["biscuit-title-info"]}>
      <div className={styles["release-image-container"]}>
        <ReleaseImage releaseImageSrc={art_url} releaseAlt={name} />
      </div>
      <h2>
        {name} - {title}
      </h2>

      <div className={styles["biscuit-title-info-button-container"]}>
        <Button
          width="200px"
          className="_button"
          onClickFunction={showHideBiscuitInsertHandler}
          onClickFunction2={showHideMusicPlayerContainerHandler}
        >
          View Insert
        </Button>
        <br />
        <button
          style={{ width: "200px" }}
          className="_button"
          onClick={() => showHideBiscuitDescriptionHandler()}
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
        </button>
      </div>
    </section>
  );
};

export default BiscuitTitleInformation;
