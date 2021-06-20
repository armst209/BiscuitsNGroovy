import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import React, { Suspense, lazy, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import AlbumPopup from "./components/AlbumPopup";
import AlbumPreview from "./components/AlbumPreview/AlbumPreview";
import Login from "./components/Login/Login";
const Home = lazy(() => import("./pages/Homepage/Homepage"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const About = lazy(() => import("./pages/About/About"));
const Artists = lazy(() => import("./pages/Artists/Artists"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
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
  return (
    <div className="App">
      <Login trigger={loginPopup} setTrigger={showLoginPopup} />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            exact
            path="/home"
            render={(props) => <Home {...props} setTrigger={showLoginPopup} />}
          />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route
            path="/about"
            render={(props) => <About {...props} setTrigger={showLoginPopup} />}
          />
          <Route
            path="/faq"
            render={(props) => <FAQ {...props} setTrigger={showLoginPopup} />}
          />
          <Route
            path="/artists"
            render={(props) => (
              <Artists {...props} setTrigger={showLoginPopup} />
            )}
          />

          <Route path="/auth/register" component={SignUp} />
          <Route path="/album" component={AlbumPreview} />
          <ProtectedRoute
            exact={true}
            path="/fanportal"
            component={FanPortalHome}
          />
          <ProtectedRoute
            exact={true}
            path="/fanportal/profile"
            component={FanPortalProfile}
          />
          <ProtectedRoute
            exact={true}
            path="/fanportal/checkout"
            component={Checkout}
          />
          <ProtectedRoute
            exact={true}
            path="/fanportal/popup"
            component={AlbumPopup}
          />
          {/* Route for Stripe Cancellation */}
          {/* <ProtectedRoute
            exact={true}
            path="/cancel"
            component={}
          /> */}
          <Route path="*" component={NotFound} />
          {/* <ProtectedRoute component={FanPortal} /> */}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
