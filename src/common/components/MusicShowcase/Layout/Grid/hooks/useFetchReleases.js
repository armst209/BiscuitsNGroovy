import { useQuery } from "react-query";
import { fetchMusicShowcaseReleases } from "common/components/MusicShowcase/redux/thunks";

const useFetchReleases = (
  staleTime,
  refetchInterval,
  refetchOnWindowFocus,
  refetchOnReconnect,
  refetchOnMount,
) => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "music-showcase-releases",
    fetchMusicShowcaseReleases,
    {
      staleTime,
      refetchInterval,
      refetchOnWindowFocus,
      refetchOnReconnect,
      refetchOnMount,
    },
  );

  return { isLoading, data, isError, error, isFetching };
};

export default useFetchReleases;
