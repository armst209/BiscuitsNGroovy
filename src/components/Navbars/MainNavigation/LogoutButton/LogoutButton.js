import env from "react-dotenv";
import "./LogoutButtonStyles.scss";
import { ReactComponent as LogoutIcon } from "../../../../assets/images/logout-yellow.svg";

const LogoutButton = ({ setShowLogoutLoading }) => {
  const token = localStorage.getItem("token");
  const handleLogout = (e) => {
    setShowLogoutLoading(true);
    e.preventDefault();

    localStorage.clear();
    setTimeout(() => {
      window.location.replace(env.FRONTEND_URL + "/");
    }, 0);
  };

  return token ? (
    <li className="logout-button" onClick={(e) => handleLogout(e)}>
      <div>Logout</div>

      <LogoutIcon />
    </li>
  ) : (
    ""
  );
};

export default LogoutButton;
