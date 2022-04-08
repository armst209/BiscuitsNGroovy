// Google Analytics imports
import ReactGA from "react-ga";

//component imports
import Header from "./common/components/UI/MainLayout/Header/MainHeader";
import Footer from "./common/components/UI/MainLayout/Footer/Footer";

//Routes & Router
import routes from "./Routes/routeConfig.tsx";
import AllRoutes from "./Routes/Router.js";

//styles
import "./_global.css";
import "@fortawesome/fontawesome-free/js/all"; //for social media icons

//react helmet
import { HelmetProvider } from "react-helmet-async";

//redux
import store from "./common/redux";

//react query
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainLayout from "./common/components/UI/MainLayout/MainLayout";
const queryClient = new QueryClient();

const App = () => {
  // -------Start of Google Analytics - DON'T REMOVE-------
  // const gaTrackingId = "UA-211766799-1";
  // ReactGA.initialize(gaTrackingId, { debug: true, testMode: true });
  // -------End of Google Analytics - DON'T REMOVE-------

  console.log(store.getState());

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        {/* <main className="App">
          <Header />
          <AllRoutes routes={routes} />
          <Footer />
        </main> */}
        <MainLayout />
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
