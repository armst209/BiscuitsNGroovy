
//styles
import styles from "./BiscuitTitleInformation.module.scss";

//component imports
import ReleaseImage from "../../../ReleaseComponents/ReleaseImage/ReleaseImage";

//svg imports
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
        <button
         style={{ width: "200px" }}
          className="_button"
          onClick={()=>{
            showHideBiscuitInsertHandler();
            showHideMusicPlayerContainerHandler();
          }}
      
        >
          View Insert
        </button>
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
