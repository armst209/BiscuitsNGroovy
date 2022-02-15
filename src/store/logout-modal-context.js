import React from "react";

const LogoutModalContext = React.createContext({ showLogoutLoadingModal: false, handler: () => { } });

export default LogoutModalContext;