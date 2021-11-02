import { useEffect } from "react";
import "./MainNavigationStyles.scss";
import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

const MainNavigation = () => {
  useEffect(() => {
    const abortCont = new AbortController();
    console.log("useEffect called");
    //Navbar scrolling - styles apply when scroll is greater than 15
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 15) {
      } else {
      }
    };
    //if browser window width is larger than 1050 the mobile navigation closes
    const handleMobileNavWindowSize = () => {
      if (window.innerWidth > 1050) {
      }
    };
    window.addEventListener("resize", handleMobileNavWindowSize);
    window.addEventListener("scroll", handleScroll, {
      signal: abortCont.signal,
    });

    return () => abortCont.abort();
  }, []);
  return (
    <header style={{ background: "black", position: "sticky" }}>
      <nav>
        <DesktopNavigation />
        <MobileNavigation />
      </nav>
    </header>
  );
};

export default MainNavigation;
