import { useQuery } from "@tanstack/react-query";
import { fetchMusicShowcaseReleases } from "../../../redux/thunks";

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
