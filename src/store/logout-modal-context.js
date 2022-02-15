//react imports
import { createContext, useState } from "react";

const LogoutModalContext = createContext({ showLogoutLoadingModal: false, handler: () => { } });

export const LogoutModalContextProvider = (props) => {
    //context state
    const [showLogoutLoadingModal, setShowLogoutLoadingModal] = useState(false);

    //change handler
    const showHideLogoutLoaderHandler = () => {
        setShowLogoutLoadingModal((previousState) => {
            return !previousState;
        });
    };

    //context value
    const contextValue = { showLogoutLoadingModal: showLogoutLoadingModal, handler: showHideLogoutLoaderHandler };

    return (
        <LogoutModalContext.Provider value={contextValue}>
            {props.children}
        </LogoutModalContext.Provider>
    )
}

export default LogoutModalContext;