//styles
import styles from "./BiscuitInsert.module.scss";

//component imports
import VideoIFrame from "./Video/VideoIFrame";

//Google Analytics imports
import ReactGA from "react-ga";


const BiscuitInsert = ({
  toggleInsertModal,
  release,
  playMusicHandler,
}) => {

  // -------Start of Google Analytics - DON'T REMOVE-------
  ReactGA.modalview(`${release.name}-BiscuitInsert`);
  // -------End of Google Analytics - DON'T REMOVE-------

  /**
   * !! TEMPORARY FIX - NEED TO FIND SOLUTION THAT DOESNT MANIPULATE DOM
   * @param {*} func1 
   * @param {*} func2 
   */
  const handleInsertModalClose = (toggleInsert, playMusic) => {
    toggleInsert();
    const musicPlayerContainer = document.getElementById("music-player-container");
    if (document.body.contains(musicPlayerContainer)) {
      playMusic();
    }
  }

  const { insert_link_1, insert_link_2, name } = release;

  return (
    <section data-testid={"biscuit-insert-test-id"} id={styles["biscuit-insert"]}>
      <div
        className={styles["biscuit-insert-close"]}
        onClick={() => handleInsertModalClose(toggleInsertModal, playMusicHandler)}
      >
        X
      </div>
      <div className={styles["biscuit-insert-container"]}>
        {!insert_link_1 ? "" : insert_link_1.includes("video") ? <VideoIFrame insertLink={insert_link_1} className={"biscuit-insert-iframe-container-1"} title={name} /> : <img src={insert_link_1} alt={name} />}
        {!insert_link_2 ? "" : insert_link_2.includes("video") ? <VideoIFrame insertLink={insert_link_2} className={"biscuit-insert-iframe-container-2"} /> : <img src={insert_link_2} alt={name} />}
      </div>
    </section>
  );
};

export default BiscuitInsert;

