//react imports
import { useState } from "react";
import MusicPlayerContainer from "../../MusicPlayer/OldMusicPlayer/MusicPlayerContainer";
//styles
import styles from "./BiscuitContainer.module.scss";
const BiscuitContainer = ({ release }) => {
  //hooks
  const [showBiscuitInsert, setShowBiscuitInsert] = useState(false);

  //state handlers
  const showBiscuitInsertHandler = () => {
    setShowBiscuitInsert(true);
  };
  const closeBiscuitInsertHandler = () => {
    setShowBiscuitInsert(false);
  };

  //getting array of available release ids
  //   const releaseIds = releases.library.map((_artistId) => {
  //     return _artistId.id;
  //   });

  //getting artist id from url parameters
  //   let { artistId } = useParams();

  //will redirect if artist id in url params does not match a current release id
  //   if (!releaseIds.includes(Number(artistId))) {
  //     return <NotFound />;
  //   }

  //filtering single release based on param id
  //   const filteredRelease = releases.library.filter((release) => {
  //     return release.id === Number(artistId);
  //   });

  //getting single release object
  //   const release = filteredRelease[0];

  return (
    release && (
      <section id={styles.biscuit}>
        <BiscuitAlbumInformation />
        <div className={styles["biscuit-wrapper"]}>
          <div className={styles["biscuit-container"]}>
            <div className={styles["biscuit-content"]}>
              <div className={styles["biscuit-content-left"]}>
                <ReleasePreviewTitleInfo release={release} />
              </div>
              <div className={styles["biscuit-content-right"]}>
                <div className={styles["biscuit-record-image"]}>
                  <RecordIcon className="biscuit-record-svg" />
                </div>

                <div className={styles["biscuit-information"]}>
                  <div className={styles["biscuit-tracklist"]}>
                    <ReleaseTracklist release={release} />
                  </div>
                </div>
                <div className={styles["biscuit-description"]}>
                  <BiscuitDescription />
                </div>
                <button
                  className="_button"
                  onClick={() => showBiscuitInsertHandler()}
                >
                  View Insert
                </button>
                {showBiscuitInsert && (
                  <div className={styles["biscuit-insert-wrapper"]}>
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
        <div className={styles["biscuit-back-collection-link"]}>
          <Link to="/collection">
            <BackButton />
            Back To Collection
          </Link>
        </div>
        {/* Music Player */}
        <MusicPlayerContainer release={release} />
      </section>
    )
  );
};
export default BiscuitContainer;
