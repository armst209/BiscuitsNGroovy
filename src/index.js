//react imports
import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

//component imports
import App from "./App";

//redux imports
import store from "./common/redux/index";
import { Provider as ReduxProvider } from "react-redux";

//material ui theme
import { ThemeProvider } from "@mui/material/styles";
import bngTheme from "./theme";

//alerts-toasts-notifications
import AlertProvider from "./common/UI/Alerts/AlertProvider";

//react helmet
import { HelmetProvider } from "react-helmet-async";

// Google Analytics imports
import ReactGA from "react-ga";

//react query
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

console.log(store.getState());

// -------Start of Google Analytics - DON'T REMOVE-------
// const gaTrackingId = "UA-211766799-1";
// ReactGA.initialize(gaTrackingId, { debug: true, testMode: true });
// -------End of Google Analytics - DON'T REMOVE-------

ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={bngTheme}>
        <AlertProvider>
          <QueryClientProvider client={queryClient}>
            <HelmetProvider>
              <Router>
                <App />
              </Router>
            </HelmetProvider>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryClientProvider>
        </AlertProvider>
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,

  document.getElementById("root"),
);
