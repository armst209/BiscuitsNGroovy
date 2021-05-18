import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.scss";
import logo from "../../assets/images/bnglogo.svg";

function Navbar(props) {
  const [status, setStatus] = useState(<i className="fas fa-door-open"></i>);
  // const [scrolled, setScrolled] = useState(false);

  // let navbarClasses = ["nav"];
  // if (scrolled) {
  //   navbarClasses.push("scrolled");
  // }
  // className={navbarClasses.join(" ")}

  useEffect(() => {
    // const handleScroll = () => {
    //   const offset = window.scrollY;
    //   if (offset > 100) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // };
    // window.addEventListener("scroll", handleScroll);

    let storedToken = localStorage.getItem("token");
    if (storedToken) {
      setStatus(<i className="fas fa-door-closed"></i>);
    }
  }, []);

  return (
    <header>
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
          <ul className="login-links">
            <li className="login-status">
              <Link to="/fanportal">Your Portal</Link>
              <div>{status}</div>
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
                <div>{status}</div>
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
