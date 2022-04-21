//styles
import styles from "./Title.module.scss";

//svg imports
import { ReactComponent as RecordVinyl } from "common/assets/images/compact-disc-yellow.svg";
import { Typography, Box, Stack } from "@mui/material";

const Title = ({ title, subtitle, variant, component, sx }) => {
  const responsiveness = { xs: "column-reverse", sm: "column-reverse", md: "row-reverse" };
  return (
    <Box paddingBottom="3rem" textAlign="center" sx={sx ?? null}>
      <Stack
        paddingBottom=".5rem"
        direction={responsiveness}
        alignItems="center"
        justifyContent="center"
      >
        <RecordVinyl className={styles["title-svg"]} />
        <Typography variant={variant ?? "h1"} component={component ?? "h1"}>
          {title.toLocaleUpperCase()}
        </Typography>
      </Stack>
      {subtitle && (
        <Typography variant="subtitle1" component="p">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default Title;
