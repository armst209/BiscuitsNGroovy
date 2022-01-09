import ReleaseTracklist from "../../components/ReleaseContent/Release/ReleaseCard/ReleaseTracklist/ReleaseTracklist";
import { ReactComponent as RecordIcon } from "../../assets/images/vinyl_yellow.svg";
import ReleasePreviewTitleInfo from "../../components/ReleaseContent/Release/ReleaseCard/ReleasePreview/ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";
import MainLogo from "../../components/Logos/MainLogo";
import BiscuitDescription from "../../components/ReleaseContent/Biscuit/BiscuitDescription/BiscuitDescription";
import BiscuitAlbumInformation from "../../components/ReleaseContent/Biscuit/BiscuitAlbumInformation/BiscuitAlbumInformation";
//styles
import styles from "./UniqueArtist.module.scss";

const UniqueArtistReleaseInfo = ({ release }) => {
  return (
    <section id={styles["unique-artist"]}>
      <MainLogo />
      <BiscuitAlbumInformation />
      <div className={styles["unique-artist-wrapper"]}>
        <div className={styles["unique-artist-container"]}>
          <div className={styles["unique-artist-content"]}>
            <div className={styles["unique-artist-content-left"]}>
              {/* based on boolean can or cant but release
                if boolean do something,another condition besides token???*/}
              <ReleasePreviewTitleInfo release={release} />
            </div>
            <div className={styles["unique-artist-content-right"]}>
              <div className={styles["unique-artist-record-image"]}>
                <RecordIcon className="unique-artist-record-svg" />
              </div>

              <div className={styles["unique-artist-information"]}>
                <div className={styles["unique-artist-tracklist"]}>
                  <ReleaseTracklist release={release} />
                  <BiscuitDescription />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueArtistReleaseInfo;
