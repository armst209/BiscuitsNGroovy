//react imports
import { useState } from "react";

//component imports
import Header from "./Header/MobileNavigationHeader";
import Aside from "./Aside/MobileAside";

//styles
import styles from "./MobileNavigation.module.scss";

const MobileNavigation = ({ showHideLogoutLoaderHandler }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <Header setShowMobileMenu={setShowMobileMenu} />
      {showMobileMenu && (
        <Aside
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
          showHideLogoutLoaderHandler={showHideLogoutLoaderHandler}
        />
      )}
    </>
  );
};

export default MobileNavigation;
