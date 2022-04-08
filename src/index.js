//react imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//component imports
import App from "./App";
import ScrollToTop from "./Routes/ScrollToTop";

//redux imports
import store from "./common/redux/index";
import { Provider as ReduxProvider } from "react-redux";

//material ui theme
import { ThemeProvider } from "@mui/material/styles";
import bngTheme from "./theme";
import AlertProvider from "./common/components/UI/Alerts/AlertProvider";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <ThemeProvider theme={bngTheme}>
          <AlertProvider>
            <ScrollToTop />
            <App />
          </AlertProvider>
        </ThemeProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,

  document.getElementById("root"),
);
