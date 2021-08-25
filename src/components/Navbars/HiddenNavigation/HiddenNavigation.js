import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./HiddenNavigationStyles.scss";
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
  const [signUpClassName, setSignUpClassName] = useState("signup-link-hidden");
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
      setSignUpClassName("signup-no-display-hidden");
      setIsLoggedIn(
        <div className="user-container-hidden">
          <div className="user-hidden" onClick={viewDropDown}>
            <img src={user_image} alt="user" />
            <img
              className={`arrow ${arrowMove ? "arrow-360" : ""}`}
              src={arrow_down}
              alt="arrow"
            />
          </div>
        </div>
      );
      //LoggedIn hook for mobile Login button
      setIsLoggedInMobile(
        <div className="user-container-hidden">
          <div className="user-hidden" onClick={viewDropDown}>
            <img src={user_image} alt="user" />
            <img
              className={`arrow ${arrowMove ? "arrow-360" : ""}`}
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
        <NavLink Link to="#" onClick={() => showLoginPopup(!loginPopup)}>
          Login <img src={login_icon} alt="login icon" />
        </NavLink>
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
    <div id="scrolled-home-before-hidden">
      {/* <span>
        Window size: {width} x {height}
      </span> */}
      <header className={`homepage-navigation-hidden`}>
        <div className="nav-home-container-hidden">
          <nav className="nav-home-hidden">
            <div className="logo-home-hidden">
              <Link className="bng-home-hidden" to="/home">
                <img
                  className={`bng-home-logo-hidden `}
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
            <div className="desktop-navlinks-home-hidden">
              <ul className="general-links-home-hidden">
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
              <ul className="login-links-home-hidden">
                <li className="login-home-link-hidden">{isLoggedIn}</li>
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
                      <div className="dropdown-content-desktop-container-hidden">
                        <div className="dropdown-content-desktop-hidden">
                          <ul>
                            <li className="portal-desktop-link-hidden">
                              <Link className="portal-link-hidden" to="/portal">
                                {linkUserName + "'s"} Portal
                              </Link>
                            </li>
                            {/* <li>
                              <Link to="/fanportal/profile">Account</Link>
                            </li> */}
                            <li
                              className="logout-button-desktop-hidden"
                              onClick={handleLogout}
                            >
                              <button>
                                <p>Logout</p>

                                <img
                                  className="desktop-logout-icon-hidden"
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
            <label htmlFor="check-home-hidden">
              <input type="checkbox" id="check-home-hidden" />
              <div className="menu-bars-home-hidden"></div>
              <div className="menu-bars-home-hidden"></div>
              <div className="menu-bars-home-hidden"></div>
              <p className="menu-p-hidden">MENU</p>
              <p className="close-p-hidden">CLOSE</p>
              {/* Mobile Navigation */}
              <aside className="mobile-nav-home-hidden">
                <div className="mobile-nav-header-hidden">
                  <img src={logo} alt="logo" />
                  {/* <div onClick={closeNavigation}>X</div> */}
                </div>

                <div className="user-info-dropdown-select-hidden">
                  <div className="welcome-username-hidden">{userName}</div>
                  <div className="login-mobile-btn-hidden">
                    <button className="login-btn-hidden">
                      {isLoggedInMobile}
                    </button>
                  </div>
                </div>
                <ul>
                  <div>
                    {showDropDown ? (
                      <div className="dropdown-content-mobile-hidden">
                        <ul>
                          <li className="portal-hidden">
                            <Link to="/portal">
                              Portal
                              {/* <img src={portal_icon} alt="portal icon" /> */}
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="/fanportal/profile">Account</Link>
                          </li> */}
                          <li
                            className="logout-button-mobile-hidden"
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
                      <button className="signup-btn-hidden">
                        Sign Up
                        <img
                          src={write}
                          className="signup-icon-hidden"
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
