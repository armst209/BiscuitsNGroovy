import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";

const rotate360 = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotation = styled("div")({
  animation: `${rotate360} 2s infinite linear`,
});

const Rotate360 = ({ children }) => {
  return <Rotation>{children}</Rotation>;
};

export default Rotate360;
