import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./MainNavigationStyles.scss";
import Logout from "../../../pages/Logout/Logout";
import logo from "../../../assets/images/Website Header.jpg";
import mobile_logo from "../../../assets/images/bng_mobile_logo.svg";
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
        <NavLink to="" onClick={() => passedProps.showLoginPopup(true)}>
          Login
        </NavLink>
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
              <Link className="bng-home" to="/home">
                <img src={logo} alt="logo" />
              </Link>
              <Link className="bng-home-mobile" to="/home">
                <img src={mobile_logo} alt="logo" />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="desktop-navlinks-home">
              <ul className="general-links-home">
                <li>
                  <NavLink
                    activeStyle={{
                      color: "var(--color1)",
                    }}
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      color: "var(--color1)",
                      // textDecoration: "2px underline var(--color1)",
                    }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      color: "var(--color1)",
                    }}
                    to="/faq"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      color: "var(--color1)",
                    }}
                    to="/artists"
                  >
                    Artists
                  </NavLink>
                </li>
              </ul>
              <ul className="middle-links-home">
                <li>|</li>
              </ul>
              <ul className="login-links-home">
                <li className="login-home-link">{isLoggedIn}</li>
                <li
                  className={signUpClassName}
                  onClick={() => props.showSignUpPopUp(true)}
                >
                  <button>Sign Up</button>
                </li>
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
                    <NavLink
                      activeStyle={{
                        color: "var(--color1)",
                      }}
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeStyle={{
                        color: "var(--color1)",
                      }}
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeStyle={{
                        color: "var(--color1)",
                      }}
                      to="/faq"
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li className="login-status-home">
                    <NavLink
                      activeStyle={{
                        color: "var(--color1)",
                      }}
                      to="/fanportal"
                    >
                      Portal
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeStyle={{
                        color: "var(--color1)",
                      }}
                      to="/artists"
                    >
                      Artists
                    </NavLink>
                  </li>
                  <li>
                    <button className="login-btn">{isLoggedIn}</button>
                  </li>
                  <li
                    className={signUpClassName}
                    onClick={() => props.showSignUpPopUp(true)}
                  >
                    <button className="signup-btn">Sign Up</button>
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
