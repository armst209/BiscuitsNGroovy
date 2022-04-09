//styles
import "./_global.css";
import "@fortawesome/fontawesome-free/js/all"; //for social media icons

//react router
import { BrowserRouter as Router } from "react-router-dom";

//component imports
import ScrollToTop from "common/components/ScrollToTop/ScrollToTop";
import MainLayout from "./common/components/UI/MainLayout/MainLayout";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <MainLayout />;
      </Router>
    </>
  );
};

export default App;
