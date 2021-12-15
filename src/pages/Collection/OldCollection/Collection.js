import { useState } from "react";
import env from "react-dotenv";
import FPHomepage from "../../../pages/Collection/OldCollection/FanPortal/FPHomePage/FPHomePage.js";
import "./CollectionStyles.scss";
// import spotlight_left from "../../../../assets/images/spotlight_outline_left_yellow.svg";
// import spotlight_right from "../../../../assets/images/spotlight_outline_right_yellow.svg";
import NoReleases from "../../../pages/Collection/OldCollection/FanPortal/FPHomePage/Sections/NewLibrary/NoReleases";
import ComponentLoading from "../../../components/Loading/Component/ComponentLoading.js";
import useFetch from "../../../customHooks/Fetch/useFetch.js";

function Collection() {
  const token = localStorage.getItem("token");
  const [showAlbumDetails] = useState(false);
  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/library`, {
    headers: { "x-access-token": token },
  });

  return (
    <section id="fan-portal">
      <div className="portal-title">
        <h1>COLLECTION</h1>
      </div>
      {isLoading && <ComponentLoading />}
      {releaseData !== null && releaseData.length === 0 ? (
        <NoReleases />
      ) : (
        releaseData && (
          <FPHomepage releaseData={releaseData} setTrigger={showAlbumDetails} />
        )
      )}
      <div>{errorMessage}</div>
    </section>
  );
}

export default Collection;
