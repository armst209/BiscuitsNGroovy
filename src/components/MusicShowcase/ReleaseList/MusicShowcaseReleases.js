//component imports
import MusicShowcaseLoader from "../Loader/MusicShowcaseLoader";
import MusicShowcaseListWrapper from "./Wrapper/MusicShowcaseListWrapper";
// import AllReleasesPurchased from "./List/AllReleasesPurchased/AllReleasesPurchased";

//react imports
import useTestAxiosFetch from "../../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";

//utility imports 
import { token } from "../../../utils/UtilityVariables";

//styles
import styles from "./MusicShowcaseReleases.module.scss"
import NoReleasesMusicShowcase from "../../ReleaseContent/ReleaseComponents/NoReleases/NoReleasesMusicShowcase";



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


  const hasBeenPurchased = (currentValue) => currentValue.purchased === 1;

  return (
    <div data-testid="music-showcase-grid" className={styles["music-showcase-content-wrapper"]}>
      {isLoading && <MusicShowcaseLoader />}
      {/* //!!Logic will be overwritten by development merge in future */}
      {/* displays "check back soon for our next drop!" if user has purchased all releases or there is not active release */}
      {errorMessage === null ? releaseData?.releases.every(hasBeenPurchased) === true || releaseData?.releases.length === 0 ? <NoReleasesMusicShowcase /> : (
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