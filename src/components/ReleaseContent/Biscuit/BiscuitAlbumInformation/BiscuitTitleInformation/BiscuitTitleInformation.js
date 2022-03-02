
//styles
import styles from "./BiscuitTitleInformation.module.scss";

//component imports
import ReleaseImage from "../../../ReleaseComponents/ReleaseImage/ReleaseImage";
import Button from "../../../../../UI/Button/Button.tsx";

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
        {/* Conditionally render "view insert" button */}
        {release.insert_link_1 || release.insert_link_2 ?
          <Button
            style={{width:"200px"}}
            className="_button"
            onClick={()=> {showHideBiscuitInsertHandler(); showHideMusicPlayerContainerHandler();}}
          
          >
            View Insert
          </Button> : null

        }
        <br />
        <Button
          className="_button"
          style={{width:"200px"}}
          onClick={() => showHideBiscuitDescriptionHandler()}
        >
          <div className={styles["learn-more-btn-inner"]}>
            <p>Learn more</p>
            <RecordIcon />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default BiscuitTitleInformation;