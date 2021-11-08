import "./LogoutButtonStyles.scss";
import { ReactComponent as LogoutIcon } from "../../../../assets/images/logout-yellow.svg";

const LogoutButton = ({ setShowLogoutLoading }) => {
  const token = localStorage.getItem("token");
  const handleLogout = (e) => {
    setShowLogoutLoading(true);
    e.preventDefault();

    localStorage.clear();
    setTimeout(() => {
      window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/");
    }, 0);
  };

  return token === "undefined" || token === null ? (
    ""
  ) : (
    <li className="logout-button" onClick={(e) => handleLogout(e)}>
      <div>Logout</div>
      <LogoutIcon />
    </li>
  );
};

export default LogoutButton;
