import { ReactComponent as SettingsHamburgerIcon } from "../../../../assets/images/settings.svg";
import MainHeaderLogoMobile from "../../../../assets/images/bng_logo.png";
import "./MobileNavigationStyles.scss";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
const MobileNavigation = () => {
  const token = localStorage.getItem("token");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [signUpClassName, setSignUpClassName] = useState("signup-link");

  const [scrolledHamburgerClass, setScrolledHamburgerClass] =
    useState("settings-icon");

  return (
    <>
      {/* Hamburger */}
      <div id="mobile-navigation">
        <div className="mobile-navigation-logo-container">
          <Link className="mobile-navigation-logo-link" to="/">
            <img src={MainHeaderLogoMobile} alt="logo" />
          </Link>
        </div>
        <div
          className="mobile-navigation-hamburger-wrapper"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <SettingsHamburgerIcon className="mobile-navigation-settings-icon" />
          <p>MENU</p>
        </div>
      </div>
      {/* Mobile Navigation */}
      {showMobileMenu && (
        <aside className="mobile-navigation-aside">
          <div className="mobile-navigation-aside-top">
            <div>IMAGE</div>
            <div
              className="aside-top-close"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              X
            </div>
          </div>
          <ul>
            <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <NavLink
                activeStyle={{
                  textDecoration: "underline 5px solid var(--color2)",
                }}
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <NavLink
                activeStyle={{
                  textDecoration: "underline 5px solid var(--color2)",
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <NavLink
                activeStyle={{
                  textDecoration: "underline 5px solid var(--color2)",
                }}
                to="/faq"
              >
                FAQ
              </NavLink>
            </li>

            <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <NavLink
                activeStyle={{
                  textDecoration: "underline 5px solid var(--color2)",
                }}
                to="/artists"
              >
                Artists
              </NavLink>
            </li>

            <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <NavLink
                activeStyle={{
                  textDecoration: "underline 5px solid var(--color2)",
                }}
                to="/events"
              >
                Events
              </NavLink>
            </li>

            {!token ? (
              <>
                <li onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <NavLink
                    activeStyle={{
                      textDecoration: "underline 5px solid var(--color2)",
                    }}
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>

                <li className="signup-li">
                  <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <NavLink to="/signup">Sign Up</NavLink>
                    {/* <img src={write} className="signup-icon" alt="signup icon" /> */}
                  </button>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </aside>
      )}
    </>
  );
};

export default MobileNavigation;
