import { React, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import SpecialReleaseRoute from "./SpecialReleaseRoute";
import UnaccessibleWithTokenRoute from "./UnaccessibleWithTokenRoute";

//Lazy loaded components
const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const FAQ = lazy(() => import("../pages/FAQ/FAQ"));
const About = lazy(() => import("../pages/About/About"));
const Artists = lazy(() => import("../pages/Artists/Artists"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const PasswordRecovery = lazy(() =>
  import("../pages/PasswordRecovery/PasswordRecovery.js")
);

const SuccessfulSignUp = lazy(() =>
  import("../pages/SuccessfulSignUp/SuccessfulSignUp")
);
const TermsOfService = lazy(() =>
  import("../pages/TermsOfService/TermsOfService")
);
const PrivacyPolicy = lazy(() =>
  import("../pages/TermsOfService/Terms/PrivacyPolicy/PrivacyPolicy")
);
const PurchaseOfMusic = lazy(() =>
  import("../pages/TermsOfService/Terms/PurchaseOfMusic")
);
const Subscriber = lazy(() =>
  import("../pages/TermsOfService/Terms/Subscriber")
);
const NFTTerms = lazy(() => import("../pages/TermsOfService/Terms/NFTTerms"));

const FanPortalHome = lazy(() =>
  import("../pages/Portals/FanPortal/Homepage/FanPortal")
);

const Checkout = lazy(() => import("../pages/Payment/Checkout"));
const SuccessfulPurchase = lazy(() =>
  import("../components/SuccessfulPurchase/SuccessBuy")
);
const SpecialReleases = lazy(() =>
  import(
    "../components/FanPortal/FPHomePage/Sections/SpecialReleases/SpecialReleases"
  )
);
const SignUpNonPopUp = lazy(() =>
  import("../pages/SignUpNonPopUp/SignUpNonPopUp")
);

function Routes(props) {
  let token = localStorage.getItem("token");
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route
        exact={true}
        path="/home"
        render={() => (
          <Homepage
            loginPopup={props.loginPopup}
            showLoginPopup={props.showLoginPopup}
            signUpPopup={props.signUpPopup}
            showSignUpPopup={props.showSignUpPopup}
            showMobileNav={props.showMobileNav}
            setShowMobileNav={props.setShowMobileNav}
            stripeLoader={props.stripeLoader}
            setStripeLoader={props.setStripeLoader}
          />
        )}
      />
      <Route
        exact={true}
        path="/about"
        render={(props) => <About {...props} />}
      />
      <Route exact={true} path="/faq" render={(props) => <FAQ {...props} />} />
      <Route
        exact={true}
        path="/artists"
        render={(props) => <Artists {...props} />}
      />
      {/* Protected Routes */}
      <ProtectedRoute
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
      <ProtectedRoute
        exact={true}
        path="/portal/checkout"
        component={Checkout}
      />

      {/* Special Releases Route */}
      {/* <SpecialReleaseRoute
        exact={true}
        path="/special-release"
        render={() => (
          <SpecialReleases
            loginPopup={props.loginPopup}
            showLoginPopup={props.showLoginPopup}
            signUpPopup={props.signUpPopup}
            showSignUpPopup={props.showSignUpPopup}
          />
        )}
      />
      <Route
        exact={true}
        path="/release-signup"
        render={() => (
          <SignUpNonPopUp
            loginPopup={props.loginPopup}
            showLoginPopup={props.showLoginPopup}
            signUpPopup={props.signUpPopup}
            showSignUpPopup={props.showSignUpPopup}
          />
        )}
      /> */}

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
      {/* Password Recovery Routes */}

      {/* <Route
        exact={true}
        path="/password-recovery"
        render={(props) => (
          <PasswordRecovery
            {...props}
            // loginPopup={props.loginPopup}
            // showLoginPopup={props.showLoginPopup}
            // signUpPopup={props.signUpPopup}
            // showSignUpPopup={props.showSignUpPopup}
          />
        )}
      /> */}

      {/* Not Found Component*/}
      <Route path="/404" component={NotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
}

export default Routes;
