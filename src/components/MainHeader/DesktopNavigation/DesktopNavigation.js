//react imports
import { Link, NavLink, useLocation } from "react-router-dom";

//styles
import "./DesktopNavigationStyles.scss";

//svg imports
import { ReactComponent as MainHeaderLogo } from "../../../assets/images/bng-main-logo.svg";

//component imports
import LoginAndSignUp from "../LoginAndSignUp/LoginAndSignUp";
import Logout from "../Logout/Logout";
import CollectionButton from "../CollectionButton/CollectionButton";
import { useEffect } from "react";

const DesktopNavigation = ({
  showLogoutLoaderHandler,
  hideLogoutLoaderHandler,
}) => {

  // Get current location base on url.
  let location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="left-links-container">
        <div className="logo-container">
          {location.pathname === '/' ?
            <div className="logo-link">
              <MainHeaderLogo onClick={scrollToTop} className="main-header-logo" />
            </div>
            :
            <Link className="logo-link" to="/">
              <MainHeaderLogo className="main-header-logo" />
            </Link>
          }
          {/* <Link className="logo-link" to="/">
            <MainHeaderLogo className="main-header-logo" />
          </Link> */}
        </div>
        <ul className="desktop-main-links">
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "2px solid var(--color1)",
              }}
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "2px solid var(--color1)",
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "2px solid var(--color1)",
              }}
              to="/faq"
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "2px solid var(--color1)",
              }}
              to="/artists"
            >
              Artists
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="right-links-container">
        <div className="right-links-inner-container">
          <div className="desktop-main-links">
            <CollectionButton />
            <LoginAndSignUp />
          </div>

          <Logout
            showLogoutLoaderHandler={showLogoutLoaderHandler}
            hideLogoutLoaderHandler={hideLogoutLoaderHandler}
          />
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;
