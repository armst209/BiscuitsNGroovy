import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import FanPortalNav from "../../../components/FanPortal/FPNavbar/FPNavbar";
import FPHomepage from "../../../components/FanPortal/FPHomePage/FPHomePage";
import FPProfile from "../../../components/FanPortal/FPProfile/FPProfile";
import "./FanPortalStyles.scss";
import Navbar from "../../../components/Navbar/Navbar";

function FanPortal() {
  return (
    <section id="fan-portal">
      <Navbar />
      <FanPortalNav />
      <Switch>
        <Route exact path="/fanportal/home" component={FPHomepage} />
        <Route exact path="/fanportal">
          <Redirect to="/fanportal/home" />
        </Route>
        <Route exact path="/fanportal/profile" component={FPProfile} />
      </Switch>
    </section>
  );
}

export default FanPortal;
