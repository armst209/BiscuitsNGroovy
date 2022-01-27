//react imports
import { useState } from "react";

//styles
import "./LogoutStyles.scss";

//svg imports
import { ReactComponent as LogoutIcon } from "../../../assets/images/logout-yellow.svg";

//component imports
import LogoutLoading from "../../Loading/Logout/LogoutLoading";

//TOKEN
let token = localStorage.getItem("token");

const Logout = ({ showLogoutLoaderHandler, hideLogoutLoaderHandler }) => {
  const handleLogout = () => {
    showLogoutLoaderHandler(); //showing loader
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
