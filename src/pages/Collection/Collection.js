import env from "react-dotenv";
import "./CollectionStyles.scss";
import { ReactComponent as SpotlightLeft } from "../../assets/images/spotlight_outline_left_yellow.svg";
import { ReactComponent as SpotlightRight } from "../../assets/images/spotlight_outline_right_yellow.svg";
import { ReactComponent as InfoQuestion } from "../../assets/images/question2.svg";
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import useFetch from "../../customHooks/Fetch/useFetch";
import ReleaseList from "../../components/ReleaseContent/ReleaseList/ReleaseList";
import NoReleasesCollection from "../../components/ReleaseContent/ReleaseList/NoReleases/NoReleasesCollection";
import CollectionNavigation from "./CollectionNavigation/CollectionNavigation";
import MusicPlayerContainer from "../../components/MusicPlayer/MusicPlayerContainer";

function Collection() {
  let token = localStorage.getItem("token");

  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/library`, {
    headers: { "x-access-token": token },
  });

  return (
    <section id="collection">
      <div className="collection-title">
        <h1>
          {/* ======SVGs====== */}
          <SpotlightLeft className="spotlight-left" />
          <SpotlightRight className="spotlight-right" />
          {/* ======SVGs====== */}
          COLLECTION
        </h1>
      </div>
      {/* <div className="collection-play-info-container">
        <InfoQuestion />
        <div>Why can't I play songs in my collection?</div>
      </div> */}
      <div className="collection-nav-grid">
        {/* <div className="collection-navigation">
          <CollectionNavigation />
        </div> */}
        <div className="collection-container">
          <div className="collection-library-grid-wrapper">
            <div className="collection-library-grid">
              {isLoading && <ComponentLoading />}
              {errorMessage === null ? (
                releaseData && (
                  <ReleaseList
                    releaseData={releaseData.library}
                    noReleaseDataComponent={<NoReleasesCollection />}
                  />
                )
              ) : (
                <div>{errorMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
