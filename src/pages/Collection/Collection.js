import "./CollectionStyles.scss";

import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";
import ComponentLoading from "../../components/Loading/Component/ComponentLoading";
import useFetch from "../../customHooks/Fetch/useFetch";
import ReleaseList from "../../components/ReleaseContent/ReleaseComponents/ReleaseLists/ReleaseList";
import NoReleasesCollection from "../../components/ReleaseContent/ReleaseComponents/NoReleases/NoReleasesCollection";
import CollectionReleaseList from "../../components/ReleaseContent/ReleaseComponents/ReleaseLists/CollectionReleaseList/CollectionReleaseList";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";

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
    <>
      <FixedNavigationSpacer />
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
                    <CollectionReleaseList
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
    </>
  );
}

export default Collection;
