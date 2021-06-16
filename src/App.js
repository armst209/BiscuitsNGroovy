import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import ProtectedRoute from "./ProtectedRoute";
import AlbumPopup from "./components/AlbumPopup";
import AlbumPreview from "./components/AlbumPreview/AlbumPreview";
const Home = lazy(() => import("./pages/Homepage/Homepage"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const About = lazy(() => import("./pages/About/About"));
const Artists = lazy(() => import("./pages/Artists/Artists"));
const Login = lazy(() => import("./pages/Login/Login"));
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
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/faq" component={FAQ} />
          <Route path="/artists" component={Artists} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
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
          <Route path="*" component={NotFound} />
          {/* <ProtectedRoute component={FanPortal} /> */}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
