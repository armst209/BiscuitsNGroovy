//styles
import styles from "./BiscuitInsert.module.scss";

//component imports
import VideoIFrame from "./Video/VideoIFrame";

//Google Analytics imports
import ReactGA from "react-ga";



/**
 * !!TEMPORARY FIX, NEED TO COME UP WITH SOLUTION THAT DOES NOT DIRECTLY MANIPULATE THE DOM OR ACCESS CSS MODULE ID
 * @param {*} toggleModal 
 * @param {*} showHidePlayer 
 */
const handleBiscuitInsertClose = (toggleModal, showHidePlayer) => {
  toggleModal();
  const biscuitContainer = document.getElementById("BiscuitContainer_biscuit__dkLHn");
  if (document.body.contains(biscuitContainer)) {
    showHidePlayer();
  }
};


const BiscuitInsert = ({
  toggleInsertModal,
  release,
  showHideMusicPlayer
}) => {
  
  // -------Start of Google Analytics - DON'T REMOVE-------
  ReactGA.modalview(`${release.name}-BiscuitInsert`);
  // -------End of Google Analytics - DON'T REMOVE-------

  const { insert_link_1, insert_link_2, name } = release;

  return (
    <section data-testid={"biscuit-insert-test-id"} id={styles["biscuit-insert"]}>
      <div
        className={styles["biscuit-insert-close"]}
        onClick={() => handleBiscuitInsertClose(toggleInsertModal, showHideMusicPlayer)}
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

