//styles
import styles from "./Title.module.scss";

//svg imports
import { ReactComponent as RecordVinyl } from "common/assets/images/compact-disc-yellow.svg";
import { Typography, Box, Stack } from "@mui/material";

const Title = ({ title, subtitle, variant, component, sx, direction }) => {
  return (
    <Box padding="1rem" textAlign="center" sx={sx ?? null}>
      <Stack flexDirection={direction} spacing={1} alignContent="center" justifyContent="center">
        <RecordVinyl width="50px" />
        <Typography variant={variant ?? "h1"} component={component ?? "h1"} styles={styles.title}>
          {title.toLocaleUpperCase()}
        </Typography>
      </Stack>
      {subtitle ?? <Typography variant="subtitle1">{subtitle}</Typography>}
    </Box>
  );
};

export default Title;
