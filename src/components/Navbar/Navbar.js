import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.scss";
import logo from "../../assets/images/newlogo.svg";

function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);

  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled");
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
    <header className={navbarClasses.join(" ")}>
      <nav>
        <div className="logo">
          <Link to="/home">
            <img className="bg" src={logo} alt="logo" />
          </Link>
        </div>
        {/* Desktop Navigation Links */}
        <div className="desktop-navlinks">
          <ul className="general-links">
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
          <ul className="middle-links">
            <li>.</li>
            {/* <li>2</li>
            <li>3</li>
            <li>4</li> */}
          </ul>
          <ul className="login-links">
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
        <label htmlFor="check">
          <input type="checkbox" id="check" />
          <div className="menu-bars"></div>
          <div className="menu-bars"></div>
          <div className="menu-bars"></div>
          <p>MENU</p>
          {/* Mobile Navigation */}
          <aside className="mobile-nav">
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
              <li className="login-status">
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
  );
}

export default Navbar;
