//react imports
import { useParams } from "react-router-dom";
import useFetch from "../../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";
import useModal from "../../../customHooks/Modal/useModal";
import {useState} from "react";


//component imports
import BiscuitContainer from "./BiscuitContainer/BiscuitContainer";
import ComponentLoading from "../../Loading/Component/ComponentLoading";
import NotFound from "../../../pages/NotFound/NotFound";
import BiscuitInsert from "./BiscuitInsert/BiscuitInsert";

//utility imports
import { token } from "../../../utils/UtilityVariables";

const Biscuit = () => {
  const {isModalShowing, toggleModal:toggleInsertModal, Modal} = useModal("modal-overlay-root");
 
  const [isMusicPlayerVisible, setIsMusicPlayerVisible] = useState(true);

  const showHideMusicPlayer = ()=> {setIsMusicPlayerVisible(prevState => !prevState);};

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
        {isLoading && <ComponentLoading />}
        {/* if release is null or not found, redirects to Not Found component */}
        {!errorMessage ? (
          releases && (
            <BiscuitContainer
              release={releases.library}
              toggleInsertModal={toggleInsertModal}
              showHideMusicPlayer={showHideMusicPlayer}
              isMusicPlayerVisible={isMusicPlayerVisible}
            />
          )
        ) : (
          <NotFound />
        )}
      </section>
      <Modal isModalShowing={isModalShowing}>
       {releases && <BiscuitInsert release={releases.library} toggleInsertModal={toggleInsertModal} showHideMusicPlayer={showHideMusicPlayer}/>} 
      </Modal>
    </>
  );
};
export default Biscuit;
