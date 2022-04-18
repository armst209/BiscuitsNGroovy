import { Box } from "@mui/material";
import ReleasesGrid from "./Layout/Grid/ReleasesGridsGrid";
import Title from "common/components/UI/Title/Title";

const MusicShowcaseIndex = () => {
  return (
    <Box component="section">
      <Title
        title="Music Showcase"
        subtitle="Available biscuits shown below. Click on a title for more details"
        variant="h2"
        sx=""
        direction="column"
      />
      <ReleasesGrid />
    </Box>
  );
};

export default MusicShowcaseIndex;
