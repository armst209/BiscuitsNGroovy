//component imports
import Rotate360 from "../Animations/Rotate360";

//material ui imports
import { Box } from "@mui/material";

//svg imports
import { ReactComponent as RecordSpinner } from "common/assets/images/compact-disc-yellow.svg";

//styles
import styles from "./ComponentLoader.module.scss";

const ComponentLoader = () => {
  return (
    <Box sx={styles.loader}>
      <Rotate360>
        <RecordSpinner />
      </Rotate360>
    </Box>
  );
};

export default ComponentLoader;
