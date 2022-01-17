//react imports
import { useState } from "react";

//styles
import "./LogoutStyles.scss";

//svg imports
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";

//component imports
import LogoutLoading from "../../Loading/Logout/LogoutLoading";

const Logout = () => {
  const [showLogoutLoadingMobileModal, setShowLogoutLoadingMobileModal] =
    useState(false);

  //handlers
  const showLogoutLoaderMobileHandler = () => {
    setShowLogoutLoadingMobileModal(true);
  };

  const hideLogoutLoaderMobileHandler = () => {
    setShowLogoutLoadingMobileModal(false);
  };

  const handleLogout = () => {
    showLogoutLoaderMobileHandler(); //showing loader
    localStorage.clear(); //clearing local storage
    window.location.replace(process.env.REACT_APP_FRONTEND_URL + "/"); //redirecting to homepage
    hideLogoutLoaderMobileHandler(); //hiding loader
  };

  //TOKEN
  let token = localStorage.getItem("token");

  return (
    <>
      {showLogoutLoadingMobileModal && <LogoutLoading />}
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
