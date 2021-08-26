import { React, useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import FPHomepage from "../../../../components/FanPortal/FPHomePage/FPHomePage";
import "./FanPortalStyles.scss";
import Footer from "../../../../components/Footer/Footer";
import NotHomeNavigation from "../../../../components/Navbars/NotHomeNavigation/NotHomeNavigation";
import spotlight_left from "../../../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_right from "../../../../assets/images/spotlight_outline_right_yellow.svg";
import env from "react-dotenv";

function FanPortal({
  loginPopup,
  showLoginPopup,
  showSignUpPopup,
  signUpPopup,
}) {
  //Props are passing down the showAlbumDetails function/hook to FPHomepage & AlbumPreview as setTrigger

  const [showAlbumDetails] = useState(false);
  const [portalUserName, setPortalUserName] = useState("YOUR");

  useEffect(() => {
    const baseURL = env.BACKEND_URL;
    const token = localStorage.getItem("token");

    axios({
      method: "get",
      url: `${baseURL}/users/me`,
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => {
        setPortalUserName(res.data.user.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="fan-portal">
      <NotHomeNavigation
        loginPopup={loginPopup}
        signUpPopup={signUpPopup}
        showLoginPopup={showLoginPopup}
        showSignUpPopup={showSignUpPopup}
      />
      <div className="portal-title">
        <h1>
          <img
            className="spotlight-left"
            src={spotlight_left}
            alt="spotlight"
          />
          <img
            className="spotlight-right"
            src={spotlight_right}
            alt="spotlight"
          />
          {/* adds user's username to title text */}
          {portalUserName}'s Collection
        </h1>
      </div>
      <FPHomepage setTrigger={showAlbumDetails} />
      <Footer />
    </section>
  );
}

export default withRouter(FanPortal);
