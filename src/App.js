import React from "react";
import "./App.css";
//for social media icons
import "../node_modules/@fortawesome/fontawesome-free/js/all";
//import axios from "axios";
import { Suspense, lazy, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NotHomeNavigation from "./components/Navbars/NotHomeNavigation/NotHomeNavigation";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import { AnimatePresence } from "framer-motion";

const TestHomepage = lazy(() => import("./pages/Homepage/TestHomepage"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const About = lazy(() => import("./pages/About/About"));
const Artists = lazy(() => import("./pages/Artists/Artists"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const PasswordRecovery = lazy(() =>
  import("./pages/PasswordRecovery/PasswordRecovery.js")
);

const SuccessfulSignUp = lazy(() =>
  import("./pages/SuccessfulSignUp/SuccessfulSignUp")
);
const TermsOfService = lazy(() =>
  import("./pages/TermsOfService/TermsOfService")
);
const PrivacyPolicy = lazy(() =>
  import("./pages/TermsOfService/Terms/PrivacyPolicy/PrivacyPolicy")
);
const PurchaseOfMusic = lazy(() =>
  import("./pages/TermsOfService/Terms/PurchaseOfMusic")
);
const Subscriber = lazy(() =>
  import("./pages/TermsOfService/Terms/Subscriber")
);
const NFTTerms = lazy(() => import("./pages/TermsOfService/Terms/NFTTerms"));

const FanPortalHome = lazy(() =>
  import("./pages/Portals/FanPortal/Homepage/FanPortal")
);

const Checkout = lazy(() => import("./pages/Payment/Checkout"));
const SuccessfulPurchase = lazy(() =>
  import("./components/SuccessfulPurchase/SuccessBuy")
);
const SpecialReleases = lazy(() =>
  import(
    "./components/FanPortal/FPHomePage/Sections/SpecialReleases/SpecialReleases"
  )
);

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
        <Switch>
          {/* Password Recovery Routes */}

          <Route path="/password-recovery">
            <PasswordRecovery />
          </Route>
          <Route
            exact={true}
            path="/home"
            render={(props) => (
              <TestHomepage
                {...props}
                loginPopup={loginPopup}
                showLoginPopup={showLoginPopup}
                signUpPopup={signUpPopup}
                showSignUpPopup={showSignUpPopup}
                showMobileNav={showMobileNav}
                setShowMobileNav={setShowMobileNav}
                stripeLoader={stripeLoader}
                setStripeLoader={setStripeLoader}
              />
            )}
          />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route
            exact={true}
            path="/about"
            render={(props) => <About {...props} />}
          />
          <Route
            exact={true}
            path="/faq"
            render={(props) => (
              <FAQ
                {...props}
                loginPopup={loginPopup}
                showLoginPopup={showLoginPopup}
                signUpPopup={signUpPopup}
                showSignUpPopup={showSignUpPopup}
              />
            )}
          />
          <Route
            exact={true}
            path="/artists"
            render={(props) => (
              <Artists
                {...props}
                loginPopup={loginPopup}
                showLoginPopup={showLoginPopup}
                signUpPopup={signUpPopup}
                showSignUpPopup={showSignUpPopup}
              />
            )}
          />

          <ProtectedRoute
            exact={true}
            path="/collection"
            render={(props) => (
              <FanPortalHome
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />

          <ProtectedRoute
            exact={true}
            path="/purchase-success"
            render={(props) => <SuccessfulPurchase {...props} />}
          />
          <ProtectedRoute
            exact={true}
            path="/account-creation-success"
            render={(props) => (
              <SuccessfulSignUp
                {...props}
                loginPopup={loginPopup}
                showLoginPopup={showLoginPopup}
                signUpPopup={signUpPopup}
                showSignUpPopup={showSignUpPopup}
              />
            )}
          />
          <ProtectedRoute
            exact={true}
            path="/portal/checkout"
            component={Checkout}
          />
          {/* Special Releases Route */}
          <ProtectedRoute
            exact={true}
            path="/special-release"
            render={() => <SpecialReleases />}
          />
          {/* Terms of Use & Privacy Policy Components Render */}

          <Route
            exact={true}
            path="/privacy-terms-of-use"
            render={() => <TermsOfService />}
          />
          <Route
            exact={true}
            path="/privacy-policy"
            render={() => <PrivacyPolicy />}
          />
          <Route
            exact={true}
            path="/terms-of-service"
            render={() => <Subscriber />}
          />
          <Route
            exact={true}
            path="/music-purchase-terms"
            render={() => <PurchaseOfMusic />}
          />

          <Route exact={true} path="/nft-terms" render={() => <NFTTerms />} />

          {/* Not Found Component*/}
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Suspense>
      <Footer />
      {stripeLoader}
    </div>
  );
}

export default App;
