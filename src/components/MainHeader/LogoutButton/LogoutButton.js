import "./LogoutButtonStyles.scss";
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";

const LogoutButton = ({ setShowLogoutLoading }) => {
  //=====NORMAL TOKEN LOGOUT=====
  let token = localStorage.getItem("token");
  const handleLogout = () => {
    setShowLogoutLoading(true);
    //e.preventDefault();

    localStorage.clear();

    window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/");
  };
  //=====NORMAL TOKEN LOGOUT=====

  return token === "undefined" || token === null ? (
    ""
  ) : (
    <li className="logout-button">
      <div
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </div>
      <LogoutIcon />
    </li>
  );
};

export default LogoutButton;
