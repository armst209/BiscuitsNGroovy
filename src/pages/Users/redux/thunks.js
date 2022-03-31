
//axios
import axios from "axios"

//action imports
import { authenticatingUser, loginError, loginSuccess, postedCredentials, postingCredentials, userAuthenticated, userLoggedIn, userNotAuthenticated } from "./actions";

//type imports
import { USER_LOGIN } from "./types";

export const postUserCredentialsThunk = (credentials) => async (dispatch, getState) => {

    //posting credentials & authenticating dispatches 
    dispatch(postingCredentials());
    dispatch(authenticatingUser());
    try {
        const response = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_BACKEND_URL}/login`,
            data: credentials,
        });

        //successful login
        dispatch(loginSuccess(response.data.token));

        //user is authenticated only if status === "LOGIN SUCCESS" && login.data (token) is not falsy
        if (getState()?.bng_user.login.status === USER_LOGIN.SUCCESS && getState()?.bng_user.login.data) {
            //successful user authentication
            dispatch(userAuthenticated(response.data.token));
            //credentials posted
            dispatch(postedCredentials());
            //user logged in
            dispatch(userLoggedIn());
            console.log(getState());
            //setting user object in local storage
            localStorage.setItem("bng_user", JSON.stringify(getState().bng_user));
            //redirecting to homepage
            window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}/`);
        }

    } catch (error) {

        //user not authenticated
        dispatch(userNotAuthenticated());
        //login failure
        dispatch(loginError(error.response ?? error));
    }
}
