//styles
import styles from "./Logout.module.scss";

//svg imports
import { ReactComponent as LogoutIcon } from "common/assets/images/logout-yellow.svg";

//redux imports
import { useDispatch } from "react-redux";
import { userLoggedOut, userNotAuthenticated } from "pages/Users/redux/actions";

const Logout = ({ showHideLogoutLoaderHandler }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    showHideLogoutLoaderHandler(); //showing loader
    dispatch(userNotAuthenticated());
    dispatch(userLoggedOut());
    //removing local storage user
    localStorage.removeItem("bng_user");
    window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/");
  };

  return (
    <li className={styles["logout-list-item"]} onClick={handleLogout}>
      Logout
      <LogoutIcon />
    </li>
  );
};

export default Logout;
