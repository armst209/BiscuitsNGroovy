import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
const Home = lazy(() => import("./pages/Homepage"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About/About"));
const Artists = lazy(() => import("./pages/Artists"));
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const FanPortal = lazy(() => import("./pages/Portals/FanPortal/FanPortal"));

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
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
          <ProtectedRoute
            exact={true}
            path="/fanportal"
            component={FanPortal}
          />
          <Route path="*" component={NotFound} />
          {/* <ProtectedRoute component={FanPortal} /> */}
        </Switch>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
