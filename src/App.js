import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import MainNavigation from "./components/Navbars/MainNavigation/MainNavigation";
import Footer from "./components/Footer/Footer";

//router
import routes from "./Routes/config.tsx";
import Router from "./Routes/Router.tsx";

//for social media icons
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import OldRoutes from "./Routes/OldRoutes";

function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="App">
      <MainNavigation
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {/* <OldRoutes
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      /> */}

      <Router routes={routes} />

      <Footer />
    </div>
  );
}

export default App;
