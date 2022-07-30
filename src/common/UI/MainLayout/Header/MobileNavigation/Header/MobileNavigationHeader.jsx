//svg imports
import { ReactComponent as SettingsHamburgerIcon } from "../../../../../assets/images/settings.svg";
import { ReactComponent as MainHeaderLogoMobile } from "../../../../../assets/images/bng-main-logo.svg";

//react imports
import { Link } from "react-router-dom";

//styles
import styles from "./MobileNavigationHeader.module.scss";

const MobileNavigationHeader = ({ setShowMobileMenu }) => {
  return (
    <div className={styles["mobile-navigation-header"]}>
      <div className={styles["mobile-navigation-logo-container"]}>
        <Link className={styles["mobile-navigation-logo-link"]} to="/">
          <MainHeaderLogoMobile />
        </Link>
      </div>
      <div
        className={styles["mobile-navigation-hamburger-wrapper"]}
        onClick={() => setShowMobileMenu((prevState) => !prevState)}
      >
        <SettingsHamburgerIcon className={styles["mobile-navigation-settings-icon"]} />
        <p>MENU</p>
      </div>
    </div>
  );
};

export default MobileNavigationHeader;
