import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FAQNavbarStyles.scss";
import logo from "../../../assets/images/newlogo.svg";

function FAQNavbar(props) {
  const [scrolled, setScrolled] = useState(false);

  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled-faq");
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
      <header id="faq-navigation">
        <nav className="faq-home">
          <div className="nav-back-faq"></div>
          <div className="logo-faq">
            <Link to="/home">
              <img className="bg" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="desktop-navlinks-faq">
            <ul className="general-links-faq">
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
            <ul className="middle-links-faq">
              <li>|</li>
            </ul>
            <ul className="login-links-faq">
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
          <label htmlFor="check-faq">
            <input type="checkbox" id="check-faq" />
            <div className="menu-bars"></div>
            <div className="menu-bars"></div>
            <div className="menu-bars"></div>
            <p>MENU</p>
            {/* Mobile Navigation */}
            <aside className="mobile-nav-faq">
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
                <li className="login-status-faq">
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
    </div>
  );
}

export default FAQNavbar;
