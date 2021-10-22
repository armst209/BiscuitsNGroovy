import { useState } from "react";
//router
import routes from "./Routes/config.tsx";
import Router from "./Routes/Router.tsx";
import "./App.css";
// import ROUTES, { RenderRoutes } from "./Routes/Routes";
//for social media icons
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NotHomeNavigation from "./components/Navbars/NotHomeNavigation/NotHomeNavigation";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";

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
      {/* <Suspense fallback={<Loading />}> */}
      {/* <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route
            exact={true}
            path="/home"
            render={() => (
              <Homepage
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
          <Route
            exact={true}
            path="/about"
            render={(props) => <About {...props} />}
          />
          <Route
            exact={true}
            path="/faq"
            render={(props) => <FAQ {...props} />}
          />
          <Route
            exact={true}
            path="/artists"
            render={(props) => <Artists {...props} />}
          />
          {/* Protected Routes */}
      {/* <ProtectedRoute
            exact={true}
            path="/collection"
            render={() => <FanPortalHome {...props} />}
          />
          <ProtectedRoute
            exact={true}
            path="/purchase-success"
            render={(props) => <SuccessfulPurchase {...props} />}
          />
          <ProtectedRoute
            exact={true}
            path="/account-creation-success"
            render={(props) => <SuccessfulSignUp {...props} />}
          />

          {/* Terms of Use & Privacy Policy Components Render */}
      {/* <Route
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
            path="/subscriber-terms-of-service"
            render={() => <Subscriber />}
          />
          <Route
            exact={true}
            path="/music-purchase-terms"
            render={() => <PurchaseOfMusic />}
          />
          <Route exact={true} path="/nft-terms" render={() => <NFTTerms />} />
          <Route exact={true} path="/events" render={() => <Events />} />

          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>  */}
      {/* </Suspense> */}
      <Router
        routes={routes}
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
      <Footer />
      {stripeLoader}
    </div>
  );
}

export default App;
