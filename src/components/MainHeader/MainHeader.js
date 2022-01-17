//styles
import "./MainHeaderStyles.scss";

//react imports
import { useState, useEffect } from "react";

//component imports
import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

const MainHeader = () => {
  const [headerScrolledClass, setHeaderScrolledClass] = useState("");

  const handleFixedHeaderScroll = () => {
    window.scrollY > 15
      ? setHeaderScrolledClass("header-scrolled")
      : setHeaderScrolledClass("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFixedHeaderScroll);
  }, [window.scrollY]);

  return (
    <header className={headerScrolledClass}>
      <nav>
        <DesktopNavigation />
        <MobileNavigation />
      </nav>
    </header>
  );
};

export default MainHeader;
