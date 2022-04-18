import { useQuery } from "react-query";
import { fetchMusicShowcaseReleases } from "./redux/thunks";
import { Box } from "@mui/material";
import ReleasesGrid from "./Layout/ReleasesGrid";

import Title from "common/components/UI/Title/Title.js";
import NoReleases from "./Layout/NoReleases";

const MusicShowcaseIndex = () => {
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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  //no releases in showcase
  if (releaseData?.data.releases.length === 0) {
    return <NoReleases />;
  }

  return (
    <Box component="section">
      <Title
        title="Music Showcase"
        subtitle="Available biscuits shown below. Click on a title for more details"
        variant="h2"
        sx=""
        direction="column"
      />
      {releaseData && <ReleasesGrid releaseData={releaseData.data.releases} />}
    </Box>
  );
};

export default MusicShowcaseIndex;
