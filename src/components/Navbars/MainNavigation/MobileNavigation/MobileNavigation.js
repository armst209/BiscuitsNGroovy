import { ReactComponent as SettingsHamburgerIcon } from "../../../../assets/images/settings.svg";
import styled from "styled-components";
import MainHeaderLogoMobile from "../../../../assets/images/bng_logo.png";
import "./MobileNavigationStyles.scss";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginAndSignUpMobile from "../LoginAndSignUp/LoginAndSignUpMobile";
import CollectionButtonMobile from "../CollectionButton/CollectionButtonMobile";
const MobileNavigation = ({ setShowLogoutLoading }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
      {/* Mobile Aside */}
      {showMobileMenu && (
        <aside className="mobile-navigation-aside">
          {/* Mobile Aside Header */}
          <div className="mobile-navigation-aside-top">
            <Link to="/">
              <img
                className="mobile-navigation-aside-top-image"
                src={MainHeaderLogoMobile}
                alt="logo"
              />
            </Link>
            <div
              className="aside-top-close"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              X
            </div>
          </div>
          <ul>
            <li>
              <NavLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                activeClassName="active-link"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                activeClassName="active-link"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                activeClassName="active-link"
                to="/faq"
              >
                FAQ
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                activeClassName="active-link"
                to="/artists"
              >
                Artists
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                activeClassName="active-link"
                to="/events"
              >
                Events
              </NavLink>
            </li>
            <LoginAndSignUpMobile
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
            <CollectionButtonMobile
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
            <LogoutButton setShowLogoutLoading={setShowLogoutLoading} />
          </ul>
        </aside>
      )}
    </>
  );
};

export default MobileNavigation;
