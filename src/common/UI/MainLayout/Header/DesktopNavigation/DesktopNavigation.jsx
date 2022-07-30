//react imports
import { Link, NavLink } from "react-router-dom";

//styles
import styles from "./DesktopNavigation.module.scss";

//svg imports
import { ReactComponent as MainHeaderLogo } from "../../../../assets/images/bng-main-logo.svg";

//redux imports
import { useSelector } from "react-redux";

//component imports
import LoginAndSignUp from "../LoginAndSignUp/LoginAndSignUp";
import Logout from "../Logout/Logout";
import CollectionButton from "../CollectionButton/CollectionButton";

//material ui imports
import { useTheme } from "@mui/material";

import { linkNames } from "../Navigation/links";

const DesktopNavigation = ({ showHideLogoutLoaderHandler }) => {
  const { components } = useTheme();
  const isUserAuthenticated = useSelector((state) => state.bng_user.authentication.isAuthenticated);

  return (
    <>
      <div className={styles["left-links-container"]}>
        <div className={styles["logo-container"]}>
          <Link className="logo-link" to="/">
            <MainHeaderLogo className={styles["main-header-logo"]} />
          </Link>
        </div>
        <ul className={styles["desktop-main-links"]}>
          {linkNames.map((link) => (
            <li key={link.id}>
              <NavLink
                style={({ isActive }) => (isActive ? components.Link.activeStyle : {})}
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["right-links-container"]}>
        <div className={styles["right-links-inner-container"]}>
          <div className={styles["desktop-main-links"]}>
            {isUserAuthenticated && <CollectionButton />}
            {!isUserAuthenticated && <LoginAndSignUp />}
          </div>
          {isUserAuthenticated && (
            <Logout showHideLogoutLoaderHandler={showHideLogoutLoaderHandler} />
          )}
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;
