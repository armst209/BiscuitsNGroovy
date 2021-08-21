import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./MainNavigationStyles.scss";
import "react-responsive-modal/styles.css";
import Logout from "../../Logout/Logout";
import logo from "../../../assets/images/bng_header_test.svg";

import user_image from "../../../assets/images/user.svg";
import arrow_down from "../../../assets/images/double-down-white.svg";
import logout_icon from "../../../assets/images/logout.svg";
import login_icon from "../../../assets/images/login_white.svg";
import write from "../../../assets/images/write.svg";
import spotlight_yellow_left from "../../../assets/images/spotlight_outline_left_yellow.svg";
import spotlight_yellow_right from "../../../assets/images/spotlight_outline_right_yellow.svg";
import env from "react-dotenv";
//window sizing
// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener("resize", updateSize);
//     updateSize();
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);
//   return size;
// }

function MainNavigation(props) {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [isLoggedInMobile, setIsLoggedInMobile] = useState("");
  const [signUpClassName, setSignUpClassName] = useState("signup-link");
  const [showDropDown, setShowDropDown] = useState(false);
  const [scrolledNavClass, setScrolledNavClass] = useState("");
  const [loggedOut, setLoggedOut] = useState(false);
  const [arrowMove, setArrowMove] = useState(false);
  const [userName, setUserName] = useState("Welcome");
  const [rightSpotlight, setRightSpotlight] = useState("");
  const [leftSpotlight, setLeftSpotlight] = useState("");
  const [yellowBg, setYellowBg] = useState("");
  // const [signUpIcon, setSignUpIcon] = useState("Sign Up");
  // const [width, height] = useWindowSize();

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
        setUserName(res.data.user.username);
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
      setSignUpClassName("signup-no-display");
      setIsLoggedIn(
        <div className="user-container">
          <div className="user" onClick={viewDropDown}>
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
        <div className="user-container">
          <div className="user" onClick={viewDropDown}>
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
        <NavLink Link to="#" onClick={() => props.showLoginPopup(true)}>
          Login
        </NavLink>
      );

      setIsLoggedInMobile(
        <NavLink Link to="#" onClick={() => props.showLoginPopup(true)}>
          Login <img src={login_icon} alt="login icon" />
        </NavLink>
      );
    }

    const abortCont = new AbortController();
    //Navbar scrolling
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 25) {
        setScrolledNavClass("scrolled-navigation");
        setRightSpotlight(
          <img
            className={`spotlight-top-right ${rightSpotlight}`}
            src={spotlight_yellow_right}
            alt="spotlight icon"
          />
        );
        setLeftSpotlight(
          <img
            className="spotlight-top-left"
            src={spotlight_yellow_left}
            alt="spotlight icon"
          />
        );
        setYellowBg("logo-background-yellow");
      } else {
        setScrolledNavClass("");
        setRightSpotlight("");
        setLeftSpotlight("");
        setYellowBg("");
      }
    };
    window.addEventListener("scroll", handleScroll, {
      signal: abortCont.signal,
    });

    return () => abortCont.abort();
  }, [isAuthenticated, showDropDown, arrowMove, props, rightSpotlight]);

  return (
    <div id="scrolled-home-before">
      {/* <span>
        Window size: {width} x {height}
      </span> */}
      <header className={`homepage-navigation ${scrolledNavClass}`}>
        {leftSpotlight}
        {rightSpotlight}

        <div className="nav-home-container">
          <nav className="nav-home">
            <div className="logo-home">
              <Link className="bng-home" to="/home">
                <img
                  className={`bng-home-logo ${yellowBg}`}
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
            <div className="desktop-navlinks-home">
              <ul className="general-links-home">
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
              <ul className="login-links-home">
                <li className="login-home-link">{isLoggedIn}</li>
                <li
                  className={signUpClassName}
                  onClick={() => props.showSignUpPopUp(true)}
                >
                  <button>
                    <div>Sign Up</div>
                    {/* <img src={avatar_signin} alt="avatar" /> */}
                  </button>
                </li>
                <div>
                  {showDropDown ? (
                    <div>
                      <div className="dropdown-content-desktop-container">
                        <div className="dropdown-content-desktop">
                          <ul>
                            <li className="portal-desktop-link">
                              <Link className="portal-link" to="/fanportal">
                                Your Portal
                              </Link>
                            </li>
                            {/* <li>
                              <Link to="/fanportal/profile">Account</Link>
                            </li> */}
                            <li
                              className="logout-button-desktop"
                              onClick={handleLogout}
                            >
                              <button>
                                <p>Logout</p>

                                <img
                                  className="desktop-logout-icon"
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
            <label htmlFor="check-home">
              <input type="checkbox" id="check-home" />
              <div className="menu-bars-home"></div>
              <div className="menu-bars-home"></div>
              <div className="menu-bars-home"></div>
              <p className="menu-p">MENU</p>
              <p className="close-p">CLOSE</p>
              {/* Mobile Navigation */}
              <aside className="mobile-nav-home">
                <div className="mobile-nav-header">
                  <img src={logo} alt="logo" />
                  {/* <div onClick={closeNavigation}>X</div> */}
                </div>

                <div className="user-info-dropdown-select">
                  <div className="welcome-username">{userName}</div>
                  <div className="login-mobile-btn">
                    <button className="login-btn">{isLoggedInMobile}</button>
                  </div>
                </div>
                <ul>
                  <div>
                    {showDropDown ? (
                      <div className="dropdown-content-mobile">
                        <ul>
                          <li className="portal">
                            <Link to="/fanportal">
                              Your Portal
                              {/* <img src={portal_icon} alt="portal icon" /> */}
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="/fanportal/profile">Account</Link>
                          </li> */}
                          <li
                            className="logout-button-mobile"
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
                      onClick={() => props.showSignUpPopUp(true)}
                    >
                      {/* <div className="signup-btn-container"> */}
                      <button className="signup-btn">
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
