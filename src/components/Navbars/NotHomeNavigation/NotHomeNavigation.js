import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./NotHomeNavigation.scss";
import "react-responsive-modal/styles.css";
import Logout from "../../Logout/Logout";
import logo from "../../../assets/images/bng_header_test.svg";
import settings_icon from "../../../assets/images/settings.svg";
import user_image from "../../../assets/images/user.svg";
import arrow_down from "../../../assets/images/double-down-white.svg";
import logout_icon from "../../../assets/images/logout-yellow.svg";
import login_icon from "../../../assets/images/login_white.svg";
import collection_icon from "../../../assets/images/music-collection-yellow.svg";
import write from "../../../assets/images/write.svg";
import normal_vinyl from "../../../assets/images/compact-disc-yellow.svg";
import heart_vinyl from "../../../assets/images/vinyl_yellow.svg";
import spotlight_yellow_left from "../../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../../assets/images/spotlight_outline_right_yellow.svg";
import { motion } from "framer-motion";
import env from "react-dotenv";

function MainNavigation(props) {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [isLoggedInMobile, setIsLoggedInMobile] = useState("");
  const [signUpClassName, setSignUpClassName] = useState("signup-link");
  const [showDropDown, setShowDropDown] = useState(false);
  const [scrolledNavClass, setScrolledNavClass] = useState("");
  const [scrolledHamburgerClass, setScrolledHamburgerClass] =
    useState("settings-icon");
  const [menuTextClass, setMenuTextClass] = useState("menu-p-nothome");
  const [closeTextClass, setCloseTextClass] = useState("close-p-nothome");
  const [loggedOut, setLoggedOut] = useState(false);
  const [arrowMove, setArrowMove] = useState(false);
  const [userName, setUserName] = useState("Welcome");
  const [linkUserName, setLinkUserName] = useState("");
  const [rightSpotlight, setRightSpotlight] = useState("");
  const [leftSpotlight, setLeftSpotlight] = useState("");
  const [yellowBg, setYellowBg] = useState("");

  const isAuthenticated = localStorage.getItem("token");

  //LOGOUT Function
  const handleLogout = (e) => {
    e.preventDefault();
    setShowDropDown(false);

    setTimeout(() => {
      setLoggedOut(!loggedOut);
      localStorage.clear();
    }, 200);

    setTimeout(() => {
      window.location.replace(env.FRONTEND_URL + "/home");
    }, 1000);
  };

  useEffect(() => {
    // Getting user's information
    const token = localStorage.getItem("token");
    const baseURL = env.BACKEND_URL;
    token
      ? axios({
          method: "get",
          url: `${baseURL}/users/me`,
          headers: {
            "x-access-token": token,
          },
        })
          .then((res) => {
            setUserName(
              <motion.img
                animate={{
                  rotate: 360,
                  transition: {
                    ease: "linear",
                    duration: 2,
                    repeat: Infinity,
                  },
                }}
                width="50px"
                src={heart_vinyl}
                alt="record"
              />
            );
          })
          .catch((err) => {
            console.log(err);
          })
      : setUserName(<img src={normal_vinyl} width="50px" alt="record" />);
    setLinkUserName("");

    //Menu Dropdown Function
    const viewDropDown = () => {
      setShowDropDown(!showDropDown);
      setArrowMove(!arrowMove);
    };
    //Authentication Check - Displays "Logout" in navigation
    if (isAuthenticated) {
      setSignUpClassName("signup-no-display-nothome");
      setIsLoggedIn(
        <div className="user-container-nothome">
          <div className="user-nothome" onClick={viewDropDown}>
            <img src={user_image} alt="user" />
            <img
              className={`arrow-nothome ${
                arrowMove ? "arrow-360-nothome" : ""
              }`}
              src={arrow_down}
              alt="arrow"
            />
          </div>
        </div>
      );
      //LoggedIn hook for mobile Login button
      setIsLoggedInMobile(
        <div className="user-container-nothome">
          <div className="user-nothome" onClick={viewDropDown}>
            <img src={user_image} alt="user" />
            <img
              className={`arrow-nothome ${
                arrowMove ? "arrow-360-nothome" : ""
              }`}
              src={arrow_down}
              alt="arrow"
            />
          </div>
        </div>
      );
    } else {
      setIsLoggedIn(
        <NavLink
          Link
          to="#"
          onClick={() => props.showLoginPopup(!props.loginPopup)}
        >
          Login
        </NavLink>
      );

      setIsLoggedInMobile(
        <div
          className="login-btn-container-nothome"
          onClick={() => props.showLoginPopup(!props.loginPopup)}
        >
          <div>Login</div>
          <img src={login_icon} alt="login icon" />
        </div>
      );
    }

    const abortCont = new AbortController();
    //Navbar scrolling
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 15) {
        setScrolledNavClass("scrolled-navigation-nothome");
        setScrolledHamburgerClass("settings-icon-scrolled");
        setMenuTextClass("menu-p-nothome-scrolled");
        setCloseTextClass("close-p-nothome-scrolled");
        setRightSpotlight(
          <img
            className={`spotlight-top-right-nothome ${rightSpotlight}`}
            src={spotlight_yellow_right}
            alt="spotlight icon"
          />
        );
        setLeftSpotlight(
          <img
            className="spotlight-top-left-nothome"
            src={spotlight_yellow_left}
            alt="spotlight icon"
          />
        );
        // setYellowBg("logo-background-yellow-nothome");
        setYellowBg("");
      } else {
        setScrolledNavClass("");
        setScrolledHamburgerClass("settings-icon");
        setMenuTextClass("menu-p-nothome");
        setCloseTextClass("close-p-nothome");
        setRightSpotlight("");
        setLeftSpotlight("");
        setYellowBg("");
      }
    };
    window.addEventListener("scroll", handleScroll, {
      signal: abortCont.signal,
    });

    return () => abortCont.abort();
  }, [isAuthenticated, showDropDown, arrowMove, rightSpotlight]);

  return (
    <div id="scrolled-home-before-nothome">
      <header className={`homepage-navigation-nothome ${scrolledNavClass}`}>
        <div className="background-bar"></div>
        {/* {leftSpotlight}
        {rightSpotlight} */}

        <div className="nav-home-container-nothome">
          <nav className="nav-home-nothome">
            <div className="logo-home-nothome">
              <Link className="bng-home-nothome" to="/home">
                <img
                  className={`bng-home-logo ${yellowBg}`}
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="desktop-navlinks-home-nothome">
              <ul className="general-links-home-nothome">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      borderBottom: "4px solid var(--color1)",
                    }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      borderBottom: "4px solid var(--color1)",
                    }}
                    to="/faq"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      borderBottom: "4px solid var(--color1)",
                    }}
                    to="/artists"
                  >
                    Artists
                  </NavLink>
                </li>
              </ul>
              <ul className="login-links-home-nothome">
                <li className="login-home-link-nothome">{isLoggedIn}</li>
                <li
                  className={signUpClassName}
                  onClick={() => props.showSignUpPopup(!props.signUpPopup)}
                >
                  <button>
                    <div>Sign Up</div>
                  </button>
                </li>

                <div>
                  {showDropDown ? (
                    <div>
                      <div className="dropdown-content-desktop-container-nothome">
                        <div className="dropdown-content-desktop-nothome">
                          <ul>
                            <li className="portal-desktop-link-nothome">
                              <Link
                                className="portal-link-nothome"
                                to="/collection"
                              >
                                <div>Collection</div>
                                <div className="desktop-collection-icon-container-nothome">
                                  <img
                                    className="desktop-collection-icon-nothome"
                                    src={collection_icon}
                                    alt="logout icon"
                                  />
                                </div>
                              </Link>
                            </li>

                            <li
                              className="logout-button-desktop-nothome"
                              onClick={handleLogout}
                            >
                              <div>Logout</div>
                              <div className="desktop-logout-icon-container-nothome">
                                <img
                                  className="desktop-logout-icon-nothome"
                                  src={logout_icon}
                                  alt="logout icon"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </ul>
            </div>

            {/* Hamburger */}
            <label htmlFor="check-home-nothome">
              <input type="checkbox" id="check-home-nothome" />
              {/* <div className="menu-bars-home-nothome"></div>
              <div className="menu-bars-home-nothome"></div>
              <div className="menu-bars-home-nothome"></div> */}

              <img
                className={scrolledHamburgerClass}
                src={settings_icon}
                alt="settings"
              />
              <p className={menuTextClass}>MENU</p>
              <p className={closeTextClass}>CLOSE</p>

              {/* Mobile Navigation */}
              <aside className="mobile-nav-home-nothome">
                <div className="mobile-nav-header-nothome">
                  <img src={logo} alt="logo" />
                  {/* <div onClick={closeNavigation}>X</div> */}
                </div>

                <div className="user-info-dropdown-select-nothome">
                  <div className="welcome-username-nothome">{userName}</div>
                  <div className="login-mobile-btn-nothome">
                    <button className="login-btn-nothome">
                      {isLoggedInMobile}
                    </button>
                  </div>
                </div>
                <ul>
                  <div>
                    {showDropDown ? (
                      <div className="dropdown-content-mobile-nothome">
                        <ul>
                          <Link to="/collection">
                            <li className="portal-nothome">
                              Collection
                              <img
                                className="desktop-collection-icon-nothome"
                                src={collection_icon}
                                alt="logout icon"
                              />
                            </li>
                          </Link>
                          <li
                            className="logout-button-mobile-nothome"
                            onClick={handleLogout}
                          >
                            Logout <img src={logout_icon} alt="logout icon" />
                          </li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <NavLink to="/home">
                    <li>Home</li>
                  </NavLink>
                  <NavLink to="/about">
                    <li>About</li>
                  </NavLink>
                  <NavLink to="/faq">
                    <li>FAQ</li>
                  </NavLink>
                  <NavLink to="/artists">
                    <li>Artists</li>
                  </NavLink>
                  <NavLink to="#">
                    {" "}
                    <li
                      className={`${signUpClassName}`}
                      onClick={() => props.showSignUpPopup(!props.signUpPopup)}
                    >
                      <button className="signup-btn-nothome">
                        Sign Up
                        <img
                          src={write}
                          className="signup-icon"
                          alt="signup icon"
                        />
                      </button>
                      {/* </div> */}
                    </li>
                  </NavLink>
                </ul>
              </aside>
            </label>
          </nav>
        </div>
      </header>
      <div>{loggedOut ? <Logout /> : ""}</div>
    </div>
  );
}

export default MainNavigation;