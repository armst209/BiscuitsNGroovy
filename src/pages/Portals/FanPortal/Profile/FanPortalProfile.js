import React from "react";
import "./FanPortalProfileStyles.scss";
import FPProfile from "../../../../components/FanPortal/FPProfile/FPProfile";
import Footer from "../../../../components/Footer/Footer";
import PortalNavbar from "../../../../components/Navbars/Portal/MainNavbar/PortalNavbar";

function FanPortalProfile() {
  return (
    <div className="fp-profile-wrapper">
      <PortalNavbar />
      <FPProfile />
      <Footer />
    </div>
  );
}

export default FanPortalProfile;
