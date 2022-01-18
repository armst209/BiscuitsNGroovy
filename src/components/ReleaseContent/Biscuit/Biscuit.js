//react imports
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../customHooks/Fetch/useAxiosFetch";

//component imports
import BiscuitContainer from "./BiscuitContainer/BiscuitContainer";
import ComponentLoading from "../../Loading/Component/ComponentLoading";
import NotFound from "../../../pages/NotFound/NotFound";
import BiscuitInsert from "./BiscuitInsert/BiscuitInsert";

const Biscuit = () => {
  //hooks
  const [showBiscuitInsert, setShowBiscuitInsert] = useState(false);

  //state handlers
  const showHideBiscuitInsertHandler = () =>
    setShowBiscuitInsert(!showBiscuitInsert);

  //token
  let token = localStorage.getItem("token");

  //getting id from url parameter
  let { biscuitId } = useParams();

  //useFetch
  const {
    responseData: releases,
    isLoading,
    errorMessage,
  } = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/library/${biscuitId}/biscuit`,
    {
      headers: { "x-access-token": token },
    }
  );

  return (
    <>
      <section className="_main_section">
        {isLoading && <ComponentLoading />}
        {/* if release is null or not found, redirects to Not Found component */}
        {!errorMessage ? (
          releases && (
            <BiscuitContainer
              release={releases.library}
              showHideBiscuitInsertHandler={showHideBiscuitInsertHandler}
            />
          )
        ) : (
          <NotFound />
        )}
      </section>
      {showBiscuitInsert && (
        <BiscuitInsert
          showHideBiscuitInsertHandler={showHideBiscuitInsertHandler}
        />
      )}
    </>
  );
};
export default Biscuit;
