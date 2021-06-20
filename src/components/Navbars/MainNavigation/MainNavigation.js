import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainNavigationStyles.scss";
import logo from "../../../assets/images/newlogo.svg";
import user_image from "../../../assets/images/user_white.webp";

function HomepageNavbar(props) {
  console.log(props);
  const [scrolled, setScrolled] = useState(false);
  const [xButton, setXButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [signUpClassName, setSignUpClassName] = useState("signup-link");

  const isAuthenticated = localStorage.getItem("token");

  //LOGOUT START
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.replace("http://localhost:3000/home");
  };
  //LOGOUT END

  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled-home");
  }

  const closeNavigation = () => {
    setXButton(!xButton);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setSignUpClassName("signup-no-display");
      setIsLoggedIn(
        <Link to="/fanportal/profile" onClick={handleLogout}>
          <div className="user-container">
            <div>Logout</div>
            <img src={user_image} alt="user" />
          </div>
        </Link>
      );
    } else {
      setIsLoggedIn(
        <div onClick={() => props.showLoginPopup(true)}>Login</div>
      );
    }

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
  }, [isAuthenticated]);

  return (
    <div className={navbarClasses.join(" ")}>
      <header id="homepage-navigation">
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
                <li className={signUpClassName}>
                  <Link to="/auth/register">
                    <button>Sign Up</button>
                  </Link>
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
      </header>
    </div>
  );
}

export default HomepageNavbar;
