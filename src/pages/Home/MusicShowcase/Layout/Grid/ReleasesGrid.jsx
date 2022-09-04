//material ui imports
import { Grid } from "@mui/material";

//component imports
import MusicShowcaseCard from "../Card/Card";
import NoReleases from "../NoReleases/NoReleases";
import Loader from "../Loader/Loader";

//react query
import useFetchReleases from "./hooks/useFetchReleases";

const ReleasesGrid = () => {
  // useQuery - refetch is set for every hour
  const {
    isLoading,
    data: releaseData,
    isError,
    error,
    isFetching,
  } = useFetchReleases(600000, 3.6e6, true, true, false, "releases");

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  //no releases in showcase
  if (releaseData?.data?.releases?.length === 0) {
    return <NoReleases />;
  }

  console.log(releaseData);

  return (
    <Grid
      data-testid="releases-grid"
      container
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center">
      {releaseData?.data?.releases?.map((release) => {
        return (
          <Grid item key={release.id}>
            <div>
              {release.albumTitle} - {release.artist}
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ReleasesGrid;
