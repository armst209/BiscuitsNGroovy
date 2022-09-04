//material ui imports
import { Box } from "@mui/material";

//component imports
import ReleasesGrid from "./Layout/Grid/ReleasesGrid";
import HeaderTitle from "../../../common/UI/HeaderTitle/HeaderTitle";

const MusicShowcase = () => {
  return (
    <Box component={"section"}>
      <HeaderTitle
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

export default MusicShowcase;
