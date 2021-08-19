import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import React, { Suspense, lazy, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Loading from "./components/Loading/Loading";

//Importing Flow Configuration
import { config } from "@onflow/fcl";
import env from "react-dotenv";

//configure flow environment
config()
  .put("accessNode.api", env.REACT_APP_ACCESS_NODE) // Configure FCL's Access Node
  .put("challenge.handshake", env.REACT_APP_WALLET_DISCOVERY) // Configure FCL's Wallet Discovery mechanism
  .put("0xProfile", env.REACT_APP_CONTRACT_PROFILE); // Will let us use `0xProfile` in our Cadence

const Home = lazy(() => import("./pages/Homepage/Homepage"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const About = lazy(() => import("./pages/About/About"));
const Artists = lazy(() => import("./pages/Artists/Artists"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const TermsOfService = lazy(() =>
  import("./pages/TermsOfService/TermsOfService")
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
const FanPortalProfile = lazy(() =>
  import("./pages/Portals/FanPortal/Profile/FanPortalProfile.js")
);
const Checkout = lazy(() => import("./pages/Payment/Checkout"));

function App() {
  const [loginPopup, showLoginPopup] = useState(false);
  const [signUpPopup, showSignUpPopup] = useState(false);

  return (
    <div className="App">
      <Login
        trigger={loginPopup}
        setTrigger={showLoginPopup}
        showSignUp={showSignUpPopup}
      />

      <SignUp
        trigger={signUpPopup}
        setTrigger={showSignUpPopup}
        showLogIn={showLoginPopup}
      />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            exact={true}
            path="/home"
            render={(props) => (
              <Home
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route
            exact={true}
            path="/about"
            render={(props) => (
              <About
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          <Route
            exact={true}
            path="/faq"
            render={(props) => (
              <FAQ
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          <Route
            exact={true}
            path="/artists"
            render={(props) => (
              <Artists
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />

          <Route
            exact={true}
            path="/fanportal"
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
            path="/fanportal/profile"
            render={(props) => (
              <FanPortalProfile
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />

          <ProtectedRoute
            exact={true}
            path="/fanportal/checkout"
            component={Checkout}
          />
          <Route exact path="terms/subscriber" component={Subscriber} />
          {/* Terms of Service Components Render */}
          <Route
            exact={true}
            path="/terms-of-service/menu"
            render={(props) => (
              <TermsOfService
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          <Route
            exact={true}
            path="/terms-of-service/subscriber"
            render={(props) => (
              <Subscriber
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          <Route
            exact={true}
            path="/terms-of-service/music-purchase-terms"
            render={(props) => (
              <PurchaseOfMusic
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          <Route
            exact={true}
            path="/terms-of-service/nft-terms"
            render={(props) => (
              <NFTTerms
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          {/* Not Found Component Render */}
          <Route
            render={(props) => (
              <NotFound
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          {/* Route Testing */}

          {/* <Route path="/logout" component={Logout} /> */}
          {/* 
          <Route path="/carousel" component={Carousel} />
          <Route path="/music" component={MusicPlayer} />
          <Route path="/release-preview" component={ReleasePreview} />*/}
          {/* <Route path="/loading" component={Loading} /> */}
          {/* Route for Stripe Cancellation */}
          {/* <ProtectedRoute
            exact={true}
            path="/cancel"
            component={}
          /> */}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
