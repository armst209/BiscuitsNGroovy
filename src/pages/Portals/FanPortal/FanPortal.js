import { React, useEffect, useState } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import FPHomepage from "../../../components/FanPortal/FPHomePage/FPHomePage";
import FPProfile from "../../../components/FanPortal/FPProfile/FPProfile";
import "./FanPortalStyles.scss";
import FPNavbar from "../../../components/FanPortal/FPNavbar/FPNavbar";
// import ProtectedRoute from "../../../ProtectedRoute";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

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
    if (offset > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const abortCont = new AbortController();
    window.addEventListener("scroll", handleScroll, {
      signal: abortCont.signal,
    });
    return () => abortCont.abort();
  }, []);

  let FPnavbarClasses = ["nav"];
  if (scrolled) {
    FPnavbarClasses.push("scrolled");
  }

  return (
    <section id="fan-portal">
      <Navbar />
      <div className="fanportal-content">
        <nav className={FPnavbarClasses.join(" ")}>
          <FPNavbar handleLogout={handleLogout} />
        </nav>

        <Switch>
          <Route path="/fanportal" component={FPHomepage} />
          <Route path="/fanportal/profile" component={FPProfile} />
        </Switch>
      </div>
      <Footer />
    </section>
  );
}

export default withRouter(FanPortal);
