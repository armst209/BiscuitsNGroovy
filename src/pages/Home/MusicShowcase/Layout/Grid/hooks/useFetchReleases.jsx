import { useQuery } from "@tanstack/react-query";
import { getReleases } from "../../../redux/thunks";
import PropTypes from "prop-types";

const useFetchReleases = (
  staleTime = null,
  refetchInterval = null,
  refetchOnWindowFocus = false,
  refetchOnReconnect = false,
  refetchOnMount = false,
  url = "",
) => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    ["music-showcase-releases"],
    () => getReleases(url),
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

useFetchReleases.propTypes = {
  staleTime: PropTypes.number,
  refetchInterval: PropTypes.number,
  refetchOnWindowFocus: PropTypes.bool,
  refetchOnReconnect: PropTypes.bool,
  refetchOnMount: PropTypes.bool,
  url: PropTypes.string.isRequired,
};

export default useFetchReleases;
