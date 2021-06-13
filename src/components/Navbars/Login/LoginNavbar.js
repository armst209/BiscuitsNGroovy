import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.scss";
import logo from "../../assets/images/newlogo.svg";

function LoginNavbar(props) {
  //NAVBAR SCROLL
  const [scrolled, setScrolled] = useState(false);
  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled-login");
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
    <header className={navbarClasses.join(" ")}>
      <nav>
        <div className="nav-back-login"></div>
        <div className="logo-login">
          <Link to="/home">
            <img className="bg-login" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="desktop-navlinks-login">
          <ul className="general-links-login">
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
          <ul className="middle-links-login">
            <li>|</li>
          </ul>
          <ul className="login-links-login">
            <li>
              <Link to="/fanportal">Portal</Link>
            </li>

            <li>
              <Link to="/artists">Artists</Link>
            </li>
          </ul>
        </div>
        {/* Hamburger */}
        <label htmlFor="check-login">
          <input type="checkbox" id="check-login" />
          <div className="menu-bars-login"></div>
          <div className="menu-bars-login"></div>
          <div className="menu-bars-login"></div>
          <p>MENU</p>
          {/* Mobile Navigation */}
          <aside className="mobile-nav-login">
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
              <li className="login-status-login">
                <Link to="/fanportal">Your Portal</Link>
              </li>
              <li>
                <Link to="/artists">Artists</Link>
              </li>
            </ul>
          </aside>
        </label>
      </nav>
    </header>
  );
}

export default LoginNavbar;
