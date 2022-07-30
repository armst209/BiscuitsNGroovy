//axios
import axios from "axios"

//action imports
import { authenticatingUser, userAuthenticated, userNotAuthenticated } from "./actions";

//type imports
import { USER_AUTHENTICATION } from "./types";

export const postUserCredentialsThunk = (credentials) => async (dispatch, getState) => {


    dispatch(authenticatingUser());
    try {
        const response = await axios({
            method: "POST",
            url: `${import.meta.env.VITE_BACKEND_URL}/login`,
            data: credentials,
        });

        //user is authenticated only if status === "LOGIN SUCCESS" && login.data (token) is not falsy
        if (getState()?.bng_user.status === USER_AUTHENTICATION.AUTHENTICATED)
            dispatch(userAuthenticated(response.data.token));
        //setting user object in local storage
        localStorage.setItem("bng_user", JSON.stringify(getState().bng_user));
        //redirecting to homepage
        window.location.replace(`${import.meta.env.VITE_FRONTEND_URL}/`);
    } catch (error) {
        //user not authenticated
        dispatch(userNotAuthenticated());

    }
}