//react imports
import { useParams } from "react-router-dom";
import { useState, createContext } from "react";
import useFetch from "../../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";
import useModal from "../../../customHooks/Modal/useModal";
import { MusicPlayerDisplayProvider } from "../../../utils/context/MusicPlayerDisplayProvider";

//component imports
import BiscuitContainer from "./BiscuitContainer/BiscuitContainer";
import ComponentLoading from "../../Loading/Component/ComponentLoading";
import NotFound from "../../../pages/NotFound/NotFound";
import BiscuitInsert from "./BiscuitInsert/BiscuitInsert";

//utility imports
import { token } from "../../../utils/UtilityVariables";


const Biscuit = () => {
  //hooks
  const [showMusicPlayerContainer, setShowMusicPlayerContainer] =
    useState(true);

  const {isModalShowing, toggleModal:toggleInsertModal, Modal} = useModal("modal-overlay-root");

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
    <MusicPlayerDisplayProvider>
      <section className="_main_section">
        {isLoading && <ComponentLoading />}
        {/* if release is null or not found, redirects to Not Found component */}
        {!errorMessage ? (
          releases && (
            <BiscuitContainer
              release={releases.library}
              showMusicPlayerContainer={showMusicPlayerContainer}
              toggleInsertModal={toggleInsertModal}
            />
          )
        ) : (
          <NotFound />
        )}
      </section>
      <Modal isModalShowing={isModalShowing}>
       {releases && <BiscuitInsert release={releases.library} toggleInsertModal={toggleInsertModal}/>} 
      </Modal>
    </MusicPlayerDisplayProvider>
  );
};
export default Biscuit;
