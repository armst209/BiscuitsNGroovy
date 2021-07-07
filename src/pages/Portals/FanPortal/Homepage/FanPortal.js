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
      {/* <div className="portal-content-wrapper"> */}
      {/* <div className="side-nav-bar">
          <nav>
            <ul>
              <li>shfklasfjlsakdfasf</li>
              <li>dsgdsgsdgdsfgsd</li>
              <li>dsgdsgsdfgsdgsd</li>
              <li>shfklasfjlsakdfasf</li>
              <li>dsgdsgsdgdsfgsd</li>
              <li>dsgdsgsdfgsdgsd</li>
              <li>shfklasfjlsakdfasf</li>
              <li>dsgdsgsdgdsfgsd</li>
              <li>dsgdsgsdfgsdgsd</li>
            </ul>
          </nav>
        </div> */}

      {/* </div> */}

      {/* <div className="middle"> */}
      {/* <nav className="portal-nav">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav> */}

      {/* </div> */}

      {/* <ReleasePreview trigger={albumDetails} setTrigger={showAlbumDetails} /> */}
      <Footer />
    </section>
  );
}

export default withRouter(FanPortal);
