//styles
import styles from "./MusicShowcase.module.scss";

//component imports
import LookUpImage from "../../assets/images/MainSiteImages/LookUpImage";
import MusicShowcaseReleases from "./ReleaseList/MusicShowcaseReleases";

//image imports
import { ReactComponent as RecordHeaderIcon } from "../../assets/images/compact-disc-yellow.svg";

const MusicShowcase = () => {
  return (
    <section id={styles["music-showcase"]}>
      <div id="music-showcase-return"></div>
      <div className={styles["music-showcase-container"]}>
        <div className={styles["music-showcase-content-container"]}>
          <h1>
            <div>MUSIC SHOWCASE</div>
            <RecordHeaderIcon className={styles["record-header-icon"]} />
          </h1>
          <p className={styles["music-showcase-sub-title"]}>
            Available biscuits shown below. Click on a title for more details
          </p>
          <div data-testid="music-showcase-grid" className={styles["music-showcase-content-wrapper"]}>
            <MusicShowcaseReleases />
          </div>
        </div>
      </div>
      <LookUpImage />
    </section>
  );
};

export default MusicShowcase;