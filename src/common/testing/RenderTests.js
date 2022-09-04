//react imports
import { StrictMode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

//component imports
import App from "./App";

//redux imports
import store from "./common/redux/index";
import { Provider as ReduxProvider } from "react-redux";

//material ui theme
import { ThemeProvider } from "@mui/material/styles";
import bngTheme from "./theme";

//react helmet
import { HelmetProvider } from "react-helmet-async";

//react query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Loading from "@/common/components/Loading/Loading";

export const RenderTests = ({ children }) => {
  return (
    <StrictMode>
      <ReduxProvider store={store}>
        <ThemeProvider theme={bngTheme}>
          {/* <AlertProvider> */}
          <QueryClientProvider client={queryClient}>
            <HelmetProvider>
              <BrowserRouter>
                <Suspense fallback={<Loading />}>
                  <App />
                  {children}
                </Suspense>
              </BrowserRouter>
            </HelmetProvider>
            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
          </QueryClientProvider>
          {/* </AlertProvider> */}
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  );
};

export { RenderTests };
