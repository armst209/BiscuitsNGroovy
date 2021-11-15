import "./LogoutButtonStyles.scss";
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";

const LogoutButton = ({ setShowLogoutLoading }) => {
  let token = localStorage.getItem("token");
  const handleLogout = (e) => {
    setShowLogoutLoading(true);
    e.preventDefault();
    localStorage.clear();
    window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/");
  };

  return token === "undefined" || token === null ? (
    ""
  ) : (
    <li className="logout-button">
      <div onClick={(e) => handleLogout(e)}>Logout</div>
      <LogoutIcon />
    </li>
  );
};

export default LogoutButton;
