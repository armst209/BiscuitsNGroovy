import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutNavbarStyles.scss";
import logo from "../../../assets/images/newlogo.svg";

function AboutNavbar(props) {
  const [scrolled, setScrolled] = useState(false);

  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled-about");
  }

  useEffect(() => {
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
      <header id="about-navigation">
        <nav className="nav-about">
          <div className="nav-back-about"></div>
          <div className="logo-about">
            <Link to="/home">
              <img className="bg-about" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="desktop-navlinks-about">
            <ul className="general-links-about">
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
            <ul className="middle-links-about">
              <li>|</li>
            </ul>
            <ul className="login-links-about">
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
          <label htmlFor="check-about">
            <input type="checkbox" id="check-about" />
            <div className="menu-bars-about"></div>
            <div className="menu-bars-about"></div>
            <div className="menu-bars-about"></div>
            <p>MENU</p>
            {/* Mobile Navigation */}
            <aside className="mobile-nav-about">
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
                <li className="login-status-about">
                  <Link to="/fanportal">Your Portal</Link>
                  {/* <div>{props.status}</div> */}
                </li>
                <li>
                  <Link to="/artists">Artists</Link>
                </li>
              </ul>
            </aside>
          </label>
        </nav>
      </header>
    </div>
  );
}

export default AboutNavbar;
