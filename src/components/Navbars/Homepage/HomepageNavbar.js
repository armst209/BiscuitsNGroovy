import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomepageNavbarStyles.scss";
import logo from "../../../assets/images/newlogo.svg";

function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);

  const [xButton, setXButton] = useState(true);

  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled-home");
  }

  const closeNavigation = () => {
    setXButton(!xButton);
  };

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
      <header id="homepage-navigation">
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
                <Link to="/fanportal">Portal</Link>
                {/* <div>{props.status}</div> */}
              </li>

              <li>
                <Link to="/artists">Artists</Link>
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

export default Navbar;
