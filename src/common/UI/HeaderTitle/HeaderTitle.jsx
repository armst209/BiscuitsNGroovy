import PropTypes from "prop-types";
//styles
import styles from "./HeaderTitle.module.scss";

//svg imports
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";
import { Typography, Box, Stack } from "@mui/material";

const HeaderTitle = ({ title, subtitle, variant, component, imgPosition, sx }) => {
  const responsiveness = { xs: "column-reverse", sm: "column-reverse", md: "row-reverse" };

  console.log(imgPosition);
  return (
    <Box
      data-testid="title-component"
      component={"section"}
      paddingBottom="3rem"
      textAlign="center"
      sx={sx ?? null}>
      <Stack
        paddingBottom=".5rem"
        direction={imgPosition}
        alignItems="center"
        justifyContent="center">
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

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  variant: PropTypes.string,
  component: PropTypes.string,
  imgPosition: PropTypes.string,
  sx: PropTypes.object,
};

export default HeaderTitle;
