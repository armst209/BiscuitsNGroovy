
//styles
import "./LogoutStyles.scss";

//svg imports
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { authenticationActions } from "../../../redux/slices/authentication.slice";
import { LOGOUT } from "../../../redux/action-types/types";

const Logout = ({ showHideLogoutLoaderHandler }) => {

  const currentAuthState = useSelector(state => state.authentication);
  const dispatch = useDispatch()

  const handleLogout = () => {
    showHideLogoutLoaderHandler(); //showing loader
    dispatch(authenticationActions.logout(currentAuthState, { type: LOGOUT, payload: null }))//changing redux slice state
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