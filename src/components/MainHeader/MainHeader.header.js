//styles
import "./MainHeaderStyles.scss";

//react imports
import { useState, useEffect } from "react";

//component imports
import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import LogoutLoading from "../Loading/Logout/LogoutLoading";

const MainHeader = () => {
  const [headerScrolledClass, setHeaderScrolledClass] = useState("");
  const [showLogoutLoadingModal, setShowLogoutLoadingModal] = useState(false);

  //handlers
  const showHideLogoutLoaderHandler = () => {
    setShowLogoutLoadingModal((previousState) => {
      return !previousState;
    });
  };

  useEffect(() => {

    const handleFixedHeaderScroll = () => {
      window.scrollY > 15
        ? setHeaderScrolledClass("header-scrolled")
        : setHeaderScrolledClass("");
    };
    window.addEventListener("scroll", handleFixedHeaderScroll);
    return () => {
      window.removeEventListener("scroll", handleFixedHeaderScroll);
    }
  }, []);

  return (
    <header className={headerScrolledClass}>
      <nav>
        <DesktopNavigation showHideLogoutLoaderHandler={showHideLogoutLoaderHandler} />
        <MobileNavigation showHideLogoutLoaderHandler={showHideLogoutLoaderHandler} />
        {showLogoutLoadingModal && <LogoutLoading />}
      </nav>
    </header>
  );
};

export default MainHeader;