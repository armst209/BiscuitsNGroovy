import { USER_AUTHENTICATION } from "./types";

const authToken = JSON.parse(localStorage.getItem("bng_user"))?.authentication.token;
const isAuthenticated = JSON.parse(localStorage.getItem("bng_user"))?.authentication.isAuthenticated;
const tokenSet = JSON.parse(localStorage.getItem("bng_user"))?.authentication.isTokenSet;

const initialUserAuthState = isAuthenticated && tokenSet ?
    {
        status: USER_AUTHENTICATION.AUTHENTICATED,
        token: authToken,
        isTokenSet: true,
        isAuthenticated: true
    } : {
        status: USER_AUTHENTICATION.NOT_AUTHENTICATED,
        token: null,
        isTokenSet: false,
        isAuthenticated: false
    };





export { initialUserAuthState };