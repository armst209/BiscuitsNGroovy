import { Grid } from "@mui/material";
import MusicShowcaseCard from "./Card";

const ReleasesGrid = ({ releaseData }) => {
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
      {releaseData.map((release) => {
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
