import { Box } from "@mui/material";

const Image = ({ width, height, title, alt, src, sx, loading }) => {
  return (
    <Box
      component="img"
      sx={sx}
      alt={alt}
      src={src}
      title={title}
      loading={loading}
      width={width}
      height={height}
    />
  );
};

export default Image;
