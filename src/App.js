// -------Start of Google Analytics - DON'T REMOVE-------
import ReactGA from "react-ga";
// -------End of Google Analytics - DON'T REMOVE-------
import MainNavigation from "./components/Navbars/MainNavigation/MainNavigation";
import Footer from "./components/Footer/Footer";
import "./App.css";

//router
import routes from "./Routes/config.tsx";
import Router from "./Routes/Router.tsx";

//for social media icons
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import ScrollWidget from "./Routes/ScrollWidget/ScrollWidget";

const App = () => {
  // -------Start of Google Analytics - DON'T REMOVE-------
  const gaTrackingId = "UA-211766799-1";
  ReactGA.initialize(gaTrackingId);
  ReactGA.pageview("/");
  // -------End of Google Analytics - DON'T REMOVE-------

  return (
    <div className="App">
      <MainNavigation />
      <Router routes={routes} />
      <Footer />
      <ScrollWidget />
    </div>
  );
};

export default App;
