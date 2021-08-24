import React from "react";
import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import axios from "axios";
import { Suspense, lazy, useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import Login from "./components/Login/TestLogin";
import SignUp from "./components/SignUp/SignUp";
import Loading from "./components/Loading/Loading";
import Test from "../src/TESTS/FramerTest";

//Importing Flow Configuration
import { config } from "@onflow/fcl";
import env from "react-dotenv";
import MusicPlayer from "./components/MusicPlayer/MusicPlayerTest.tsx";
import { AnimatePresence } from "framer-motion";

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
const PasswordRecovery = lazy(() =>
  import("./pages/PasswordRecovery/PasswordRecoveryMain")
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
const FanPortalProfile = lazy(() =>
  import("./pages/Portals/FanPortal/Profile/FanPortalProfile.js")
);
const Checkout = lazy(() => import("./pages/Payment/Checkout"));
const SuccessfulPurchase = lazy(() =>
  import("./pages/SuccessfulPurchase/SuccessBuy")
);

function App() {
  const [loginPopup, showLoginPopup] = useState(false);
  const [signUpPopup, showSignUpPopup] = useState(false);
  const [urlUserName, setUrlUserName] = useState("");

  useEffect(() => {
    // Getting user's information
    const token = localStorage.getItem("token");
    const baseURL = env.BACKEND_URL;

    axios({
      method: "get",
      url: `${baseURL}/users/me`,
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => {
        token ? setUrlUserName(res.data.user.username) : setUrlUserName("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [urlUserName]);

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        {loginPopup && (
          <Login
            loginPopup={loginPopup}
            showLoginPopup={showLoginPopup}
            signUpPopup={signUpPopup}
            showSignUpPopup={showSignUpPopup}
          />
        )}
        {signUpPopup && (
          <SignUp
            loginPopup={loginPopup}
            showLoginPopup={showLoginPopup}
            signUpPopup={signUpPopup}
            showSignUpPopup={showSignUpPopup}
          />
        )}
      </AnimatePresence>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/musicplayer" component={MusicPlayer}></Route>
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

          <ProtectedRoute
            exact={true}
            path="/portal"
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
            path="/portal/profile"
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
            path="/portal/checkout"
            component={Checkout}
          />
          <ProtectedRoute
            exact={true}
            path="/purchase-success"
            render={(props) => (
              <SuccessfulPurchase
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />

          {/* Password Recovery Routes */}
          <Route
            exact={true}
            path="/password-recovery"
            render={(props) => (
              <PasswordRecovery
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          {/* Terms of Use & Privacy Policy Components Render */}

          <Route
            exact={true}
            path="/privacy-terms-of-use/privacy-policy"
            render={(props) => (
              <PrivacyPolicy
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          <Route
            exact={true}
            path="/privacy-terms-of-use/menu"
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
            path="/privacy-terms-of-use/terms-of-service/"
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
            path="/privacy-terms-of-use/music-purchase-terms"
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
            path="/privacy-terms-of-use/nft-terms"
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
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
