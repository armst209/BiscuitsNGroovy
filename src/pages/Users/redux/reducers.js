//redux imports
import { combineReducers } from "@reduxjs/toolkit";

//types
import { USER_LOGIN, USER_AUTHENTICATION, USER_REGISTRATION } from "./types";

//initial states
import { initialUserLoginState, initialUserAuthState, initialUserRegistrationState, initialUserIdentificationState } from "./initialStates";



//login reducer

const userLoginReducer = (state = initialUserLoginState, action) => {
    switch (action.type) {
        case USER_LOGIN.POSTING:
            return { ...state, data: null, error: null, status: USER_LOGIN.POSTING };
        case USER_LOGIN.POSTED:
            return { ...state, data: null, error: null, status: USER_LOGIN.POSTED };
        case USER_LOGIN.SUCCESS:
            return { ...state, data: action.payload, error: null, status: USER_LOGIN.SUCCESS }
        case USER_LOGIN.ERROR:
            return { ...state, data: null, error: action.payload, status: USER_LOGIN.ERROR }
        case USER_LOGIN.LOGGED_IN:
            return { ...state, data: null, error: null, status: USER_LOGIN.LOGGED_IN }
        case USER_LOGIN.LOGGED_OUT:
            return { ...state, data: null, error: null, status: USER_LOGIN.LOGGED_OUT }

        default:
            return state;
    }
}

//registration reducer

const userRegistrationReducer = (state = initialUserRegistrationState, action) => {
    return state;
}

//authentication reducer

const userAuthenticationReducer = (state = initialUserAuthState, action) => {

    switch (action.type) {
        case USER_AUTHENTICATION.AUTHENTICATING:
            return { ...state, status: USER_AUTHENTICATION.AUTHENTICATING, token: null, isTokenSet: false, isAuthenticated: false };
        case USER_AUTHENTICATION.AUTHENTICATED:
            return { ...state, status: USER_AUTHENTICATION.AUTHENTICATED, token: action.payload, isTokenSet: true, isAuthenticated: true };
        case USER_AUTHENTICATION.NOT_AUTHENTICATED:
            return { ...state, status: USER_AUTHENTICATION.NOT_AUTHENTICATED, token: null, isTokenSet: false, isAuthenticated: false }
        default:
            return state;
    };
}



const userIdentificationReducer = (state = initialUserIdentificationState, action) => {
    switch (action.type) {


        default:
            return state;
    }


}




export default combineReducers({ identification: userIdentificationReducer, login: userLoginReducer, registration: userRegistrationReducer, authentication: userAuthenticationReducer });