//styles
import styles from "./Logout.module.scss";

//svg imports
import { ReactComponent as LogoutIcon } from "../../../../assets/images/logout-yellow.svg";

//redux imports
import { useDispatch } from "react-redux";
import { userNotAuthenticated } from "../../../../../pages/Users/redux/actions";

const Logout = ({ showHideLogoutLoaderHandler }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    showHideLogoutLoaderHandler(); //showing loader
    dispatch(userNotAuthenticated());
    //removing local storage user
    localStorage.removeItem("bng_user");
    window.location.replace(import.meta.env.VITE_FRONTEND_URL + "/");
  };

  return (
    <li className={styles["logout-list-item"]} onClick={handleLogout}>
      Logout
      <LogoutIcon />
    </li>
  );
};

export default Logout;
