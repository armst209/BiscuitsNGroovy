//react imports
import { useState } from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./BiscuitContainer.module.scss";

//svg imports
import { ReactComponent as BackButton } from "../../../../assets/images/arrow-back-yellow.svg";
import { ReactComponent as RecordIcon } from "../../../../assets/images/vinyl_yellow.svg";

//component imports
import BiscuitAlbumInformation from "../BiscuitAlbumInformation/BiscuitAlbumInformation";
import ReleasePreviewTitleInfo from "../../ReleaseComponents/ReleasePreview/ReleasePreviewTitleinfo/ReleasePreviewTitleInfo";
import ReleaseTracklist from "../../ReleaseComponents/ReleaseTracklist/ReleaseTracklist";
import BiscuitDescription from "../BiscuitDescription/BiscuitDescription";
import BiscuitInsert from "../BiscuitInsert/BiscuitInsert";

//music player import
import MusicPlayerContainer from "../../MusicPlayer/MusicPlayerContainer";
import BiscuitTitleInformation from "../BiscuitAlbumInformation/BiscuitTitleInformation/BiscuitTitleInformation";
import ReleaseTracklistPlayer from "../../ReleaseComponents/ReleaseTracklist/ReleaseTracklistPlayer";
import Button from "../../../WrapperComponents/Button/Button";

const BiscuitContainer = ({ release, showBiscuitInsertHandler }) => {
  return (
    release && (
      <section id={styles.biscuit}>
        <div className={styles["release-preview-modal"]}>
          <div className={styles["release-preview-container"]}>
            <div className={styles["release-preview-content"]}>
              <div className={styles["release-content-left"]}>
                <BiscuitTitleInformation release={release} />
              </div>
              <div className={styles["release-content-right"]}>
                <div className={styles["release-information"]}>
                  <div className={styles["release-tracklist"]}>
                    <ReleaseTracklistPlayer songs={release.songs} />
                  </div>
                </div>
                <div className={styles["release-preview-svg-divider"]}>
                  <RecordIcon />
                </div>

                <div className={styles["release-preview-description"]}>
                  {/* {release.description} */}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident cumque eaque necessitatibus qui. Unde consequuntur
                  aperiam delectus officia fugiat. Quisquam non totam architecto
                  doloribus fugiat numquam quod corporis officiis doloremque.
                </div>
                <div>
                  <Button
                    className="_button"
                    onClickFunction={showBiscuitInsertHandler}
                  >
                    View Insert
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MusicPlayerContainer release={release} />
      </section>
      // <section id={styles.biscuit}>
      //   <BiscuitAlbumInformation />
      //   <div className={styles["biscuit-wrapper"]}>
      //     <div className={styles["biscuit-container"]}>
      //       <div className={styles["biscuit-content"]}>
      //         <div className={styles["biscuit-content-left"]}>
      //           <ReleasePreviewTitleInfo release={release} />
      //         </div>
      //         <div className={styles["biscuit-content-right"]}>
      //           <div className={styles["biscuit-record-image"]}>
      //             <RecordIcon className="biscuit-record-svg" />
      //           </div>

      //           <div className={styles["biscuit-information"]}>
      //             <div className={styles["biscuit-tracklist"]}>
      //               <ReleaseTracklist songs={release.songs} />
      //             </div>
      //           </div>
      //           <div className={styles["biscuit-description"]}>
      //             <BiscuitDescription />
      //           </div>
      //           <button
      //             className="_button"
      //             onClick={() => showBiscuitInsertHandler()}
      //           >
      //             View Insert
      //           </button>
      //           {showBiscuitInsert && (
      //             <div className={styles["biscuit-insert-wrapper"]}>
      //               <div
      //                 className={styles["close-biscuit-insert"]}
      //                 onClick={() => closeBiscuitInsertHandler()}
      //               >
      //                 X
      //               </div>
      //               <BiscuitInsert />
      //             </div>
      //           )}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   {/* <div className={styles["biscuit-back-collection-link"]}>
      //     <Link to="/collection">
      //       <BackButton />
      //       Back To Collection
      //     </Link>
      //   </div> */}
      //   {/* Music Player */}
      //   <MusicPlayerContainer release={release} />
      // </section>
    )
  );
};
export default BiscuitContainer;
