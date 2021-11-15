import "./MainHeaderStyles.scss";
import { useState } from "react";
import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import LogoutLoading from "../Loading/Logout/LogoutLoading";

const MainHeader = () => {
  //for logout loader - passed down into DesktopNavigation & MobileNavigation for Logout component to use
  const [showLogoutLoading, setShowLogoutLoading] = useState(false);

  return (
    <header>
      <nav>
        <DesktopNavigation setShowLogoutLoading={setShowLogoutLoading} />
        <MobileNavigation setShowLogoutLoading={setShowLogoutLoading} />
        {showLogoutLoading && <LogoutLoading />}
      </nav>
    </header>
  );
};

export default MainHeader;
