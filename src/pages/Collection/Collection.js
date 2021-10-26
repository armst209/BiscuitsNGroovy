import { useState } from "react";
import env from "react-dotenv";
import FPHomepage from "../../components/FanPortal/FPHomePage/FPHomePage";
import "./CollectionStyles.scss";
// import spotlight_left from "../../../../assets/images/spotlight_outline_left_yellow.svg";
// import spotlight_right from "../../../../assets/images/spotlight_outline_right_yellow.svg";
import NoReleases from "../../components/FanPortal/FPHomePage/Sections/NewLibrary/NoReleases";
import ComponentLoading from "../../components/Loading/ComponentLoading";
import useAxiosFetch from "../../customHooks/useAxiosFetch";

function Collection() {
  const token = localStorage.getItem("token");
  const [showAlbumDetails] = useState(false);
  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useAxiosFetch(`${env.BACKEND_URL}/library`, {
    method: "GET",
    headers: { "x-access-token": token },
  });

  return (
    <section id="fan-portal">
      <div className="portal-title">
        <h1>
          {/* <img
            className="spotlight-left"
            src={spotlight_left}
            alt="spotlight"
          />
          <img
            className="spotlight-right"
            src={spotlight_right}
            alt="spotlight"
          /> */}
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
