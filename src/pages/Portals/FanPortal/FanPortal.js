import { React, useEffect, useState } from "react";
import { Switch, withRouter } from "react-router-dom";
import FPHomepage from "../../../components/FanPortal/FPHomePage/FPHomePage";
import FPProfile from "../../../components/FanPortal/FPProfile/FPProfile";
import "./FanPortalStyles.scss";
import FPNavbar from "../../../components/FanPortal/FPNavbar/FPNavbar";
import ProtectedRoute from "../../../ProtectedRoute";
import Navbar from "../../../components/Navbar/Navbar";

function FanPortal(props) {
  const [scrolled, setScrolled] = useState(false);

  //LOGOUT START
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    props.history.push("/login");
  };
  //LOGOUT END

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let FPnavbarClasses = ["nav"];
  if (scrolled) {
    FPnavbarClasses.push("scrolled");
  }

  return (
    <section id="fan-portal">
      <nav className={FPnavbarClasses.join(" ")}>
        <Navbar />
        <FPNavbar handleLogout={handleLogout} />
      </nav>

      <Switch>
        <ProtectedRoute path="/fanportal" component={FPHomepage} />
        <ProtectedRoute path="/fanportal/profile" component={FPProfile} />
      </Switch>
    </section>
  );
}

export default withRouter(FanPortal);
