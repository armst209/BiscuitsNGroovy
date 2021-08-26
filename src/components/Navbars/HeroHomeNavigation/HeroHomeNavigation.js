import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./HeroHomeNavigation.scss";
import "react-responsive-modal/styles.css";
import Logout from "../../Logout/Logout";
import logo from "../../../assets/images/bng_header_test.svg";

import user_image from "../../../assets/images/user.svg";
import arrow_down from "../../../assets/images/double-down-white.svg";
import logout_icon from "../../../assets/images/logout.svg";
import login_icon from "../../../assets/images/login_white.svg";
import write from "../../../assets/images/write.svg";
import env from "react-dotenv";

function HiddenNavigation({
  loginPopup,
  showLoginPopup,
  showSignUpPopup,
  signUpPopup,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [isLoggedInMobile, setIsLoggedInMobile] = useState("");
  const [signUpClassName, setSignUpClassName] = useState("signup-link");
  const [showDropDown, setShowDropDown] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [arrowMove, setArrowMove] = useState(false);
  const [userName, setUserName] = useState("Welcome");
  const [linkUserName, setLinkUserName] = useState("");

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

    axios({
      method: "get",
      url: `${baseURL}/users/me`,
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => {
        if (token) {
          setUserName(res.data.user.username);
          setLinkUserName(res.data.user.username);
        } else {
          setUserName("");
          setLinkUserName("");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //Menu Dropdown Function
    const viewDropDown = () => {
      setShowDropDown(!showDropDown);
      setArrowMove(!arrowMove);
    };
    //Authentication Check - Displays "Logout" in navigation
    if (isAuthenticated) {
      setSignUpClassName("signup-no-display-herohome");
      setIsLoggedIn(
        <div className="user-container-herohome">
          <div className="user-herohome" onClick={viewDropDown}>
            <img src={user_image} alt="user" />
            <img
              className={`arrow-herohome ${
                arrowMove ? "arrow-360-herohome" : ""
              }`}
              src={arrow_down}
              alt="arrow"
            />
          </div>
        </div>
      );
      //LoggedIn hook for mobile Login button
      setIsLoggedInMobile(
        <div className="user-container-herohome">
          <div className="user-herohome" onClick={viewDropDown}>
            <img src={user_image} alt="user" />
            <img
              className={`arrow-herohome ${
                arrowMove ? "arrow-360-herohome" : ""
              }`}
              src={arrow_down}
              alt="arrow"
            />
          </div>
        </div>
      );
    } else {
      setIsLoggedIn(
        <NavLink Link to="#" onClick={() => showLoginPopup(!loginPopup)}>
          Login
        </NavLink>
      );

      setIsLoggedInMobile(
        <div
          className="login-btn-container-herohome"
          onClick={() => showLoginPopup(!loginPopup)}
        >
          <div>Login</div>
          <img src={login_icon} alt="login icon" />
        </div>
      );
    }
  }, [
    isAuthenticated,
    showDropDown,
    arrowMove,
    loginPopup,
    signUpPopup,
    showSignUpPopup,
    showLoginPopup,
  ]);

  return (
    <div id="scrolled-home-before-herohome">
      {/* <span>
        Window size: {width} x {height}
      </span> */}
      <header className={`homepage-navigation-herohome`}>
        <div className="nav-home-container-herohome">
          <nav className="nav-home-herohome">
            <div className="logo-home-herohome">
              <Link className="bng-home-herohome" to="/home">
                <img
                  className={`bng-home-logo-herohome `}
                  src={logo}
                  alt="logo"
                />
                {/* <img className="vinyl-logo" src={vinyl_logo} alt="vinyl icon" /> */}
              </Link>
              {/* <Link className="bng-home-mobile" to="/home">
                <img src={mobile_logo} alt="logo" />
              </Link> */}
            </div>

            {/* Desktop Navigation Links */}
            <div className="desktop-navlinks-home-herohome">
              <ul className="general-links-home-herohome">
                <li>
                  <NavLink
                    activeStyle={
                      {
                        // textDecoration: "underline 3.5px solid var(--color2)",
                      }
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
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
              <ul className="login-links-home-herohome">
                <li className="login-home-link-herohome">{isLoggedIn}</li>
                <li
                  className={signUpClassName}
                  onClick={() => showSignUpPopup(!signUpPopup)}
                >
                  <button>
                    <div>Sign Up</div>
                    {/* <img src={avatar_signin} alt="avatar" /> */}
                  </button>
                </li>

                <div>
                  {showDropDown ? (
                    <div>
                      <div className="dropdown-content-desktop-container-herohome">
                        <div className="dropdown-content-desktop-herohome">
                          <ul>
                            <li className="portal-desktop-link-herohome">
                              <Link
                                className="portal-link-herohome"
                                to="/portal"
                              >
                                {linkUserName + "'s"} Portal
                              </Link>
                            </li>
                            {/* <li>
                              <Link to="/fanportal/profile">Account</Link>
                            </li> */}
                            <li
                              className="logout-button-desktop-herohome"
                              onClick={handleLogout}
                            >
                              <button>
                                <p>Logout</p>

                                <img
                                  className="desktop-logout-icon-herohome"
                                  src={logout_icon}
                                  alt="logout icon"
                                />
                              </button>
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
            <label htmlFor="check-home-herohome">
              <input type="checkbox" id="check-home-herohome" />
              <div className="menu-bars-home-herohome"></div>
              <div className="menu-bars-home-herohome"></div>
              <div className="menu-bars-home-herohome"></div>
              <p className="menu-p-herohome">MENU</p>
              <p className="close-p-herohome">CLOSE</p>
              {/* Mobile Navigation */}
              <aside className="mobile-nav-home-herohome">
                <div className="mobile-nav-header-herohome">
                  <img src={logo} alt="logo" />
                  {/* <div onClick={closeNavigation}>X</div> */}
                </div>

                <div className="user-info-dropdown-select-herohome">
                  <div className="welcome-username-herohome">{userName}</div>
                  <div className="login-mobile-btn-herohome">
                    <button className="login-btn-herohome">
                      {isLoggedInMobile}
                    </button>
                  </div>
                </div>
                <ul>
                  <div>
                    {showDropDown ? (
                      <div className="dropdown-content-mobile-herohome">
                        <ul>
                          <li className="portal-herohome">
                            <Link to="/portal">
                              Portal
                              {/* <img src={portal_icon} alt="portal icon" /> */}
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="/fanportal/profile">Account</Link>
                          </li> */}
                          <li
                            className="logout-button-mobile-herohome"
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
                      onClick={() => showSignUpPopup(!signUpPopup)}
                    >
                      {/* <div className="signup-btn-container"> */}
                      <button className="signup-btn-herohome">
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

export default HiddenNavigation;
