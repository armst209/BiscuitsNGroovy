//material ui imports
import { Box } from "@mui/material";

//component imports
import ReleasesGrid from "./Layout/Grid/ReleasesGrid";
import Title from "../../../common/UI/Title/Title";

const MusicShowcaseIndex = () => {

  return (
    <Box component={"section"}>
      <Title
        title="Music Showcase"
        subtitle="Available biscuits shown below. Click on a title for more details"
        variant="h2"
        component="h2"
        sx={{ color: "#FFF" }}
        direction="row"
      />
      <ReleasesGrid />
    </Box>
  );
};

export default MusicShowcaseIndex;
