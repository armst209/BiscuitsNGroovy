//react imports
import { useParams } from "react-router-dom";
import useFetch from "../../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";
import useModal from "../../../customHooks/Modal/useModal";
import { useRef } from "react";
import { Link } from "react-router-dom";


//component imports
import BiscuitContainer from "./BiscuitContainer/BiscuitContainer";
import ComponentLoading from "../../Loading/Component/ComponentLoading";
import NotFound from "../../../pages/NotFound/NotFound";
import BiscuitInsert from "./BiscuitInsert/BiscuitInsert";

//utility imports
import { token } from "../../../utils/UtilityVariables";

//styles
import styles from "./Biscuit.module.scss"

const Biscuit = () => {
  const { isModalShowing, toggleModal: toggleInsertModal, Modal } = useModal("modal-overlay-root");

  //ref for music player
  const musicPlayerRef = useRef(null);

  //music player handlers
  const pauseMusicHandler = () => {
    let isPaused = musicPlayerRef.current.audio.current.paused;
    if (!isPaused) {
      musicPlayerRef.current.audio.current.pause();
    }
  }
  const playMusicHandler = () => {
    let isPaused = musicPlayerRef.current.audio.current.paused;
    if (isPaused) {
      musicPlayerRef.current.audio.current.play();
    }
  }

  //getting id from url parameter
  let { biscuitId } = useParams();

  //useFetch
  const {
    responseData: releases,
    isLoading,
    errorMessage,
  } = useFetch({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/library/${biscuitId}/biscuit`,
    headers: { "x-access-token": token },
  });


  return (
    <>
      <section className="_main_section">
        <div>
          <Link className={styles["back-to-collection-link"]} to="/collection">Back To Collection</Link>
        </div>

        {isLoading && <ComponentLoading />}
        {!errorMessage ? (
          releases && (
            <BiscuitContainer
              release={releases.library}
              toggleInsertModal={toggleInsertModal}
              pauseMusicHandler={pauseMusicHandler}
              forwardedRef={musicPlayerRef}
            />
          )
        ) : (
          <NotFound />
        )}
      </section>
      <Modal isModalShowing={isModalShowing}>
        {releases && <BiscuitInsert release={releases.library} toggleInsertModal={toggleInsertModal} playMusicHandler={playMusicHandler} forwardedRef={musicPlayerRef} />}
      </Modal>
    </>
  );
};
export default Biscuit;
