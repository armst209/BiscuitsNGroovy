import { Box } from "@mui/material"
import PropTypes from "prop-types"

const TitleHeader = ({title, subtitle}) => {
  return (
    <Box component={"section"}>
      <Box component={"h1"}>{title}</Box>
      <Box component={"h2"}>{subtitle}</Box>
    </Box>
  );
}

TitleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default TitleHeader