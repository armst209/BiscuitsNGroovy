import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./DesktopNavigationStyles.scss";
import MainHeaderLogo from "../../../../assets/images/bng_logo.png";
import LogoutLoading from "../../../Loading/Logout/LogoutLoading";
import LoginAndSignUp from "../LoginAndSignUp/LoginAndSignUp";
import Logout from "../LogoutButton/LogoutButton";
import CollectionButton from "../CollectionButton/CollectionButton";

const DesktopNavigation = () => {
  const [showLogoutLoading, setShowLogoutLoading] = useState(false);

  return (
    <>
      <div className="left-links-container">
        <div className="logo-container">
          <Link className="logo-link" to="/">
            <img src={MainHeaderLogo} className="main-header-logo" alt="logo" />
          </Link>
        </div>
        <ul className="desktop-main-links">
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "4px solid var(--color1)",
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
                borderBottom: "4px solid var(--color1)",
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "4px solid var(--color1)",
              }}
              to="/faq"
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "4px solid var(--color1)",
              }}
              to="/artists"
            >
              Artists
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "4px solid var(--color1)",
              }}
              to="/events"
            >
              Events
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="right-links-container">
        <div className="right-links-inner-container">
          <CollectionButton />
          <LoginAndSignUp />
          <Logout setShowLogoutLoading={setShowLogoutLoading} />
          {showLogoutLoading && <LogoutLoading />}
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;
