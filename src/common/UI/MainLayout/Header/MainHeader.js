//styles
import "./MainHeaderStyles.scss";

//react imports
import { useState, useEffect } from "react";

//component imports
import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import LogoutLoading from "../../../components/Loading/Logout/LogoutLoading";

//react helmet
import { Helmet } from "react-helmet-async";

const Header = () => {
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
      window.scrollY > 15 ? setHeaderScrolledClass("header-scrolled") : setHeaderScrolledClass("");
    };
    window.addEventListener("scroll", handleFixedHeaderScroll);
    return () => {
      window.removeEventListener("scroll", handleFixedHeaderScroll);
    };
  }, []);

  return (
    <header className={headerScrolledClass}>
      <Helmet prioritizeSeoTags>
        <title>Biscuits n Groovy</title>
        <meta
          name="description"
          content="Stream and collect exclusive biscuits from your favorite artists. Prove your fandom"
        />
      </Helmet>
      <nav>
        <DesktopNavigation showHideLogoutLoaderHandler={showHideLogoutLoaderHandler} />
        <MobileNavigation showHideLogoutLoaderHandler={showHideLogoutLoaderHandler} />
        {showLogoutLoadingModal && <LogoutLoading />}
      </nav>
    </header>
  );
};

export default Header;
