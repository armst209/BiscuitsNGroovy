import { Link, NavLink } from "react-router-dom";
import "./DesktopNavigationStyles.scss";
import MainHeaderLogo from "../../../assets/images/bng-main-logo.jpg";
import LoginAndSignUp from "../LoginAndSignUp/LoginAndSignUp";
import Logout from "../LogoutButton/LogoutButton";
import CollectionButton from "../CollectionButton/CollectionButton";

const DesktopNavigation = ({ setShowLogoutLoading }) => {
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

          <Logout setShowLogoutLoading={setShowLogoutLoading} />
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;
