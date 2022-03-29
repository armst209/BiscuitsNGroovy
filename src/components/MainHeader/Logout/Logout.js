
//styles
import "./LogoutStyles.scss";

//svg imports
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";

//redux imports
import { useDispatch } from "react-redux";
// import { authenticationActions } from "../../../redux/slices/authentication/authentication.slice";
import { userLoggedOut, userNotAuthenticated } from "../../../pages/Users/redux/actions";

import store from "../../../redux";


const Logout = ({ showHideLogoutLoaderHandler }) => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    showHideLogoutLoaderHandler(); //showing loader
    dispatch(userNotAuthenticated());
    dispatch(userLoggedOut());
    console.log(store.getState());
    //setting local storage user 
    localStorage.setItem("bng_user", JSON.stringify(store.getState().bng_user));

    console.log(localStorage.getItem("bng_user"));
    // window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/"); //redirecting to homepage

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