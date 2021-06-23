import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import magnifyingGlass from "../../assets/images/search_white.svg";
import "./NotFoundStyles.scss";

function NotFound(props) {
  return (
    <div id="not-found">
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
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
