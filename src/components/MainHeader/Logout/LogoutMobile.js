//styles
import "./LogoutStyles.scss";

//svg imports
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";

//redux imports
import { useDispatch } from "react-redux";
import { authenticationActions } from "../../../redux/slices/authentication/authentication.slice";


const Logout = ({ showHideLogoutLoaderHandler }) => {


  const dispatch = useDispatch();

  const handleLogout = () => {
    showHideLogoutLoaderHandler(); //showing loader
    dispatch(authenticationActions.USER_NOT_AUTHENTICATED());
    window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/"); //redirecting to homepage
  };


  return (

    <li className="logout-button">
      <div
        onClick={handleLogout}
      >
        Logout
      </div>
      <LogoutIcon />
    </li>


  );
};

export default Logout;