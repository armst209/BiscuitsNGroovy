//styles
import "./MainHeaderStyles.scss";

//react imports
import { useState, useEffect, useContext } from "react";

//component imports
import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import LogoutLoading from "../Loading/Logout/LogoutLoading";

//context imports
import LogoutModalContext from "../../store/logout-modal-context"

const MainHeader = () => {
  const [headerScrolledClass, setHeaderScrolledClass] = useState("");


  //getting context
  const ctx = useContext(LogoutModalContext)

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
        <DesktopNavigation />
        <MobileNavigation />
      </nav>
      {ctx.showLogoutLoadingModal && <LogoutLoading />}
    </header>
  );
};

export default MainHeader;
