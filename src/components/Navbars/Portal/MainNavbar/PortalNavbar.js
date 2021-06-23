import React, { useState, useEffect } from "react";
// import { Link, Redirect } from "react-router-dom";
import "./PortalNavbarStyles.scss";
// import logo from "../../../../assets/images/newlogo.svg";
import FPNavbar from "../SecondaryNavbars/FPNavbar";
import FPNavbarMobile from "../SecondaryNavbars/FPNavbarMobile";
import MainNavigation from "../../MainNavigation/MainNavigation";

function PortalNavbar(props) {
  console.log(props);
  const [scrolled, setScrolled] = useState(false);

  //LOGOUT START
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
  };
  //LOGOUT END

  //NAVBAR SCROLL
  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled-portal");
  }

  useEffect(() => {
    //NAVBAR SCROLL - Once page reloads, prevents navbar from changing position and causing view errors
    const abortCont = new AbortController();
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, {
      signal: abortCont.signal,
    });

    return () => abortCont.abort();
  }, []);

  return (
    <div className={navbarClasses.join(" ")}>
      <div>
        <MainNavigation showLoginPopUp={props.showLoginPopup} />
        <FPNavbar handleLogout={handleLogout} />
        <FPNavbarMobile handleLogout={handleLogout} />
      </div>
    </div>
  );
}

export default PortalNavbar;
