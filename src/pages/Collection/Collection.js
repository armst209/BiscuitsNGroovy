import env from "react-dotenv";
import "./CollectionStyles.scss";
import { ReactComponent as SpotlightLeft } from "../../assets/images/spotlight_outline_left_yellow.svg";
import { ReactComponent as SpotlightRight } from "../../assets/images/spotlight_outline_right_yellow.svg";
import ComponentLoading from "../../components/Loading/ComponentLoading";
import useFetch from "../../customHooks/Fetch/useFetch";
import ReleaseList from "../../components/MusicShowcase/ReleaseList/ReleaseList";
import NoReleasesCollection from "../../components/MusicShowcase/ReleaseList/NoReleases/NoReleasesCollection";

function Collection() {
  const token = localStorage.getItem("token");

  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
  } = useFetch(`${env.BACKEND_URL}/library`, {
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
    </section>
  );
}

export default Collection;
