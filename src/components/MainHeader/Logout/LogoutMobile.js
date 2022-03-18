//styles
import "./LogoutStyles.scss";

//svg imports
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";

//redux imports
import { useSelector } from "react-redux";

const Logout = ({ showHideLogoutLoaderHandler }) => {

  const isUserAuthenticated = useSelector(state => state.authentication.isUserAuthenticated)
  const handleLogout = () => {
    showHideLogoutLoaderHandler(); //showing loader
    localStorage.clear(); //clearing local storage
    window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/"); //redirecting to homepage
  };


  return (
    <>
      {isUserAuthenticated &&
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
      }
    </>
  );
};

export default Logout;