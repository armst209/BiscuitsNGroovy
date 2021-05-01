import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.scss";
import logo from "../assets/images/bnglogo.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header className={navbarClasses.join(" ")}>
      <nav>
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <label for="check">
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
          <p>MENU</p>
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
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/artists">Artists</Link>
              </li>
            </ul>
          </aside>
        </label>

        {/* <div className="navlinks">
        <ul>
          <div>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </div>
          <div>
            <li>
              <a href="">LOGIN</a>
            </li>
            <li>
              <a href="">ARTISTS</a>
            </li>
          </div>
        </ul>
      </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
