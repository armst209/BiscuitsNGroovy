import { React } from "react";
import { withRouter } from "react-router-dom";
import FPHomepage from "../../../../components/FanPortal/FPHomePage/FPHomePage";
import "./FanPortalStyles.scss";
import Footer from "../../../../components/Footer/Footer";
import PortalNavbar from "../../../../components/Navbars/Portal/MainNavbar/PortalNavbar";

function FanPortal() {
  return (
    <section id="fan-portal">
      <PortalNavbar />
      <FPHomepage />
      <Footer />
    </section>
  );
}

export default withRouter(FanPortal);
