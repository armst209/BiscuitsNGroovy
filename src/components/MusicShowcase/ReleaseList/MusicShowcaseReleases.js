//component imports
import MusicShowcaseLoader from "../Loader/MusicShowcaseLoader";
import MusicShowcaseList from "./List/MusicShowcaseList";
import NoReleasesMusicShowcase from "../../ReleaseContent/ReleaseComponents/NoReleases/NoReleasesMusicShowcase";
import FetchError from "../../../hooks/Fetch/FetchError/FetchError";

//react imports
import { useQuery } from "react-query";

//utility imports 
import { token } from "../../../utils/UtilityVariables";

//styles
import styles from "./MusicShowcaseReleases.module.scss"

//axios
import axios from "axios"


const MusicShowcaseReleases = () => {

  /**
   * TODO - need to figure out when our data needs to be considered stale 
   * TODO - need to figure out when our data needs to be refetched - possibly every hour?
   */

  //fetch callback
  const fetchMusicShowcaseReleases = () => {
    return axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/releases`,
      headers: { "x-access-token": token },
    });
  }

  //useQuery - refetch is set for every hour
  const { isLoading, data: releaseData, isError, error, isFetching } = useQuery("music-showcase-releases", fetchMusicShowcaseReleases, { staleTime: 600000, refetchInterval: 3.6e+6, refetchOnWindowFocus: true, refetchOnReconnect: true, refetchOnMount: false });


  //loading & fetching
  if (isLoading || isFetching) {
    return <MusicShowcaseLoader />
  }

  //error
  if (isError) {
    return <FetchError status={error.response.status} error={error.response.statusText} isFetching={isFetching} />
  }

  //all releases purchased
  const hasBeenPurchased = (currentValue) => currentValue.purchased === 1;
  if (releaseData?.data.releases.every(hasBeenPurchased)) {
    return <NoReleasesMusicShowcase />
  }

  //no releases in showcase
  if (releaseData?.data.releases.length === 0) {
    return <NoReleasesMusicShowcase />
  }

  return (
    <div data-testid="music-showcase-grid" className={styles["music-showcase-content-wrapper"]}>
      <div className={releaseData?.data.releases.length <= 2 ? styles["single-release-in-grid"] : styles["music-showcase-list-grid"]}>
        {releaseData && <MusicShowcaseList releaseData={releaseData.data.releases} />}
      </div>
    </div>
  )
}

export default MusicShowcaseReleases