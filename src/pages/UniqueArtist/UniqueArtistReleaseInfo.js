import ReleaseTracklist from "../../components/ReleaseContent/Release/ReleaseCard/ReleaseTracklist/ReleaseTracklist";
import { ReactComponent as RecordIcon } from "../../assets/images/vinyl_yellow.svg";
import ReleasePreviewTitleInfo from "../../components/ReleaseContent/Release/ReleaseCard/ReleasePreview/ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";
import BiscuitDescription from "../../components/ReleaseContent/Biscuit/BiscuitDescription/BiscuitDescription";
import BiscuitAlbumInformation from "../../components/ReleaseContent/Biscuit/BiscuitAlbumInformation/BiscuitAlbumInformation";
import { ReactComponent as BackButton } from "../../assets/images/arrow-back-yellow.svg";

//styles
import styles from "./UniqueArtist.module.scss";

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import BiscuitInsert from "../../components/ReleaseContent/Biscuit/BiscuitInsert/BiscuitInsert";

const UniqueArtistReleaseInfo = ({ releases }) => {
  const [showBiscuitInsert, setShowBiscuitInsert] = useState(false);

  const showBiscuitInsertHandler = () => {
    setShowBiscuitInsert(true);
  };
  const closeBiscuitInsertHandler = () => {
    setShowBiscuitInsert(false);
  };
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
                <button
                  className="global-button"
                  onClick={() => showBiscuitInsertHandler()}
                >
                  View Insert
                </button>
                {showBiscuitInsert && (
                  <div
                    className={styles["unique-artist-biscuit-insert-wrapper"]}
                  >
                    <div
                      className={styles["close-biscuit-insert"]}
                      onClick={() => closeBiscuitInsertHandler()}
                    >
                      X
                    </div>
                    <BiscuitInsert />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles["unique-artist-back-collection-link"]}>
          <Link to="/collection">
            <BackButton />
            Back To Collection
          </Link>
        </div>
      </section>
    )
  );
};

export default UniqueArtistReleaseInfo;
