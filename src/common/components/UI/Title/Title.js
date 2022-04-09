//styles
import styles from "./Title.module.scss";

//svg imports
import { ReactComponent as RecordVinyl } from "common/assets/images/compact-disc-yellow.svg";
import { Typography, Box, useTheme } from "@mui/material";

const Title = ({ title }) => {
  const theme = useTheme();
  return (
    <Box sx={theme.components.PageTitle}>
      <RecordVinyl />
      <Typography variant="h1" style={{ fontFamily: "var(--header-font)", fontSize: "3rem" }}>
        {title.toLocaleUpperCase()}
      </Typography>
    </Box>
  );
};

export default Title;
