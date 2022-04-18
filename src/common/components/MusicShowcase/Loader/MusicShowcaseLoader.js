//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";

//styles
import styles from "./MusicShowcaseLoader.module.scss";

//material ui imports
import { Box } from "@mui/material";

const MusicShowcaseLoader = () => {
  return (
    <Box className={styles["music-showcase-loader"]}>
      <RecordSpinner className="rotate" />
    </Box>
  );
};
export default MusicShowcaseLoader;
