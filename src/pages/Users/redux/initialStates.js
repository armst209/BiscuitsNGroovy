import { USER_AUTHENTICATION, USER_LOGIN } from "./types";
const authToken = JSON.parse(localStorage.getItem("bng_user")).authentication.token;
const isAuthenticated = JSON.parse(localStorage.getItem("bng_user")).authentication.isAuthenticated;
const tokenSet = JSON.parse(localStorage.getItem("bng_user")).authentication.isTokenSet;


const initialUserAuthState = authToken && tokenSet && isAuthenticated
    ? {
        status: USER_AUTHENTICATION.AUTHENTICATED,
        token: authToken,
        isTokenSet: true,
        isAuthenticated: true
    }
    : {
        status: USER_AUTHENTICATION.NOT_AUTHENTICATED,
        token: null,
        isTokenSet: false,
        isAuthenticated: false
    };

const initialUserLoginState = {
    data: null,
    error: null,
    status: USER_LOGIN.LOGGED_OUT

};
const initialUserRegistrationState = {

    data: null,
    error: null,
    status: "",
    flowData: null,
    isFlowTokenSet: false,
    isBloctoAccountLinked: false,
};

const initialUserIdentificationState = {
    id: null,
    username: "",
    email: "",
    role: "user"
}



export { initialUserLoginState, initialUserRegistrationState, initialUserAuthState, initialUserIdentificationState };