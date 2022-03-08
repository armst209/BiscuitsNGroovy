// Google Analytics imports
import ReactGA from "react-ga";

//component imports
import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";

//Routes & Router
import routes from "./Routes/config.tsx";
import Router from "./Routes/Router.tsx";

//styles
import "./_global.css";
import "@fortawesome/fontawesome-free/js/all"; //for social media icons

//react helmet
import { HelmetProvider, Helmet } from "react-helmet-async";

const App = () => {
  // -------Start of Google Analytics - DON'T REMOVE-------
  const gaTrackingId = "UA-211766799-1";
  ReactGA.initialize(gaTrackingId, { debug: false, testMode: false });
  // -------End of Google Analytics - DON'T REMOVE-------

  return (
    <HelmetProvider>
      <main className="App">
        <Helmet prioritizeSeoTags>
          <title>Biscuits n Groovy</title>
          <meta name="description" content="Stream and collect exclusive biscuits from your favorite artists. Prove your fandom" />
        </Helmet>
        <MainHeader />
        <Router routes={routes} />
        <Footer />
      </main>
    </HelmetProvider>
  );
};

export default App;
