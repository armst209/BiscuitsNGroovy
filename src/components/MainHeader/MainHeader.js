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

  const handleFixedHeaderScroll = () => {
    window.scrollY > 15
      ? setHeaderScrolledClass("header-scrolled")
      : setHeaderScrolledClass("");
  };


  useEffect(() => {

    window.addEventListener("scroll", handleFixedHeaderScroll);
    return () => {
      console.log("cleanup");
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