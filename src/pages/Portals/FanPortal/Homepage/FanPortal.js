import { React, useState } from "react";
import { withRouter } from "react-router-dom";
import FPHomepage from "../../../../components/FanPortal/FPHomePage/FPHomePage";
import "./FanPortalStyles.scss";
import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbars/MainNavigation/MainNavigation";

function FanPortal(props) {
  //Props are passing down the showAlbumDetails function/hook to FPHomepage & AlbumPreview as setTrigger
  //Props are passing down the boolean albumDetails to AlbumPreview

  const [albumDetails, showAlbumDetails] = useState(false);
  return (
    <section id="fan-portal">
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
      />
      <FPHomepage setTrigger={showAlbumDetails} />
      {/* <ReleasePreview trigger={albumDetails} setTrigger={showAlbumDetails} /> */}
      <Footer />
    </section>
  );
}

export default withRouter(FanPortal);
