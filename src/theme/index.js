import { createTheme } from "@mui/material";

import components from "./components";
import overrides from "./overrides";
import typography from "./typography";
import palette from "./palette";
import animations from "./animations";

const theme = createTheme({
  components,
  typography,
  overrides,
  palette,
  animations,
});

console.log(theme);
export default theme;
