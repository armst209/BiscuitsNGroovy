import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./PortalNavbarStyles.scss";
import logo from "../../../../assets/images/newlogo.svg";
import FPNavbar from "../SecondaryNavbars/FPNavbar";
import FPNavbarMobile from "../SecondaryNavbars/FPNavbarMobile";

function PortalNavbar(props) {
  const [scrolled, setScrolled] = useState(false);

  //LOGOUT START
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    <Redirect to="/login" />;
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
      <header id="portal-navigation">
        <nav className="nav-portal">
          <div className="nav-back-portal"></div>
          <div className="logo-portal">
            <Link to="/home">
              <img className="bg-portal" src={logo} alt="logo" />
            </Link>
          </div>
          {/* Desktop Navigation Links */}
          <div className="desktop-navlinks-portal">
            <ul className="general-links-portal">
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
            <ul className="middle-links-portal">
              <li>|</li>
            </ul>
            <ul className="login-links-portal">
              <li>
                <Link to="/fanportal">Portal</Link>
                {/* <div>{props.status}</div> */}
              </li>

              <li>
                <Link to="/artists">Artists</Link>
              </li>
            </ul>
          </div>
          {/* Hamburger */}
          <label htmlFor="check-portal">
            <input type="checkbox" id="check-portal" />
            <div className="menu-bars-portal"></div>
            <div className="menu-bars-portal"></div>
            <div className="menu-bars-portal"></div>
            <p>MENU</p>
            {/* Mobile Navigation */}
            <aside className="mobile-nav-portal">
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
                <li className="login-status-portal">
                  <Link to="/fanportal">Your Portal</Link>
                </li>
                <li>
                  <Link to="/artists">Artists</Link>
                </li>
              </ul>
            </aside>
          </label>
        </nav>
        <div>
          <FPNavbar handleLogout={handleLogout} />
          <FPNavbarMobile handleLogout={handleLogout} />
        </div>
      </header>
    </div>
  );
}

export default PortalNavbar;
