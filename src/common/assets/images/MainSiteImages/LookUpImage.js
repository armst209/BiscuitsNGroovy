//styles
import styles from "./LookUpImage.module.scss";
//image
import LookUpWebp from "../showcase-outline.webp";
import { Box } from "@mui/material";

const LookUpImage = () => {
  return (
    <Box className={styles["look-up-image-container"]}>
      <img className={styles["look-up-image"]} src={LookUpWebp} alt="bng artist" title="" />
    </Box>
  );
};

export default LookUpImage;
