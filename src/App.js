// -------Start of Google Analytics - DON'T REMOVE-------
import ReactGA from "react-ga";
// -------End of Google Analytics - DON'T REMOVE-------

//component imports
import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";

//Routes & Router
import routes from "./Routes/config.tsx";
import Router from "./Routes/Router.tsx";

//styles
import "./_global.css";
import "@fortawesome/fontawesome-free/js/all"; //for social media icons

const App = () => {
  // -------Start of Google Analytics - DON'T REMOVE-------
  const gaTrackingId = "UA-211766799-1";
  ReactGA.initialize(gaTrackingId);
  ReactGA.pageview("/");
  // -------End of Google Analytics - DON'T REMOVE-------

  return (
    <div className="App">
      <MainHeader />
      <Router routes={routes} />
      <Footer />
    </div>
  );
};

export default App;
