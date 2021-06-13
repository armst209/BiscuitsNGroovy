import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArtistsNavbarStyles.scss";
import logo from "../../../assets/images/newlogo.svg";

function ArtistsNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  //NAVBAR SCROLL
  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled-artists");
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
      <header id="artists-navigation">
        <nav className="nav-artists">
          <div className="nav-back-artists"></div>
          <div className="logo-artists">
            <Link to="/home">
              <img className="bg-artists" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="desktop-navlinks-artists">
            <ul className="general-links-artists">
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
            <ul className="middle-links-artists">
              <li>|</li>
            </ul>
            <ul className="login-links-artists">
              <li>
                <Link to="/fanportal">Portal</Link>
              </li>

              <li>
                <Link to="/artists">Artists</Link>
              </li>
            </ul>
          </div>
          {/* Hamburger */}
          <label htmlFor="check-artists">
            <input type="checkbox" id="check-artists" />
            <div className="menu-bars-artists"></div>
            <div className="menu-bars-artists"></div>
            <div className="menu-bars-artists"></div>
            <p>MENU</p>
            {/* Mobile Navigation */}
            <aside className="mobile-nav-artists">
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
                <li className="login-status-artists">
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

export default ArtistsNavbar;
