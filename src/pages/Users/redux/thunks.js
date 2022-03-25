
//axios
import axios from "axios"

//action imports
import { loginError, loginSuccess, postingCredentials } from "./actions";
import { authenticationActions } from "../../../redux/slices/authentication/authentication.slice";

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

        if (getState.status === "SUCCESS") {
            //successful user authentication
            dispatch(authenticationActions.USER_AUTHENTICATED(response.data.token));
        }

        console.log(getState());
    } catch (error) {
        console.log(error.response);

        //removing token if incorrectly set
        dispatch(authenticationActions.USER_NOT_AUTHENTICATED());
        //login failure
        dispatch(loginError(loginError(error.response)))
        console.log(getState());
    }
}
