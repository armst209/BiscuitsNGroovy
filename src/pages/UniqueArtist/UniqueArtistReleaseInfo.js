import ReleaseTracklist from "../../components/ReleaseContent/Release/ReleaseCard/ReleaseTracklist/ReleaseTracklist";
import { ReactComponent as RecordIcon } from "../../assets/images/vinyl_yellow.svg";
import ReleasePreviewTitleInfo from "../../components/ReleaseContent/Release/ReleaseCard/ReleasePreview/ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";
import BiscuitDescription from "../../components/ReleaseContent/Biscuit/BiscuitDescription/BiscuitDescription";
import BiscuitAlbumInformation from "../../components/ReleaseContent/Biscuit/BiscuitAlbumInformation/BiscuitAlbumInformation";
//styles
import styles from "./UniqueArtist.module.scss";
import { useParams } from "react-router-dom";

const UniqueArtistReleaseInfo = ({ releases }) => {
  //getting artist id from url parameters
  let { artistId } = useParams();

  //filtering single release based on param id
  const filteredRelease = releases.library.filter((release) => {
    return release.id === Number(artistId);
  });

  //getting single release object
  const release = filteredRelease[0];
  return (
    release && (
      <section id={styles["unique-artist"]}>
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
                  </div>
                </div>
                <div className={styles["unique-artist-biscuit-description"]}>
                  <BiscuitDescription />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default UniqueArtistReleaseInfo;
