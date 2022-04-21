//styles
import styles from "./AsideHeader.module.scss";
//react imports
import { Link } from "react-router-dom";

import { ReactComponent as AsideHeaderLogo } from "common/assets/images/bng-main-logo.svg";

const AsideHeader = ({ closeMobileMenuHandler }) => {
  return (
    <div className={styles["mobile-navigation-aside-top"]}>
      <Link to="/" onClick={() => closeMobileMenuHandler()}>
        <AsideHeaderLogo className={styles["mobile-navigation-aside-top-image"]} />
      </Link>
      <div className={styles["aside-top-close"]} onClick={() => closeMobileMenuHandler()}>
        X
      </div>
    </div>
  );
};

export default AsideHeader;
