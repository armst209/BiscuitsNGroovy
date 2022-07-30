//svg imports
import { ReactComponent as RecordSpinner } from "../../../../assets/images/compact-disc-yellow.svg";

//styles
import styles from "./Loader.module.scss";

//material ui imports
import { Box } from "@mui/material";

//component imports
import Rotate360 from "../../../../UI/Animations/Rotate360";

const MusicShowcaseLoader = () => {
  return (
    <Box data-testid="component-loader" className={styles.loader}>
      <Rotate360>
        <RecordSpinner />
      </Rotate360>
    </Box>
  );
};
export default MusicShowcaseLoader;
