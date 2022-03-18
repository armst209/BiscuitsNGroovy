
//styles
import "./LogoutStyles.scss";

//svg imports
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { authenticationActions } from "../../../redux/slices/authentication.slice";

const Logout = ({ showHideLogoutLoaderHandler }) => {

  const isUserAuthenticated = useSelector(state => state.authentication.isUserAuthenticated);
  const dispatch = useDispatch()

  const handleLogout = () => {
    showHideLogoutLoaderHandler(); //showing loader
    dispatch(authenticationActions.loggedOut())//changing redux slice state
    localStorage.removeItem("token"); //removing token from local storage
    window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/"); //redirecting to homepage
  };

  return (
    <>
      {isUserAuthenticated && (
        <li className="logout-button">
          <div
            onClick={handleLogout}
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