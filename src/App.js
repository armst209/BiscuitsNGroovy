import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import React, { Suspense, lazy, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import AlbumPopup from "./components/AlbumPopup";
import AlbumPreview from "./components/AlbumPreview/AlbumPreview";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
const Home = lazy(() => import("./pages/Homepage/Homepage"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const About = lazy(() => import("./pages/About/About"));
const Artists = lazy(() => import("./pages/Artists/Artists"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
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
            exact
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
            path="/artists"
            render={(props) => (
              <Artists
                {...props}
                setTrigger={showLoginPopup}
                showSignUp={showSignUpPopup}
              />
            )}
          />
          <Route path="/album" component={AlbumPreview} />
          <ProtectedRoute
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
          <ProtectedRoute exact={true} path="/fanportal/profile" />
          <ProtectedRoute
            exact={true}
            path="/fanportal/checkout"
            component={Checkout}
          />
          <Route path="/fanportal/popup" component={AlbumPopup} />
          <Route path="/music" component={MusicPlayer} />
          {/* Route for Stripe Cancellation */}
          {/* <ProtectedRoute
            exact={true}
            path="/cancel"
            component={}
          /> */}
          <Route
            path="*"
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
