import "./CollectionStyles.scss";

import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import useFetch from "../../customHooks/Fetch/useFetch";
import ReleaseList from "../../components/ReleaseContent/ReleaseList/ReleaseList";
import NoReleasesCollection from "../../components/ReleaseContent/ReleaseList/NoReleases/NoReleasesCollection";

function Collection() {
  //TOKEN
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
          <RecordVinyl width="50px" />
          <div>COLLECTION</div>
        </h1>
      </div>

      <div className="collection-nav-grid">
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
