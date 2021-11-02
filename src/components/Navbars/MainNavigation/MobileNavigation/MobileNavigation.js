import { ReactComponent as SettingsHamburgerIcon } from "../../../../assets/images/settings.svg";
import MainHeaderLogoMobile from "../../../../assets/images/bng_logo.png";
import "./MobileNavigationStyles.scss";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
const MobileNavigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [isLoggedInMobile, setIsLoggedInMobile] = useState("");
  const [signUpClassName, setSignUpClassName] = useState("signup-link");

  const [scrolledHamburgerClass, setScrolledHamburgerClass] =
    useState("settings-icon");

  return (
    <>
      <div className="mobile-logo-container">
        <Link className="mobile-logo-link" to="/">
          <img src={MainHeaderLogoMobile} alt="logo" />
        </Link>
      </div>
      {/* Hamburger */}
      <div
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="mobile-navigation"
      >
        <SettingsHamburgerIcon className={scrolledHamburgerClass} />
        <p>MENU</p>
      </div>
      {/* Mobile Navigation */}
      {showMobileMenu && (
        <aside className="mobile-navigation-aside">
          <ul>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              activeStyle={{
                textDecoration: "underline 5px solid var(--color2)",
              }}
              exact
              to="/"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              activeStyle={{
                textDecoration: "underline 5px solid var(--color2)",
              }}
              to="/about"
            >
              <li>About</li>
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              activeStyle={{
                textDecoration: "underline 5px solid var(--color2)",
              }}
              to="/faq"
            >
              <li>FAQ</li>
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              activeStyle={{
                textDecoration: "underline 5px solid var(--color2)",
              }}
              to="/artists"
            >
              <li>Artists</li>
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              activeStyle={{
                textDecoration: "underline 5px solid var(--color2)",
              }}
              to="/events"
            >
              <li>Events</li>
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="/signup"
            >
              <li className={`${signUpClassName}`}>
                <button className="signup-btn-nothome">
                  Sign Up
                  {/* <img src={write} className="signup-icon" alt="signup icon" /> */}
                </button>
              </li>
            </NavLink>
          </ul>
        </aside>
      )}
    </>
  );
};

export default MobileNavigation;
