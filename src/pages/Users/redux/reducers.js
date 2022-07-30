//redux imports
import { combineReducers } from "@reduxjs/toolkit";

//types
import { USER_AUTHENTICATION } from "./types";

//initial states
import { initialUserAuthState } from "./initialStates";

//authentication reducer

const userAuthenticationReducer = (state = initialUserAuthState, action) => {

    switch (action.type) {
        case USER_AUTHENTICATION.AUTHENTICATING:
            return {
                status: USER_AUTHENTICATION.AUTHENTICATING, token: null, isTokenSet: false, isAuthenticated: false
            };
        case USER_AUTHENTICATION.AUTHENTICATED:
            return {
                status: USER_AUTHENTICATION.AUTHENTICATED, token: action.payload, isTokenSet: true, isAuthenticated: true
            };
        case USER_AUTHENTICATION.NOT_AUTHENTICATED:
            return {
                status: USER_AUTHENTICATION.NOT_AUTHENTICATED, token: null, isTokenSet: false, isAuthenticated: false
            }
        default:
            return state;
    };
}


export default combineReducers({
    authentication: userAuthenticationReducer
});