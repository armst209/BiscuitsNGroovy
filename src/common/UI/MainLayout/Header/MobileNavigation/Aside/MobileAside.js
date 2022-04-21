//react imports
import { NavLink } from "react-router-dom";

//redux imports
import { useSelector } from "react-redux";

//component imports
import LoginAndSignUpMobile from "../../LoginAndSignUp/LoginAndSignUpMobile";
import CollectionButtonMobile from "../../CollectionButton/CollectionButtonMobile";
import Logout from "../../Logout/Logout";
import AsideHeader from "./Header/AsideHeader";

//framer motion import
import { motion } from "framer-motion";

//material ui
import { useTheme } from "@mui/material";

//styles
import styles from "./MobileAside.module.scss";

import { linkNames } from "../../Navigation/links";

const MobileAside = ({ showMobileMenu, setShowMobileMenu, showHideLogoutLoaderHandler }) => {
  const { components } = useTheme();

  //redux authentication state
  const isUserAuthenticated = useSelector((state) => state.bng_user.authentication.isAuthenticated);
  const closeMobileMenuHandler = () => setShowMobileMenu(false);
  //framer motion variant
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <motion.aside
      animate={showMobileMenu ? "open" : "closed"}
      variants={variants}
      className={styles["mobile-navigation-aside"]}
    >
      <AsideHeader closeMobileMenuHandler={closeMobileMenuHandler} />
      <ul>
        {linkNames.map((link) => (
          <li key={link.id}>
            <NavLink
              onClick={() => closeMobileMenuHandler()}
              style={({ isActive }) => (isActive ? components.Link.mobile.activeStyle : {})}
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        ))}

        {!isUserAuthenticated && (
          <LoginAndSignUpMobile
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
        )}

        {isUserAuthenticated && (
          <>
            <CollectionButtonMobile
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
            <Logout showHideLogoutLoaderHandler={showHideLogoutLoaderHandler} />
          </>
        )}
      </ul>
    </motion.aside>
  );
};

export default MobileAside;
