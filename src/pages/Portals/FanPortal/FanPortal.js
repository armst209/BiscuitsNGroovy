import React from "react";
import { Switch, Route } from "react-router-dom";
// import FanPortalNav from "../../../components/FanPortal/FPNavbar/FPNavbar";
import FPHomepage from "../../../components/FanPortal/FPHomePage/FPHomePage";
import FPProfile from "../../../components/FanPortal/FPProfile/FPProfile";
import "./FanPortalStyles.scss";
import Navbar from "../../../components/Navbar/Navbar";

function FanPortal(props) {
  console.log(props);
  let token = localStorage.getItem("token");

  if (token) {
    console.log("is authenticated");
  } else {
    props.history.push("/login");
  }
  return (
    <section id="fan-portal">
      <Navbar />

      <Switch>
        <Route exact path="/fanportal/home" component={FPHomepage} />
        <Route exact path="/fanportal/profile" component={FPProfile} />
      </Switch>
    </section>
  );
}

export default FanPortal;
