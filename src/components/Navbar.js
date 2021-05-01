import React from "react";
import "./NavbarStyles.scss";
// import logo from "../assets/images/Website Header.jpg";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        {/* <img src={logo} alt="logo" /> */}
        LOGO
      </div>
      <label for="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
        <nav className="mobile-navlinks">
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">LOGIN</a>
            </li>
            <li>
              <a href="">ARTISTS</a>
            </li>
          </ul>
        </nav>
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
  );
}

export default Navbar;
