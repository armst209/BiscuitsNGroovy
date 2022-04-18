//material ui imports
import { Grid } from "@mui/material";

//component imports
import MusicShowcaseCard from "../Card/Card";
import NoReleases from "../NoReleases/NoReleases";
import Loader from "../Loader/Loader";

//redux imports
import { fetchMusicShowcaseReleases } from "../../redux/thunks";

//react query
import { useQuery } from "react-query";

const ReleasesGrid = () => {
  //useQuery - refetch is set for every hour
  const {
    isLoading,
    data: releaseData,
    isError,
    error,
    isFetching,
  } = useQuery("music-showcase-releases", fetchMusicShowcaseReleases, {
    staleTime: 600000,
    refetchInterval: 3.6e6,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: false,
  });

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  //no releases in showcase
  if (releaseData?.data.releases.length === 0) {
    return <NoReleases />;
  }
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
      {releaseData.data.releases.map((release) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={release.id}>
            <MusicShowcaseCard release={release} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ReleasesGrid;
