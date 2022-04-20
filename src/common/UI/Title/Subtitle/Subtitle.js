import { Typography } from "@mui/material";
import { Box, Text } from "@mui/system";
import { ReactComponent as RecordVinyl } from "common/assets/images/compact-disc-yellow.svg";

const Subtitle = ({ subtitle, subheader }) => {
  return (
    <Box>
      <Typography variant="h2">{subtitle.toLocaleUpperCase()}</Typography>
      <RecordVinyl />
      <Text component="p">{subheader}</Text>
    </Box>
  );
};

export default Subtitle;
