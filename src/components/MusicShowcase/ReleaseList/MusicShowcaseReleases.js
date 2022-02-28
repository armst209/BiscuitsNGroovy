//component imports
import MusicShowcaseLoader from "../Loader/MusicShowcaseLoader";
import MusicShowcaseListWrapper from "./Wrapper/MusicShowcaseListWrapper";

//react imports
import useTestAxiosFetch from "../../../customHooks/Fetch/TestAxiosFetch/useTestAxiosFetch";

//utility imports 
import { token } from "../../../utils/UtilityVariables";

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
    <>
      {isLoading && <MusicShowcaseLoader />}
      {errorMessage === null ? (
        releaseData && (
          <MusicShowcaseListWrapper releaseData={releaseData.releases} />
        )
      ) : (
        <div data-testid="error-message">{errorMessageComponent}</div>
      )}
    </>
  )
}

export default MusicShowcaseReleases