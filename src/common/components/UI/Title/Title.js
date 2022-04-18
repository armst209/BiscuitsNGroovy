//styles
import styles from "./Title.module.scss";

//svg imports
import { ReactComponent as RecordVinyl } from "common/assets/images/compact-disc-yellow.svg";
import { Typography, Box, Stack } from "@mui/material";

const Title = ({ title, subtitle, variant, sx, direction }) => {
  return (
    <Box sx={sx} padding="1rem" textAlign="center">
      <Stack direction={direction} spacing={1}>
        <RecordVinyl width="50px" />
        <Typography
          variant={variant}
          style={{ fontFamily: "var(--header-font)", fontSize: "3rem" }}>
          {title.toLocaleUpperCase()}
        </Typography>
      </Stack>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </Box>
  );
};

export default Title;
