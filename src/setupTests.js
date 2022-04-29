import "@testing-library/jest-dom";
import "./testServer";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "@mui/material";
import AlertProvider from "common/UI/Alerts/AlertProvider";
import { HelmetProvider } from "react-helmet-async";
import bngTheme from "theme";
import store from "common/redux";
import { Provider as ReduxProvider } from "react-redux";

export function renderWithClient(client, ui) {
  const { rerender, ...result } = render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi) =>
      rerender(<QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>),
  };
}
// export const renderWithProvidersAndRouter = (renderComponent, route) => {
//   const queryClient = new QueryClient();
//   let history = window.history;
//   if (route) {
//     history.pushState({}, "Test Page", route);
//   }

//   return {
//     ...render(
//       <ReduxProvider store={store}>
//         <ThemeProvider theme={bngTheme}>
//           <AlertProvider>
//             <QueryClientProvider client={queryClient}>
//               <HelmetProvider>
//                 <Router>
//                   <Route path={route} element={renderComponent} />
//                 </Router>
//               </HelmetProvider>
//             </QueryClientProvider>
//           </AlertProvider>
//         </ThemeProvider>
//       </ReduxProvider>,
//     ),
//     history,
//   };
// };
