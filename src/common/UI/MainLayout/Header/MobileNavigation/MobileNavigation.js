//react imports
import { useState } from "react";

//component imports
import Header from "./Header/MobileNavigationHeader";
import Aside from "./Aside/MobileAside";

const MobileNavigation = ({ showHideLogoutLoaderHandler }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <Header setShowMobileMenu={setShowMobileMenu} />
      <Aside
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        showHideLogoutLoaderHandler={showHideLogoutLoaderHandler}
      />
    </>
  );
};

export default MobileNavigation;
