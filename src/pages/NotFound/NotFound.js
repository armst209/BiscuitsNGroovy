import React from "react";
import Footer from "../../components/Footer/Footer";
import NotHomeNavigation from "../../components/Navbars/NotHomeNavigation/NotHomeNavigation";
import magnifyingGlass from "../../assets/images/search_white.svg";
import "./NotFoundStyles.scss";

function NotFound({
  loginPopup,
  showLoginPopup,
  showSignUpPopup,
  signUpPopup,
}) {
  return (
    <div id="not-found">
      <NotHomeNavigation
        loginPopup={loginPopup}
        signUpPopup={signUpPopup}
        showLoginPopup={showLoginPopup}
        showSignUpPopup={showSignUpPopup}
      />
      <div className="not-found-content">
        <h1>Sorry, we can't find the page you were looking for...</h1>
        <img src={magnifyingGlass} alt="magnifying glass" />
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
