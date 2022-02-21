
//styles
import "./LogoutStyles.scss";

//svg imports
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";



//TOKEN
let token = localStorage.getItem("token");

const Logout = ({ showHideLogoutLoaderHandler }) => {
  const handleLogout = () => {
    showHideLogoutLoaderHandler(); //showing loader
    localStorage.clear(); //clearing local storage
    window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/"); //redirecting to homepage
  };

  return (
    <>
      {!token ? (
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
      )}
    </>
  );
};

export default Logout;