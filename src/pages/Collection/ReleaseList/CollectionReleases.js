//axios
import axios from "axios";

//utility imports
import { token } from "../../../common/utils/UtilityVariables";

//component imports
import CollectionLoader from "../Loader/CollectionLoader";
import FetchError from "../../../common/hooks/Fetch/FetchError/FetchError";
import NoReleasesCollection from "../NoReleases/NoReleasesCollection";
import CollectionReleaseList from "./List/CollectionReleaseList";

//react query
import { useQuery } from "react-query";

const CollectionReleases = () => {
  const fetchLibraryCollection = () => {
    return axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/library`,
      headers: { "x-access-token": token },
    });
  };

  //useQuery - refetch is set for every hour
  const {
    isLoading,
    data: releaseData,
    isError,
    error,
    isFetching,
  } = useQuery("collection-library-releases", fetchLibraryCollection, {
    staleTime: 2000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: false,
  });

  //loading or fetching
  if (isLoading || isFetching) {
    return <CollectionLoader />;
  }

  //error
  if (isError) {
    return (
      <FetchError
        status={error.response.status}
        error={error.response.statusText}
        isFetching={isFetching}
      />
    );
  }

  //no releases in user's collection
  if (releaseData?.data.library.length === 0) {
    return <NoReleasesCollection />;
  }

  return releaseData && <CollectionReleaseList releaseData={releaseData?.data.library} />;
};

export default CollectionReleases;
