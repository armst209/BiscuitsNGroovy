
//axios
import axios from "axios"

//action imports
import { loginError, loginSuccess, postingCredentials } from "./actions";
import { authenticationActions } from "../../../redux/slices/authentication/authentication.slice";
import { USER_LOGIN_TYPES } from "./types";
import { Redirect } from "react-router-dom";

export const postUserCredentialsThunk = (credentials) => async (dispatch, getState) => {

    //dispatching loading action
    dispatch(postingCredentials());
    try {
        const response = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_BACKEND_URL}/login`,
            data: credentials,
        });
        //successful login
        dispatch(loginSuccess(response.data.token));

        //user is authenticated only if status === "LOGIN SUCCESS" && login.data (token) is not falsy
        if (getState()?.login.status === USER_LOGIN_TYPES.SUCCESS && getState()?.login.data) {
            //successful user authentication
            dispatch(authenticationActions.USER_AUTHENTICATED(response.data.token));
            window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}/`);
        }

    } catch (error) {
        console.log(error.response);
        //removing token if incorrectly set
        dispatch(authenticationActions.USER_NOT_AUTHENTICATED());
        //login failure
        dispatch(loginError(error.response));
    }
}
