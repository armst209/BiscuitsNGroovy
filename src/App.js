import React from "react";
import "./App.css";
//for social media icons
import "../node_modules/@fortawesome/fontawesome-free/js/all";
//import axios from "axios";
import { Suspense, useState } from "react";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NotHomeNavigation from "./components/Navbars/NotHomeNavigation/NotHomeNavigation";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import { AnimatePresence } from "framer-motion";
import Routes from "./Routes/Routes";

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
      <Suspense fallback={<Loading />}>
        <Routes
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
      </Suspense>
      <Footer />
      {stripeLoader}
    </div>
  );
}

export default App;
