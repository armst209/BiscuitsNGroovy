import { React, useLayoutEffect, useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import FPHomepage from "../../../components/FanPortal/FPHomePage/FPHomePage";
import FPProfile from "../../../components/FanPortal/FPProfile/FPProfile";
import "./FanPortalStyles.scss";
import Navbar from "../../../components/Navbar/Navbar";
import FPNavbar from "../../../components/FanPortal/FPNavbar/FPNavbar";

function FanPortal(props) {
  const [scrolled, setScrolled] = useState(false);

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
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let FPnavbarClasses = ["nav"];
  if (scrolled) {
    FPnavbarClasses.push("scrolled");
  }

  return (
    <section id="fan-portal">
      <nav className={FPnavbarClasses.join(" ")}>
        <Navbar />
        <FPNavbar />
      </nav>

      <Switch>
        <Route exact path="/fanportal/home" component={FPHomepage} />
        <Route exact path="/fanportal/profile" component={FPProfile} />
      </Switch>
    </section>
  );
}

export default withRouter(FanPortal);
