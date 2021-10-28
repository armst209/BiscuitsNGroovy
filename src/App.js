import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import NotHomeNavigation from "./components/Navbars/NotHomeNavigation/NotHomeNavigation";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
//router
// import routes from "./Routes/config.tsx";
// import Router from "./Routes/Router.tsx";

//for social media icons
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import OldRoutes from "./Routes/OldRoutes";

function App(props) {
  const [loginPopup, showLoginPopup] = useState(false);
  const [signUpPopup, showSignUpPopup] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [stripeLoader, setStripeLoader] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        {loginPopup && (
          <Login
            loginPopup={loginPopup}
            showLoginPopup={showLoginPopup}
            signUpPopup={signUpPopup}
            showSignUpPopup={showSignUpPopup}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        )}
        {signUpPopup && (
          <SignUp
            loginPopup={loginPopup}
            showLoginPopup={showLoginPopup}
            signUpPopup={signUpPopup}
            showSignUpPopup={showSignUpPopup}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        )}
      </AnimatePresence>

      <NotHomeNavigation
        loginPopup={loginPopup}
        showLoginPopup={showLoginPopup}
        signUpPopup={signUpPopup}
        showSignUpPopup={showSignUpPopup}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        stripeLoader={stripeLoader}
        setStripeLoader={setStripeLoader}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <OldRoutes
        loginPopup={loginPopup}
        showLoginPopup={showLoginPopup}
        signUpPopup={signUpPopup}
        showSignUpPopup={showSignUpPopup}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        stripeLoader={stripeLoader}
        setStripeLoader={setStripeLoader}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* <Router routes={routes} /> */}

      <Footer />
      {stripeLoader}
    </div>
  );
}

export default App;
