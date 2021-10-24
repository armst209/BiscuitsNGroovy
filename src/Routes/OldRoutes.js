import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Loading from "../components/Loading/Loading";
//Lazy loaded components
const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const About = lazy(() => import("../pages/About/About"));
const FAQ = lazy(() => import("../pages/FAQ/FAQ"));
const Artists = lazy(() => import("../pages/Artists/Artists"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Events = lazy(() => import("../pages/Events/Events"));

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

const CollectionHome = lazy(() => import("../pages/Collection/Collection"));

const SuccessfulPurchase = lazy(() =>
  import("../components/SuccessfulPurchase/SuccessBuy")
);

function OldRoutes(props) {
  return (
    <>
      <Suspense fallback={<Loading />}>
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
          <Route
            exact={true}
            path="/events"
            render={(props) => <Events {...props} />}
          />
          {/* Protected Routes */}
          <ProtectedRoute
            exact={true}
            path="/collection"
            render={() => <CollectionHome {...props} />}
          />
          <ProtectedRoute
            exact={true}
            path="/purchase-success"
            render={(props) => <SuccessfulPurchase {...props} />}
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
            path="/subscriber-terms-of-service"
            render={() => <Subscriber />}
          />
          <Route
            exact={true}
            path="/music-purchase-terms"
            render={() => <PurchaseOfMusic />}
          />
          <Route exact={true} path="/nft-terms" render={() => <NFTTerms />} />

          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Suspense>
    </>
  );
}

export default OldRoutes;
