//component imports
import MusicShowcaseLoader from "../Loader/MusicShowcaseLoader";
import MusicShowcaseListWrapper from "./Wrapper/MusicShowcaseListWrapper";
import AllReleasesPurchased from "./List/AllReleasesPurchased/AllReleasesPurchased";

//react imports
import useTestAxiosFetch from "../../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";

//utility imports 
import { token } from "../../../utils/UtilityVariables";

//styles
import styles from "./MusicShowcaseReleases.module.scss"


const MusicShowcaseReleases = () => {
  const {
    responseData: releaseData,
    isLoading,
    errorMessage,
    errorMessageComponent
  } = useTestAxiosFetch({
    url: `${process.env.REACT_APP_BACKEND_URL}/releases`,
    method: "GET",
    headers: { "x-access-token": token },
  });

  return (
    <div data-testid="music-showcase-grid" className={styles[ "music-showcase-content-wrapper"]}>
      {isLoading && <MusicShowcaseLoader />}
      {/* displays "check back soon for our next drop!" if user has purchased all releases */}
      <AllReleasesPurchased releaseData={releaseData}/>
      {errorMessage === null ? (
        releaseData && (
          <MusicShowcaseListWrapper releaseData={releaseData.releases} />
        )
      ) : (
        <div data-testid="error-message">{errorMessageComponent}</div>
      )}
      </div>
  )
}

export default MusicShowcaseReleases