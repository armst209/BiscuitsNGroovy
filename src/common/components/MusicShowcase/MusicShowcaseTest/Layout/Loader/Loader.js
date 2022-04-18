//svg imports
import { ReactComponent as RecordSpinner } from "common/assets/images/compact-disc-yellow.svg";

//styles
import styles from "./Loader.module.scss";

//material ui imports
import { Box } from "@mui/material";

const MusicShowcaseLoader = () => {
  return (
    <Box className={styles["loader"]}>
      <RecordSpinner className="rotate" />
    </Box>
  );
};
export default MusicShowcaseLoader;
