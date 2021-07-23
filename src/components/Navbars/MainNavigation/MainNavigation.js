import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./MainNavigationStyles.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Logout from "../../../pages/Logout/Logout";
import Login from "../../../components/Login/Login";
import logo from "../../../assets/images/bng_header_test.svg";
import avatar_signin from "../../../assets/images/avatar.svg";
import mobile_logo from "../../../assets/images/bng_test.svg";
import user_image from "../../../assets/images/user.svg";
import arrow_down from "../../../assets/images/arrow-bottom.svg";
import LoginTest from "../../Login/LoginTest";

function MainNavigation(props) {
  const [xButton, setXButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [signUpClassName, setSignUpClassName] = useState("signup-link");
  const [showDropDown, setShowDropDown] = useState(false);
  const [scrolledNavClass, setScrolledNavClass] = useState("");
  const [loggedOut, setLoggedOut] = useState(false);
  const [arrowMove, setArrowMove] = useState(false);
  const [userName, setUserName] = useState("Welcome");
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const isAuthenticated = localStorage.getItem("token");

  //Function for close button in mobile navigation popup
  const closeNavigation = () => {
    setXButton(!xButton);
  };
  //LOGOUT Function
  const handleLogout = (e) => {
    e.preventDefault();
    setShowDropDown(false);

    setTimeout(() => {
      setLoggedOut(!loggedOut);
      localStorage.clear();
    }, 200);

    setTimeout(() => {
      window.location.replace("http://localhost:3000/home");
    }, 1000);
  };
  useEffect(() => {
    // Getting user's information
    const token = localStorage.getItem("token");
    const baseURL =
      "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";

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
    } else {
      setIsLoggedIn(
        <NavLink Link to="#" onClick={() => props.showLoginPopup(true)}>
          Login
        </NavLink>

        // <NavLink to="#" onClick={onOpenModal}>
        //   Login
        // </NavLink>
      );
    }

    const abortCont = new AbortController();
    //Navbar scrolling
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolledNavClass("scrolled-navigation");
      } else {
        setScrolledNavClass("");
      }
    };
    window.addEventListener("scroll", handleScroll, {
      signal: abortCont.signal,
    });

    return () => abortCont.abort();
  }, [isAuthenticated, showDropDown]);

  return (
    <div id="scrolled-home-before">
      <header className={`homepage-navigation ${scrolledNavClass}`}>
        <div className="nav-home-container">
          <nav className="nav-home">
            <div className="logo-home">
              <Link className="bng-home" to="/home">
                <img className="bng-home-logo" src={logo} alt="logo" />
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
                      textDecoration: "underline 3.5px solid var(--color2)",
                    }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      textDecoration: "underline 3.5px solid var(--color2)",
                    }}
                    to="/faq"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      textDecoration: "underline 3.5px solid var(--color2)",
                    }}
                    to="/artists"
                  >
                    Artists
                  </NavLink>
                </li>
              </ul>
              <ul className="login-links-home">
                <li className="login-home-link">
                  {isLoggedIn}
                  {/* <Modal open={open} onClose={onCloseModal} center>
                    <LoginTest />
                  </Modal> */}
                </li>
                <li
                  className={signUpClassName}
                  onClick={() => props.showSignUpPopUp(true)}
                >
                  <button>
                    <div>Sign Up </div>
                    {/* <img src={avatar_signin} alt="avatar" /> */}
                  </button>
                </li>
                <div>
                  {showDropDown ? (
                    <div>
                      <div className="dropdown-content-desktop-container">
                        <div className="dropdown-content-desktop">
                          <ul>
                            <li>
                              <Link to="/fanportal">Your Portal</Link>
                            </li>
                            <li>
                              <Link to="/fanportal/profile">Account</Link>
                            </li>
                            <li
                              className="logout-button"
                              onClick={handleLogout}
                            >
                              <p>Logout</p>
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

                <ul>
                  <li className="user-info-dropdown-select">
                    <div>{userName}</div>
                    <button className="login-btn">{isLoggedIn}</button>
                  </li>
                  <div>
                    {showDropDown ? (
                      <div className="dropdown-content-mobile">
                        <ul>
                          <li>
                            <Link to="/fanportal">Your Portal</Link>
                          </li>
                          <li>
                            <Link to="/fanportal/profile">Account</Link>
                          </li>
                          <li className="logout-button" onClick={handleLogout}>
                            Logout
                          </li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <li>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq">FAQ</NavLink>
                  </li>

                  <li>
                    <NavLink to="/artists">Artists</NavLink>
                  </li>

                  <li
                    className={`${signUpClassName}`}
                    onClick={() => props.showSignUpPopUp(true)}
                  >
                    <div className="signup-btn-container">
                      <button className="signup-btn">Sign Up</button>
                    </div>
                  </li>
                </ul>
              </aside>
            </label>
          </nav>
        </div>

        <div>{loggedOut ? <Logout /> : ""}</div>
      </header>
    </div>
  );
}

export default MainNavigation;
