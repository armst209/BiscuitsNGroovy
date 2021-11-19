import "./LogoutButtonStyles.scss";
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";
//=====GOOGLE LOGOUT=====
import { useGoogleLogout } from "react-google-login";
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
//=====GOOGLE LOGOUT=====

const LogoutButton = ({ setShowLogoutLoading }) => {
  //=====GOOGLE LOGOUT=====
  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId: CLIENT_ID,
    onFailure,
  });
  //=====GOOGLE LOGOUT=====

  //=====NORMAL TOKEN LOGOUT=====
  let token = localStorage.getItem("token");
  const handleLogout = () => {
    setShowLogoutLoading(true);
    //e.preventDefault();
    signOut();
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
