import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import ProtectedRoute from "./ProtectedRoute";
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
          <Route path="/loading" component={Loading} />
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
          <Route path="*" component={NotFound} />
          {/* <ProtectedRoute component={FanPortal} /> */}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
