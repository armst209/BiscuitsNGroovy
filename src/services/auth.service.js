
//axios
import axios from "axios";

//action type imports
import { LOGIN_SUCCESS, LOGIN_FAIL, TOKEN_REMOVED } from "../redux/action-types/types";


/**
* async POST request with axios library
* @param {*} credentials object that contains username and password strings
* @returns token from backend
*/
export const loginRequest = async (credentials) => {

    return axios({
        method: "POST",
        url: `${process.env.REACT_APP_BACKEND_URL}/login`,
        data: credentials,
    }).then(response => response).catch(error => error.response);

}

export const removeLocalStorageAuthToken = () => {
    localStorage.removeItem("auth_token");
    return { error: null, action: { type: TOKEN_REMOVED } }
}

//credentials  ==  email, name(empty string), username, password, flow_address
export const register = async (credentials = {}) => {
    return await axios({ method: "POST", url: `${process.env.REACT_APP_BACKEND_URL}/registration`, data: credentials });
};

