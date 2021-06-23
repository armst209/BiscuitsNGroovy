import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainNavigationStyles.scss";
import Logout from "../../../pages/Logout/Logout";
import logo from "../../../assets/images/newlogo.svg";
import user_image from "../../../assets/images/user_white.webp";
import arrow_down from "../../../assets/images/arrow-bottom.svg";

function HomepageNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const [xButton, setXButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [signUpClassName, setSignUpClassName] = useState("signup-link");
  const [passedProps] = useState(props);
  const [showDropDown, setShowDropDown] = useState(false);
  const [homeNavId, setHomeNavId] = useState("homepage-navigation");
  const [loggedOut, setLoggedOut] = useState(false);
  const isAuthenticated = localStorage.getItem("token");
  //Navbar scrolling
  const navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled-home");
  }
  //Function for close button in mobile navigation popup
  const closeNavigation = () => {
    setXButton(!xButton);
  };
  //LOGOUT Function
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setShowDropDown(false);
    setTimeout(() => {
      setLoggedOut(!loggedOut);
    }, 500);

    setTimeout(() => {
      window.location.replace("http://localhost:3000/home");
    }, 3000);
  };
  useEffect(() => {
    //Menu Dropdown Function
    const viewDropDown = () => {
      setShowDropDown(!showDropDown);
    };
    //Authentication Check - Displays "Logout" in navigation
    if (isAuthenticated) {
      setSignUpClassName("signup-no-display");
      setIsLoggedIn(
        <div className="user-container">
          <div className="user" onClick={viewDropDown}>
            <img src={user_image} alt="user" />
            <img className="arrow" src={arrow_down} alt="arrow" />
          </div>
        </div>
      );
    } else {
      setIsLoggedIn(
        <div onClick={() => passedProps.showLoginPopup(true)}>Login</div>
      );
    }

    const abortCont = new AbortController();
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setHomeNavId("homepage-navigation-scrolled");
        setScrolled(true);
      } else {
        setHomeNavId("homepage-navigation");
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, {
      signal: abortCont.signal,
    });

    return () => abortCont.abort();
  }, [isAuthenticated, passedProps, showDropDown]);

  return (
    <div id="scrolled-home-before" className={navbarClasses.join(" ")}>
      <header id={homeNavId}>
        <div className="nav-home-container">
          <nav className="nav-home">
            <div className="logo-home">
              <Link to="/home">
                <img className="bg-home" src={logo} alt="logo" />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="desktop-navlinks-home">
              <ul className="general-links-home">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
              <ul className="middle-links-home">
                <li>|</li>
              </ul>
              <ul className="login-links-home">
                <li>
                  <Link to="/artists">For Artists</Link>
                </li>
                <li>{isLoggedIn}</li>
                <li
                  className={signUpClassName}
                  onClick={() => props.showSignUpPopUp(true)}
                >
                  <button>Sign Up</button>
                </li>
                {/* <li>Modal</li> */}
              </ul>
            </div>

            {/* Hamburger */}
            <label htmlFor="check-home">
              <input type="checkbox" id="check-home" />
              <div className="menu-bars-home"></div>
              <div className="menu-bars-home"></div>
              <div className="menu-bars-home"></div>
              <p>MENU</p>
              {/* Mobile Navigation */}
              <aside className="mobile-nav-home">
                <div className="mobile-nav-header">
                  <img src={logo} alt="logo" />
                  <div onClick={closeNavigation}>X</div>
                </div>

                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li className="login-status-home">
                    <Link to="/fanportal">Your Portal</Link>
                  </li>
                  <li>
                    <Link to="/artists">Artists</Link>
                  </li>
                </ul>
              </aside>
            </label>
          </nav>
        </div>
        <div>
          {showDropDown ? (
            <div className="dropdown-content">
              <Link to="/fanportal">Your Portal</Link>
              <Link to="/fanportal/profile">Profile</Link>
              <Link>Settings</Link>
              <div className="logout-button" onClick={handleLogout}>
                Logout
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>{loggedOut ? <Logout /> : ""}</div>
      </header>
    </div>
  );
}

export default HomepageNavbar;
