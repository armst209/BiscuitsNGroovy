//styles
import "./MainHeaderStyles.scss";

//react imports
import { useState, useEffect } from "react";

//component imports
import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import LogoutLoading from "../Loading/Logout/LogoutLoading";

//context imports
import LogoutModalContext from "../../store/logout-modal-context"

const MainHeader = () => {
  const [headerScrolledClass, setHeaderScrolledClass] = useState("");
  const [showLogoutLoadingModal, setShowLogoutLoadingModal] = useState(false);

  //handlers
  const showHideLogoutLoaderHandler = () => {
    setShowLogoutLoadingModal((previousState) => {
      return !previousState;
    });
  };

  const contextValue = { showLogoutLoadingModal: showLogoutLoadingModal, handler: showHideLogoutLoaderHandler };

  const handleFixedHeaderScroll = () => {
    window.scrollY > 15
      ? setHeaderScrolledClass("header-scrolled")
      : setHeaderScrolledClass("");
  };

  useEffect(() => {

    window.addEventListener("scroll", handleFixedHeaderScroll);

    return () => {
      window.removeEventListener("scroll", handleFixedHeaderScroll);
    };
  }, []);



  return (
    <header className={headerScrolledClass}>
      <nav>
        <LogoutModalContext.Provider value={contextValue}>
          <DesktopNavigation />
          <MobileNavigation />
        </LogoutModalContext.Provider>
      </nav>
      {showLogoutLoadingModal && <LogoutLoading />}
    </header >
  );
};

export default MainHeader;
