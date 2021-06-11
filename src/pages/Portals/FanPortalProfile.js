import React from "react";
import FPProfile from "../../components/FanPortal/FPProfile/FPProfile";
import Footer from "../../components/Footer/Footer";
import PortalNavbar from "../../components/Navbar/PortalNavbar";

function FanPortalProfile() {
  return (
    <div>
      <PortalNavbar />
      <FPProfile />
      <Footer />
    </div>
  );
}

export default FanPortalProfile;
