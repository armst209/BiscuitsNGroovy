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

  console.log(showLogoutLoadingModal);
  //handlers
  const showLogoutLoaderHandler = () => setShowLogoutLoadingModal(true);

  const hideLogoutLoaderHandler = () => setShowLogoutLoadingModal(false);

  const handleFixedHeaderScroll = () => {
    window.scrollY > 15
      ? setHeaderScrolledClass("header-scrolled")
      : setHeaderScrolledClass("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFixedHeaderScroll);
  }, []);

  return (
    <header className={headerScrolledClass}>
      <nav>
        <DesktopNavigation showLogoutLoaderHandler={showLogoutLoaderHandler} />
        <MobileNavigation showLogoutLoaderHandler={showLogoutLoaderHandler} />
        {showLogoutLoadingModal && <LogoutLoading />}
      </nav>
    </header>
  );
};

export default MainHeader;
