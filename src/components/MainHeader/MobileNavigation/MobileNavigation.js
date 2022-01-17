//react imports
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

//component imports
import LogoutMobile from "../Logout/LogoutMobile";
import LoginAndSignUpMobile from "../LoginAndSignUp/LoginAndSignUpMobile";
import CollectionButtonMobile from "../CollectionButton/CollectionButtonMobile";

//svg imports
import { ReactComponent as SettingsHamburgerIcon } from "../../../assets/images/settings.svg";
import { ReactComponent as MainHeaderLogoMobile } from "../../../assets/images/bng-main-logo.svg";

//styles
import "./MobileNavigationStyles.scss";

//framer motion import
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const MobileNavigation = ({ showLogoutLoaderHandler }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMobileMenuHandler = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      {/* Hamburger */}
      <div id="mobile-navigation">
        <div className="mobile-navigation-logo-container">
          <Link className="mobile-navigation-logo-link" to="/">
            <MainHeaderLogoMobile />
          </Link>
        </div>
        <div
          className="mobile-navigation-hamburger-wrapper"
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
        >
          <SettingsHamburgerIcon className="mobile-navigation-settings-icon" />
          <p>MENU</p>
        </div>
      </div>
      {/* Mobile Aside */}
      <motion.aside
        animate={showMobileMenu ? "open" : "closed"}
        variants={variants}
        className="mobile-navigation-aside"
      >
        {/* Mobile Aside Header */}
        <div className="mobile-navigation-aside-top">
          <Link to="/" onClick={() => closeMobileMenuHandler()}>
            <MainHeaderLogoMobile className="mobile-navigation-aside-top-image" />
          </Link>
          <div
            className="aside-top-close"
            onClick={() => closeMobileMenuHandler()}
          >
            X
          </div>
        </div>
        <ul>
          <li>
            <NavLink
              onClick={() => closeMobileMenuHandler()}
              activeClassName="active-link"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => closeMobileMenuHandler()}
              activeClassName="active-link"
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => closeMobileMenuHandler()}
              activeClassName="active-link"
              to="/faq"
            >
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => closeMobileMenuHandler()}
              activeClassName="active-link"
              to="/artists"
            >
              Artists
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
          <LogoutMobile showLogoutLoaderHandler={showLogoutLoaderHandler} />
        </ul>
      </motion.aside>
    </>
  );
};

export default MobileNavigation;
