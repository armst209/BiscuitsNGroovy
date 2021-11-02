import { useState } from "react";
import env from "react-dotenv";
import FPHomepage from "./TestFPHomePage/TestFPHomePage";
import "./TestCollectionStyles.scss";
import { ReactComponent as SpotlightLeft } from "../../../../assets/images/spotlight_outline_left_yellow.svg";
import { ReactComponent as SpotlightRight } from "../../../../assets/images/spotlight_outline_right_yellow.svg";

import NoReleases from "./TestFPHomePage/TestSections/TestNewLibrary/TestNoReleases";
import ComponentLoading from "../Loading/ComponentLoading";
import useFetch from "../../customHooks/Fetch/useFetch";

function Collection() {
  const token = localStorage.getItem("token");
  const [showAlbumDetails] = useState(false);
  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useFetch(`${env.BACKEND_URL}/library`, {
    headers: { "x-access-token": token },
  });

  return (
    <section id="fan-portal">
      <div className="portal-title">
        <h1>
          <SpotlightLeft className="spotlight-left" />
          <SpotlightRight className="spotlight-right" />
          COLLECTION
        </h1>
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
